import {test,expect} from '@playwright/test';

test('login test', async ({ page }) => {
  await page.goto('https://example.com/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('testuser');
  await page.getByRole('textbox', { name: 'Password' }).fill('password123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL('https://example.com/dashboard');

  await expect(page.getByRole('heading', { name: 'Welcome, testuser!' })).toBeVisible();

})
