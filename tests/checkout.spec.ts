import { test, expect } from '@playwright/test';

test.describe('Stripe Checkout', () => {
  test('should create a checkout session with valid data', async ({ request }) => {
    const response = await request.post('/api/checkout', {
      data: {
        priceId: 'price_test_123',
        quantity: 1,
        customerEmail: 'test@example.com',
        successUrl: 'http://localhost:3000/success',
        cancelUrl: 'http://localhost:3000/cancel',
      },
    });
    
    expect(response.status()).toBe(200);
    
    const data = await response.json();
    expect(data).toHaveProperty('sessionId');
    expect(data).toHaveProperty('url');
  });

  test('should return 400 if priceId is missing', async ({ request }) => {
    const response = await request.post('/api/checkout', {
      data: {
        customerEmail: 'test@example.com',
      },
    });
    
    expect(response.status()).toBe(400);
    
    const data = await response.json();
    expect(data).toHaveProperty('error');
  });

  test('should return 400 if customerEmail is missing', async ({ request }) => {
    const response = await request.post('/api/checkout', {
      data: {
        priceId: 'price_test_123',
      },
    });
    
    expect(response.status()).toBe(400);
    
    const data = await response.json();
    expect(data).toHaveProperty('error');
  });
});

