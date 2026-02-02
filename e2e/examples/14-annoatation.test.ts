import { test, expect } from "@playwright/test";

// https://playwright.dev/docs/test-annotations

test.describe('Playwright Test Annotations Demo', () => {

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

    test.skip('skipped test', async ({ page }) => {
        // This test is skipped
        await expect(page.locator('non-existent')).toBeVisible();
    });

    test.only('only this test runs', async ({ page }) => {
        // Use --grep to run specific tests, or this runs when using test.only
        await expect(page).toHaveURL('https://example.com/');
    });

    test.fixme('fixme test - marked as failing', async ({ page }) => {
        // This test is expected to fail and is marked for fixing
        await expect(page.locator('non-existent')).toBeVisible();
    });

    test.fail('fail test - expected to fail', async ({ page }) => {
        // This test is expected to fail
        await expect(page.locator('non-existent')).toBeVisible();
    });

    test('slow test demo', async ({ page }) => {
        test.slow();
        // This test is marked as slow, timeout is tripled
        await page.waitForTimeout(5000); // Simulate slow operation
        await expect(page).toHaveTitle(/Example/);
    });

    test('test with steps', async ({ page }) => {
        await test.step('Navigate to page', async () => {
            await page.goto("https://example.com");
        });

        await test.step('Check title', async () => {
            await expect(page).toHaveTitle(/Example/);
        });
    });

    test('concurrent test 1 - runs in parallel if configured', async ({ page }) => {
        await page.goto("https://example.com");
        await expect(page).toHaveTitle(/Example/);
    });

    test('concurrent test 2 - runs in parallel if configured', async ({ page }) => {
        await page.goto("https://example.com");
        await expect(page).toHaveTitle(/Example/);
    });

});