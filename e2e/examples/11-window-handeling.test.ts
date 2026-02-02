import { test, expect } from "@playwright/test";

test("Window handling demo", async ({ page }) => {
    // Navigate to the practice page
    await page.goto("https://www.letskodeit.com/practice");

    // Verify we're on the right page
    expect(await page.title()).toBe("Practice Page");

    // Click the button that opens a new window (Open Window button)
    const [newWindow] = await Promise.all([
        page.waitForEvent("popup"),
        page.click('text=Open Window')
    ]);

    // Wait for the new window to load
    await newWindow.waitForLoadState();

    // Check the URL of the new window
    expect(newWindow.url()).toContain("courses");

    // Bring focus back to original page
    await page.bringToFront();
});
