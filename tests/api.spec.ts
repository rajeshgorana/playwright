import { test, expect } from '@playwright/test';

test('user profile API returns the contract', async ({ request }) => {
  const apiToken = (globalThis as any).process?.env?.API_TOKEN ?? '';

  const response = await request.get('/api/user/123', {
    headers: { Authorization: 'Bearer ' + apiToken },
  });
  expect(response.status()).toBe(200);

  const user = await response.json();
  expect(user).toHaveProperty('email');
});