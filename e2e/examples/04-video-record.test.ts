import { test, expect, chromium , type Page} from "@playwright/test"


test.describe('Record script', () => {

    test('record test using playwright recorder', async ({ page }) => {
        const browser = await chromium.launch({
            headless: false,

        });
       
        await page.goto('https://www.wikipedia.org/');
        await page.click('input[name="search"]');
        await page.fill('input[eeeeee="search"]', 'nepal');
        await page.click('button:has-text("Search")');

    })
})