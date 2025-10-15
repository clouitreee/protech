import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test('should send email with valid data', async ({ request }) => {
    const response = await request.post('/api/contact', {
      data: {
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a test message.',
        formStartTime: Date.now() - 5000, // 5 seconds ago
      },
    });
    
    expect(response.status()).toBe(200);
    
    const data = await response.json();
    expect(data).toHaveProperty('success', true);
    expect(data).toHaveProperty('message');
  });

  test('should return 400 if required fields are missing', async ({ request }) => {
    const response = await request.post('/api/contact', {
      data: {
        name: 'Test User',
      },
    });
    
    expect(response.status()).toBe(400);
    
    const data = await response.json();
    expect(data).toHaveProperty('error');
  });

  test('should trigger honeypot and return success (to avoid revealing the trap)', async ({ request }) => {
    const response = await request.post('/api/contact', {
      data: {
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a test message.',
        honeypot: 'bot-filled-this',
        formStartTime: Date.now() - 5000,
      },
    });
    
    expect(response.status()).toBe(200);
    
    const data = await response.json();
    expect(data).toHaveProperty('success', true);
  });

  test('should trigger time trap and return success (to avoid revealing the trap)', async ({ request }) => {
    const response = await request.post('/api/contact', {
      data: {
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a test message.',
        formStartTime: Date.now() - 1000, // 1 second ago (too fast)
      },
    });
    
    expect(response.status()).toBe(200);
    
    const data = await response.json();
    expect(data).toHaveProperty('success', true);
  });

  test('should return 400 for invalid email', async ({ request }) => {
    const response = await request.post('/api/contact', {
      data: {
        name: 'Test User',
        email: 'invalid-email',
        message: 'This is a test message.',
        formStartTime: Date.now() - 5000,
      },
    });
    
    expect(response.status()).toBe(400);
    
    const data = await response.json();
    expect(data).toHaveProperty('error');
  });
});

