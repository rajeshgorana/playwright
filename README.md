# Playwright POM framework

This project uses Playwright Test with TypeScript and the Page Object Model (POM). Tests live in `tests/`, page-specific locators and actions live in `pages/`, and `fixtures/test.ts` creates page objects for each test using Playwright's isolated `page` fixture.

## Setup

```bash
npm ci
npx playwright install
```

## Run tests

```bash
npm test
npm test -- --project=chromium
npm run test:headed
npm run test:ui
npm run test:debug
npm run test:report
```

The default base URL is `https://playwright.dev`. Set `BASE_URL` to point the suite at your application, for example in PowerShell:

```powershell
$env:BASE_URL = "http://localhost:3000"
npm test
```

Use relative navigation in page objects (for example, `page.goto('/')`) so tests work with the configured base URL. Keep selectors and UI actions in page objects; keep scenario flow and assertions in spec files. Add new page objects in `pages/` and expose them as fixtures in `fixtures/test.ts` when they are used by tests.
