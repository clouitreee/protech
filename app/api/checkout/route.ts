/**
 * Stripe Checkout Session API Route
 * 
 * Creates a Stripe Checkout Session for payment processing.
 * Includes §19 UStG notice in custom_text.submit.message.
 * 
 * @route POST /api/checkout
 */

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

// Whitelist of allowed price IDs (configure based on your Stripe products)
const ALLOWED_PRICE_IDS = [
  // Add your Stripe price IDs here
  // Example: 'price_1234567890abcdef'
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { priceId, quantity = 1, customerEmail, mode = 'payment' } = body;

    // Validation
    if (!priceId || typeof priceId !== 'string') {
      return NextResponse.json(
        { error: 'Valid Price ID is required' },
        { status: 400 }
      );
    }

    // Validate priceId against whitelist (if configured)
    if (ALLOWED_PRICE_IDS.length > 0 && !ALLOWED_PRICE_IDS.includes(priceId)) {
      return NextResponse.json(
        { error: 'Invalid Price ID' },
        { status: 400 }
      );
    }

    if (!customerEmail || typeof customerEmail !== 'string') {
      return NextResponse.json(
        { error: 'Valid customer email is required' },
        { status: 400 }
      );
    }

    if (typeof quantity !== 'number' || quantity < 1) {
      return NextResponse.json(
        { error: 'Quantity must be at least 1' },
        { status: 400 }
      );
    }

    if (mode !== 'payment' && mode !== 'subscription') {
      return NextResponse.json(
        { error: 'Mode must be "payment" or "subscription"' },
        { status: 400 }
      );
    }

    const appUrl = process.env.APP_URL || 'http://localhost:3000';

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: mode as 'payment' | 'subscription',
      customer_email: customerEmail,
      line_items: [
        {
          price: priceId,
          quantity,
        },
      ],
      success_url: `${appUrl}/success?cs_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/cancel`,
      // §19 UStG notice - no VAT charged
      custom_text: {
        submit: {
          message: 'Alle Preise sind Endpreise. Gemäß §19 UStG erhebe ich keine Umsatzsteuer und weise diese daher auch nicht aus.',
        },
      },
      // Do NOT enable automatic_tax as per §19 UStG
      // automatic_tax: { enabled: false },
      metadata: {
        source: 'tech-hilfe-pro-nrw',
      },
    });

    return NextResponse.json({
      sessionId: session.id,
      url: session.url,
    });
  } catch (error) {
    console.error('Stripe Checkout Session creation error:', error);

    // Generic error response to avoid leaking sensitive information
    return NextResponse.json(
      { error: 'Failed to create checkout session. Please try again later.' },
      { status: 500 }
    );
  }
}

