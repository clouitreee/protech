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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { priceId, quantity = 1, customerEmail, successUrl, cancelUrl } = body;

    // Price ID Whitelist (replace with your actual price IDs)
    const ALLOWED_PRICE_IDS = [
      process.env.STRIPE_PRICE_ID_BASIC!,
      process.env.STRIPE_PRICE_ID_PREMIUM!,
    ];

    if (!ALLOWED_PRICE_IDS.includes(priceId)) {
      return NextResponse.json(
        { status: 'error', message: 'Invalid Price ID' },
        { status: 400 }
      );
    }

    // Quantity Limits
    const MAX_QUANTITY = 5; // Example: limit to 5 items
    if (quantity < 1 || quantity > MAX_QUANTITY) {
      return NextResponse.json(
        { status: 'error', message: `Quantity must be between 1 and ${MAX_QUANTITY}` },
        { status: 400 }
      );
    }

    // Validation
    if (!priceId) {
      return NextResponse.json(
        { status: 'error', message: 'Price ID is required' },
        { status: 400 }
      );
    }

    if (!customerEmail) {
      return NextResponse.json(
        { status: 'error', message: 'Customer email is required' },
        { status: 400 }
      );
    }

    const appUrl = process.env.APP_URL || 'http://localhost:3000';

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      customer_email: customerEmail,
      line_items: [
        {
          price: priceId,
          quantity,
        },
      ],
      success_url: successUrl || `${appUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${appUrl}/cancel`,
      // §19 UStG notice - no VAT charged
      custom_text: {
        submit: {
          message: 'Alle Preise sind Endpreise. Gemäß §19 UStG erhebe ich keine Umsatzsteuer und weise diese daher auch nicht aus.',
        },
      },
      // Do NOT enable automatic_tax as per §19 UStG
      automatic_tax: { enabled: false },
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

    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { status: 'error', message: error.message },
        { status: error.statusCode || 500 }
      );
    }

      return NextResponse.json(
        { status: 'error', message: 'Failed to create checkout session' },
        { status: 500 }
      );
  }
}

