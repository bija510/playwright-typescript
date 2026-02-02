import { test, expect } from '@playwright/test';

// Example 1: Single tag in test name
test('has title @smoke', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

// Example 2: Multiple tags in test name
test('get started link @smoke @regression', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

// Example 3: Using test.describe with tag
test.describe('@critical', () => {
  test('critical test 1', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('critical test 2 @smoke', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toBeVisible();
  });
});

// Example 4: Nested describe with multiple tags
test.describe('@e2e @ui', () => {
  test('end-to-end test 1', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('end-to-end test 2 @performance', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    // Simulate performance test
    await page.waitForLoadState('networkidle');
  });
});

// Example 5: Conditional tagging (using environment variable)
test.describe(() => {
  test('conditional test @slow', async ({ page }) => {
    // This test is tagged as slow
    await page.goto('https://playwright.dev/');
    await page.waitForTimeout(2000); // Simulate slow operation
  });

  // You can run tests with tags using:
  // npx playwright test --tag=smoke
  // npx playwright test --tag=regression
  // npx playwright test --tag=critical
  // npx playwright test --tag="smoke|regression" (multiple)
});
