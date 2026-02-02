
import { test } from "@playwright/test";

test.describe('Frames handling concept', () => {

  test('Interact with frames', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Frames.html');
    const frame = await page.frameLocator('#singleframe');

     // Wait for input inside iframe to be visible
     await frame.locator('input[type="text"]').highlight();

    const input = frame.locator('input[type="text"]');
    await input.waitFor({ state: 'visible' });

    await input.fill('Hello, Playwright!');
  });
});
