import { test, expect } from '@playwright/test';

test.describe('Test group', () => {

  test('seed', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Frames.html');
    const frame = await page.frameLocator('#singleframe');

     // Wait for input inside iframe to be visible
     await frame.locator('input[type="text"]').highlight();

    const input = frame.locator('input[type="text"]');
    await input.waitFor({ state: 'visible' });

    await input.fill('Hello, Playwright!');
  });
});
