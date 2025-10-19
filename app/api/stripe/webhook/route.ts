import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16', // Pin your version as per previous instructions
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  const signature = request.headers.get('stripe-signature');
  if (!signature) {
    return NextResponse.json({ error: 'Missing Stripe signature header' }, { status: 400 });
  }

  // IMPORTANT: read raw body; do NOT use req.json()
  const rawBody = await request.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      webhookSecret
    );
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // Handle only necessary events as per instructions
  switch (event.type) {
    case 'checkout.session.completed':
      // ... your logic
      break;
    case 'invoice.payment_succeeded':
      // ... your logic
      break;
    default:
      // Optionally log unhandled types
      console.log(`Unhandled event type: ${event.type}`);
      break;
  }

  return NextResponse.json({ received: true }, { status: 200 });
}

