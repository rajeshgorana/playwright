import { test as base, expect } from '@playwright/test';
import { GettingStartedPage } from '../pages/GettingStartedPage';
import { HomePage } from '../pages/HomePage';

type PageObjects = {
  homePage: HomePage;
  gettingStartedPage: GettingStartedPage;
};

export const test = base.extend<PageObjects>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  gettingStartedPage: async ({ page }, use) => {
    await use(new GettingStartedPage(page));
  },
});

export { expect };
