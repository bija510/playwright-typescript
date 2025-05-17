import {test, expect, chromium, ChromiumBrowser, ChromiumBrowserContext, Page } from "@playwright/test";

let browser: ChromiumBrowser;
let context: ChromiumBrowserContext;
let browser2: ChromiumBrowser;
let context2: ChromiumBrowserContext;

let page: Page;
let page2: Page;

test.beforeEach(async () => {
    browser = await chromium.launch({ headless: false })
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://learn.letskodeit.com/p/practice")
});

test('demo 1', async () => {
    await page.fill("//input[@id='name']", 'for test')
})

test('demo 2', async () => {
    console.log(await page.getAttribute("//input[@id='displayed-text']", 'name')) //show-hide
})

test.afterEach(async () => {
    //Javascript hard wait
    await new Promise(r => setTimeout(r, 2000));
    await browser.close();
    await context.close();
})

test.describe('scoping using describe', () => {
    test.beforeEach(async () => {
        browser2 = await chromium.launch({ headless: false })
        context2 = await browser2.newContext();
        page2 = await context.newPage();
        await page2.goto("https://the-internet.herokuapp.com/checkboxes")
    });
    test('demo 3', async () => {
        console.log(await page2.title())
    })

    test('demo 4', async () => {
        console.log(page2.url())
    })

    test.afterEach(async () => {
        //Javascript hard wait
        await new Promise(r => setTimeout(r, 2000));
        await browser2.close();
        await context2.close();
    })
})

