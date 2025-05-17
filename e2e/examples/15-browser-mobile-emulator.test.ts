import { test, expect, chromium, devices } from '@playwright/test';

test.describe('Run test with different annoatation Globals', () => {

    test('test skip Demo', async () => {
        const browser = await chromium.launch({
            headless: false,
            channel: 'chrome'
        })
        const iPhone = devices['iPhone 11 Pro'];

        const context = await browser.newContext({
            ...iPhone
        });
        const page = await context.newPage();
        await page.goto("https://www.letskodeit.com/practice")

        await new Promise(r => setTimeout(r, 3000));
        await page.close()
        await context.close();
        await browser.close();
    })

})