# Stripe Integration Documentation

This document outlines the Stripe integration for the Tech Hilfe Pro NRW website, covering the checkout flow, test matrix, and webhook handling.

## 1. Checkout Flow

The checkout process is initiated via a `POST` request to `/api/checkout`. This endpoint creates a Stripe Checkout Session with the following key features:

- **`custom_text.submit.message`**: Displays the §19 UStG notice on the Stripe Checkout page:
  > Alle Preise sind Endpreise. Gemäß §19 UStG erhebe ich keine Umsatzsteuer und weise diese daher auch nicht aus.
- **No `automatic_tax`**: Tax calculation is disabled to comply with the §19 UStG small business regulation.
- **Customer Email**: The customer's email is passed to the session for pre-filling and receipt delivery.
- **Success and Cancel URLs**: Redirects the user to the appropriate page after the checkout process.

## 2. Test Matrix

The following test cases should be executed to ensure the Stripe integration is working correctly:

| Scenario | Test Card | Expected Result |
|---|---|---|
| **Successful Payment** | Visa (4242...) | Redirect to success URL, `checkout.session.completed` webhook received. |
| **Payment Failure** | Visa (insufficient funds) | Redirect to cancel URL, error message displayed. |
| **3D Secure Authentication** | Visa (3D Secure) | 3D Secure modal appears, payment succeeds after authentication. |
| **Invalid Card Number** | Invalid card number | Error message displayed on checkout page. |
| **Expired Card** | Expired card | Error message displayed on checkout page. |

## 3. Webhook Handling

The `/api/stripe/webhook` endpoint handles incoming webhook events from Stripe. It performs the following actions:

- **Signature Verification**: Verifies the webhook signature using the `STRIPE_WEBHOOK_SECRET` to ensure the request is from Stripe.
- **Event Handling**: Processes the following events:
  - `checkout.session.completed`: Triggered when a customer completes a checkout session. This is where you should implement your business logic, such as creating a customer in your database, sending a confirmation email, and logging the event.
  - `payment_intent.succeeded`: Triggered when a payment succeeds.
  - `payment_intent.payment_failed`: Triggered when a payment fails.
  - `invoice.paid`: Triggered when an invoice is paid.
  - `invoice.payment_failed`: Triggered when an invoice payment fails.

**Note:** The webhook handler includes `TODO` comments where you should add your specific business logic for each event.
