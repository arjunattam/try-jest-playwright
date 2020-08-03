# try-jest-playwright

Example test suite with [Playwright](https://playwright.dev) and [Jest](https://jestjs.io) with [jest-playwright-preset](https://github.com/playwright-community/jest-playwright) to configure the Jest environment for browser tests. The example uses [Visual Studio Codespaces](https://online.visualstudio.com/) but can be extended to work with any web app with authentication.

## Features
* **Isolated context per test**: Uses `context` global which is an isolated [browser context](https://playwright.dev/#version=v1.2.1&path=docs%2Fcore-concepts.md&q=browser-contexts) per test.
* **Screenshots on failure**: Auto-capture screenshots of failed test pages (in the `screenshots` directory).
* **Login only once**: Uses `globalSetup` in Jest config to setup a one-time login which is then re-used in tests.
* **TypeScript** support

## Usage

Install dependencies
```sh
npm install
```

> **Note**: Running tests requires test account credentials set as `USER` and `PASSWORD` environment variables.

Run all tests in headless mode.
```sh
npm test # or npx jest
```

Run all tests in a particular browser and headful mode.
```sh
HEADLESS=false BROWSER=chromium npm test
```

Run single test by spec name (see [other options in Jest CLI config](https://jestjs.io/docs/en/cli)).
```sh
BROWSER=chromium npx jest -t "should be logged in"
```

## Future work
* Add support for using the VS Code debugger
* Add support for junit reports
* Replace environment variables with something more cross-platform
