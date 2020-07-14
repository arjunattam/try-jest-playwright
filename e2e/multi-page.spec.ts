/// <reference types="jest-playwright-preset" />

beforeEach(async () => {
  await jestPlaywright.resetContext();
});

describe('multi-page tests', () => {
  it('context can have multiple pages', async () => {
    let page1 = await context.newPage();
    let page2 = await context.newPage();
    await page1.goto('https://bing.com');
    await page2.goto('https://google.com');

    // Fail to generate screenshot
    expect(1).toBe(2);
  });

  it('open new tab', async () => {
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.evaluate(() => window.open('https://google.com', '_blank'))
    ])
    await newPage.waitForLoadState();
    console.log(await newPage.title());

    // Fail to generate screenshot
    expect(1).toBe(2);
  });
});