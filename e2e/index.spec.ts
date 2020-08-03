/// <reference types="jest-playwright-preset" />
const fs = require('fs');

describe('test suite 1', () => {
  beforeAll(async () => {
    const cookies = process.env.COOKIES;
    const localStorage = process.env.LOCALSTORAGE;

    // Some apps only need cookies (not local storage)
    context.addCookies(JSON.parse(cookies));
    context.addInitScript(([storageDump]) => {
      if (window.location.hostname === 'online.visualstudio.com') {
        console.log(storageDump.length);
        const entries = JSON.parse(storageDump);
        Object.keys(entries).forEach(k => {
          window.localStorage.setItem(k, entries[k]);
        });
      }
    }, [localStorage]);
  });

  it('should be logged in', async () => {
    const page = await context.newPage();
    await page.goto('https://online.visualstudio.com/environments');
    const element = await page.waitForSelector('text="Create Codespace"');
    expect(element).toBeTruthy();
    await page.close();
  });

  it('should always fail', async () => {
    const page = await context.newPage();
    await page.goto('https://online.visualstudio.com/environments');
    // To generate the screenshots on failure
    expect(1).toBe(2);
  });
});
