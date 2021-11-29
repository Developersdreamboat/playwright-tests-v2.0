const { test, expect } = require('@playwright/test');
const assert = require('assert')
const { FirstPage } = require('./models/FirstPage');


test('valid login', async ({ page }) => {

const firstPage = new FirstPage(page);
await firstPage.navigate();
await firstPage.enterLoginAndPassword();
const result = await firstPage.getLoginAttribute();

assert.equal(result,'display: block;')

});