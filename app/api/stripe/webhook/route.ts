/**
 * Stripe Webhook API Route
 * 
 * Handles Stripe webhook events with signature verification.
 * Processes checkout.session.completed and other payment events.
 * 
 * @route POST /api/stripe/webhook
 */

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    if (!signature) {
      console.error('Missing Stripe signature header');
      return NextResponse.json(
        { error: 'Missing signature' },
        { status: 400 }
      );
    }

    if (!webhookSecret) {
      console.error('STRIPE_WEBHOOK_SECRET is not configured');
      return NextResponse.json(
        { error: 'Webhook secret not configured' },
        { status: 500 }
      );
    }

    // Verify webhook signature
    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      console.error('Webhook signature verification failed:', err);
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      );
    }

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log('Checkout session completed:', session.id);

        // TODO: Implement business logic
        // - Create/update customer in D1 database
        // - Create invoice record
        // - Send confirmation email via Resend
        // - Log event in audit_logs table

        // Example: Extract customer information
        const customerEmail = session.customer_email || session.customer_details?.email;
        const customerId = session.customer as string | null;
        const amountTotal = session.amount_total;
        const currency = session.currency;

        console.log('Payment details:', {
          customerEmail,
          customerId,
          amountTotal,
          currency,
        });

        break;
      }

      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log('Payment intent succeeded:', paymentIntent.id);

        // TODO: Implement business logic
        // - Update payment record in D1 database
        // - Log event in audit_logs table

        break;
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log('Payment intent failed:', paymentIntent.id);

        // TODO: Implement business logic
        // - Update payment record status
        // - Send failure notification email
        // - Log event in audit_logs table

        break;
      }

      case 'invoice.paid': {
        const invoice = event.data.object as Stripe.Invoice;
        console.log('Invoice paid:', invoice.id);

        // TODO: Implement business logic
        // - Update invoice status in D1 database
        // - Send receipt email via Resend
        // - Log event in audit_logs table

        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;
        console.log('Invoice payment failed:', invoice.id);

        // TODO: Implement business logic
        // - Update invoice status
        // - Send payment failure notification
        // - Log event in audit_logs table

        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook processing error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

// Disable body parsing for webhook route
export const config = {
  api: {
    bodyParser: false,
  },
};

