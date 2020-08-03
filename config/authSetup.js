const { firefox } = require('playwright');

const { USER, PASSWORD, HEADLESS } = process.env;
const isHeadful = HEADLESS === 0 || HEADLESS === 'false';

module.exports = async() => {
  // This step can use any browser.
  const browser = await firefox.launch({ headless: !isHeadful });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://online.visualstudio.com/login');
  await page.click('text="Sign in"');

  // Steps executed on the Microsoft login page.
  await page.fill('[placeholder="Email, phone, or Skype"]', USER);
  await page.click('text="Next"');
  await page.fill('[placeholder="Password"]', PASSWORD);
  await page.click('text="Sign in"');

  // Check login is completed (app dependent).
  await page.waitForSelector('text="Create Codespace"');
  process.env.COOKIES = JSON.stringify(await context.cookies());
  process.env.LOCALSTORAGE = await page.evaluate(() => JSON.stringify(localStorage));

  await browser.close();
};