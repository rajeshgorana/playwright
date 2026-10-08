import type { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly getStartedLink: Locator;

  constructor(private readonly page: Page) {
    this.getStartedLink = page.getByRole('link', { name: 'Get started' });
  }

  async goto(): Promise<void> {
    await this.page.goto('/');
  }

  async openGettingStarted(): Promise<void> {
    await this.getStartedLink.click();
  }
}
