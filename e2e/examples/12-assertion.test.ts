import { test, expect } from "@playwright/test";

test("Playwright assertions demo", async ({ page }) => {
    // Navigate to a test page
    await page.goto("https://www.letskodeit.com/practice");

    // Basic value assertions
    expect('apple').toBe('apple');
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
    expect("apple").toContain('app');
    expect([1, 2, 3]).toEqual([1, 2, 3]);

    // Page-level assertions
    await expect(page).toHaveTitle("Practice Page");
    await expect(page).toHaveURL("https://www.letskodeit.com/practice");

    // Element visibility assertions
    await expect(page.locator('text=Practice Page')).toBeVisible();
    await expect(page.locator('text=Non-existent')).toBeHidden();

    // Element state assertions
    await expect(page.locator('input[type="radio"]').first()).toBeEnabled();
    await page.locator('input[type="radio"]').first().check();
    await expect(page.locator('input[type="radio"]').first()).toBeChecked();

    // Text content assertions
    await expect(page.locator('h1')).toHaveText("Practice Page");
    await expect(page.locator('h1')).toContainText("Practice");

    // Attribute assertions
    await expect(page.locator('#carselect')).toHaveAttribute('name', 'cars');

    // Count assertions
    await expect(page.locator('input[type="radio"]')).toHaveCount(3);

    // Value assertions
    await expect(page.locator('#carselect')).toHaveValue('bmw');
});
