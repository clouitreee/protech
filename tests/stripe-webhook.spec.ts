import { test, expect } from '@playwright/test';

test.describe('Stripe Webhook', () => {
  test('should verify Stripe signature', async ({ request }) => {
    // This is a minimal test to ensure the webhook route is set up to receive and process requests.
    // Actual signature verification is done by Stripe's SDK internally.
    // We are simulating a POST request with a dummy signature and body.

    const dummyPayload = JSON.stringify({ id: 'evt_test', type: 'checkout.session.completed' });
    const dummySignature = 't=123,v1=abc'; // This will fail actual verification, but tests the route handler path

    const response = await request.post('/api/stripe/webhook', {
      headers: {
        'stripe-signature': dummySignature,
        'Content-Type': 'application/json',
      },
      data: dummyPayload,
    });

    // Expecting a 400 because the dummy signature will cause verification to fail,
    // but it confirms the route is hit and signature check is attempted.
    expect(response.status()).toBe(400);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('error');
  });
});
