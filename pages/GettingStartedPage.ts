import type { Locator, Page } from '@playwright/test';

export class GettingStartedPage {
  readonly installationHeading: Locator;

  constructor(page: Page) {
    this.installationHeading = page.getByRole('heading', { name: 'Installation' });
  }
}
