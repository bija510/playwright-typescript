
import {test, expect, chromium, ChromiumBrowser, ChromiumBrowserContext, Page } from "@playwright/test";

test.describe("Handeling various Alert", () => {
    let browser: ChromiumBrowser;
    let context: ChromiumBrowserContext;
    let page: Page;

    test.beforeAll(async () => {
        browser = await chromium.launch({//
            headless: false
        })
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto("https://www.letskodeit.com/practice")
    });

    test('accept alert and print alert msg', async () => {
        const ele = await page.$('#prompt')
        page.on("dialog", (dialog) => {
            console.log('Message: ' + dialog.message())
            console.log('Default value: ' + dialog.defaultValue())
            console.log('Type ' + dialog.type())
            dialog.accept("hello David")
        })

        await ele?.click()
    })

    test.afterAll(async () => {
        //Javascript hard wait
        await new Promise(r => setTimeout(r, 5000));
        await browser.close();
        await context.close();

    })
})