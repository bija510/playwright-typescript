import { test, expect, chromium, ChromiumBrowser, ChromiumBrowserContext, Page } from "@playwright/test";

let browser: ChromiumBrowser;
let context: ChromiumBrowserContext;
let page: Page;

test.beforeEach(async () => {
    browser = await chromium.launch({
        headless: false
    })
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://learn.letskodeit.com/p/practice")
});

test('demo 1', async () => {
    await page.fill("//input[@id='name']", 'for test')
    await page.fill("//input[@id='displayed-text']", 'apple')
})

test('demo 2', async () => {
    console.log(await page.getAttribute("//input[@id='displayed-text']", 'name')) //show-hide
    await page.click('input#hondaradio')
})

test.afterEach(async () => {
    //Javascript hard wait
    await new Promise(r => setTimeout(r, 5000));
    await browser.close();
    await context.close();

})