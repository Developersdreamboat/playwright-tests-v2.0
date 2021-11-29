const { test, chromium } = require('@playwright/test');
const assert = require('assert')
const { SecondPage } = require('./models/SecondPage');


test('invalid login', async () => {
const browser = await chromium.launch();
  const context = await browser.newContext({
    recordVideo: {
      dir: "./videos"
    }
  });
await context.tracing.start({ screenshots: true, snapshots: true });
const page = await context.newPage();

const secondPage = new SecondPage(page);
await secondPage.navigate();
await secondPage.enterInvalidLoginAndPassword();
const result = await secondPage.getLoginAttribute();

await context.tracing.stop({ path: 'trace.zip' });
await browser.close();

assert.equal(result,'display: block;')
});