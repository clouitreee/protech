/**
 * Contact Form API Route
 * 
 * Sends contact form emails via Resend with anti-spam measures:
 * - Rate limiting
 * - Honeypot field
 * - Time trap (minimum time to fill form)
 * - Logging for GDPR/NIS2 compliance
 * 
 * @route POST /api/contact
 */

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiting (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds
const RATE_LIMIT_MAX_REQUESTS = 3; // Max 3 requests per hour per IP
const MIN_FORM_FILL_TIME = 3000; // Minimum 3 seconds to fill the form (time trap)

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  honeypot?: string; // Should be empty
  formStartTime?: number; // Timestamp when form was loaded
}

function getRateLimitKey(ip: string): string {
  return `rate_limit:${ip}`;
}

function checkRateLimit(ip: string): boolean {
  const key = getRateLimitKey(ip);
  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record || now > record.resetTime) {
    // Reset or create new record
    rateLimitMap.set(key, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false; // Rate limit exceeded
  }

  record.count++;
  return true;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input: string): string {
  // Basic sanitization to prevent XSS
  return input.replace(/[<>]/g, '');
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

    // Check rate limit (if enabled)
    const rateLimitEnabled = process.env.ENABLE_CONTACT_RATE_LIMIT === '1';
    if (rateLimitEnabled && !checkRateLimit(ip)) {
      console.warn(`Rate limit exceeded for IP: ${ip}`);
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body: ContactFormData = await request.json();
    const { name, email, phone, company, message, honeypot, formStartTime } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Honeypot check (bot detection)
    if (honeypot && honeypot.trim() !== '') {
      console.warn(`Honeypot triggered for IP: ${ip}`);
      // Return success to avoid revealing the honeypot
      return NextResponse.json({ success: true });
    }

    // Time trap check (bot detection)
    if (formStartTime) {
      const formFillTime = Date.now() - formStartTime;
      if (formFillTime < MIN_FORM_FILL_TIME) {
        console.warn(`Time trap triggered for IP: ${ip}, fill time: ${formFillTime}ms`);
        // Return success to avoid revealing the time trap
        return NextResponse.json({ success: true });
      }
    }

    // Email validation
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedPhone = phone ? sanitizeInput(phone) : '';
    const sanitizedCompany = company ? sanitizeInput(company) : '';
    const sanitizedMessage = sanitizeInput(message);

    // Prepare email content
    const emailSubject = `Neue Kontaktanfrage von ${sanitizedName}`;
    const emailHtml = `
      <h2>Neue Kontaktanfrage</h2>
      <p><strong>Name:</strong> ${sanitizedName}</p>
      <p><strong>E-Mail:</strong> ${sanitizedEmail}</p>
      ${sanitizedPhone ? `<p><strong>Telefon:</strong> ${sanitizedPhone}</p>` : ''}
      ${sanitizedCompany ? `<p><strong>Firma:</strong> ${sanitizedCompany}</p>` : ''}
      <p><strong>Nachricht:</strong></p>
      <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>IP: ${ip} | Zeitstempel: ${new Date().toISOString()}</small></p>
    `;

    const emailText = `
Neue Kontaktanfrage

Name: ${sanitizedName}
E-Mail: ${sanitizedEmail}
${sanitizedPhone ? `Telefon: ${sanitizedPhone}` : ''}
${sanitizedCompany ? `Firma: ${sanitizedCompany}` : ''}

Nachricht:
${sanitizedMessage}

---
IP: ${ip} | Zeitstempel: ${new Date().toISOString()}
    `;

    // Send email via Resend
    const mailFrom = process.env.MAIL_FROM || 'noreply@tech-hilfe-pro-nrw.de';
    
    const { data, error } = await resend.emails.send({
      from: mailFrom,
      to: mailFrom, // Send to self
      reply_to: sanitizedEmail, // Allow direct reply to customer
      subject: emailSubject,
      html: emailHtml,
      text: emailText,
    });

    if (error) {
      console.error('Resend email sending error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // TODO: Log to audit_logs table in D1 database for GDPR/NIS2 compliance
    console.log('Contact form submitted:', {
      emailId: data?.id,
      customerEmail: sanitizedEmail,
      ip,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen.',
    });
  } catch (error) {
    console.error('Contact form processing error:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    );
  }
}

