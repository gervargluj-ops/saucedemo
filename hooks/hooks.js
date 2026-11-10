const {Before,After,setDefaultTimeout} = require('@cucumber/cucumber');

const { chromium } = require('@playwright/test');

setDefaultTimeout(30000);

Before(async function () {

    this.browser = await chromium.launch({
        headless: false,
        slowMo: 1000
    });

    this.page = await this.browser.newPage();

});

After(async function () {

    await this.page.waitForTimeout(3000);

    await this.browser.close();

});