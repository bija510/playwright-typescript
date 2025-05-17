import { test, expect, Browser, BrowserContext, Page, chromium } from "@playwright/test";
import OrangeHRM from "../pages/login-page";
import * as testData from "../../data/TestData.json"

test.describe('Login', () => {

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    const data = <any>testData

    test.beforeAll(async () => {
        browser = await chromium.launch({
            headless: false          
        });
        context = await browser.newContext({
            viewport: { width: 1920, height: 1080 } // simulate "maximized"
        });
        page = await context.newPage();
        await page.goto(data.url)
    })

    test("login to orangeHrm application", async () => {
        // LoginPage.ts
        let orgHRM = new OrangeHRM(page, context);
        await orgHRM.login(data.userName, data.password)

    })

    test.afterAll(async () => {
        await page.close()
        await context.close()
        await browser.close()
    })
})

