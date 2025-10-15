import { test, expect } from '@playwright/test';

test.describe('Database Health Check', () => {
  test('should return 200 OK with health check data', async ({ request }) => {
    const response = await request.get('/api/db/health');
    
    expect(response.status()).toBe(200);
    
    const data = await response.json();
    expect(data).toHaveProperty('status', 'ok');
    expect(data).toHaveProperty('message');
    expect(data).toHaveProperty('timestamp');
  });

  test('should have Cache-Control: no-store header', async ({ request }) => {
    const response = await request.get('/api/db/health');
    
    const cacheControl = response.headers()['cache-control'];
    expect(cacheControl).toContain('no-store');
  });
});

