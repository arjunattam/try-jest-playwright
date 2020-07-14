/// <reference types="jest-playwright-preset" />

beforeEach(async () => {
  await jestPlaywright.resetContext();
});

describe('test suite 1', () => {
  it('should display "google" text on page', async () => {
    await page.goto('https://whatismybrowser.com/')
    const browser = await page.$eval('.string-major', (el) => el.innerHTML);
    expect(browser).toContain('Chrome');

    // Fail to generate screenshot
    expect(1).toBe(2);
  });

  it('should reset the page', async () => {
    expect(page.url()).toBe('about:blank');

    // Fail to generate screenshot
    expect(1).toBe(2);
  });
});