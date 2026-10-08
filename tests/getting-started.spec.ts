import { test, expect } from '../fixtures/test';

test.describe('Playwright getting started', () => {
  test('home page has the expected title', async ({ homePage, page }) => {
    await homePage.goto();

    await expect(page).toHaveTitle(/Playwright/);
  });

  test('opens the installation guide', async ({ homePage, gettingStartedPage }) => {
    await homePage.goto();
    await homePage.openGettingStarted();

    await expect(gettingStartedPage.installationHeading).toBeVisible();
  });
});
