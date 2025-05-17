import { test, expect,chromium } from "@playwright/test"

/*
npm = it install the packages
npx = it executes the packages
How to open the webpage to record the test==> npx playwright codegen wikipedia.org 
*/
test.describe('Record script', () => {

    test('record test using playwright recorder', async () => {
        const browser = await chromium.launch({
            headless: false,
            channel: 'chrome'
        });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://www.wikipedia.org/');
        await page.click('input[name="search"]');
        await page.fill('input[name="search"]', 'nepal');
        await page.click('button:has-text("Search")');
        await page.click('text=Nepal');

        await page.waitForTimeout(2000);
        
        await context.close();
        await browser.close();

    })
})