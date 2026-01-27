import { test, expect } from "@playwright/test";

// https://playwright.dev/docs/test-annotations
/******************************************
 * 📊 Reporting & diagnostics
afterEach → screenshot on failure

🧹 Cleanup
afterAll → delete test users

📦 One-time setup not tied to object
beforeAll → seed database
 ****************************************/


test.describe('Playwright hooks', () => {

    test.beforeAll(async () => {
        console.log('Runs once before all tests in this describe block');
    });

    test.afterAll(async () => {
        console.log('Runs once after all tests in this describe block');
    });

    test.beforeEach(async ({ page }) => {
        console.log('Runs before each test');
        await page.goto("https://example.com");
    });

    test.afterEach(async () => {
        console.log('Runs after each test');
    });

    test('normal test', async ({ page }) => {
        await expect(page).toHaveTitle(/Example/);
    });

    

});