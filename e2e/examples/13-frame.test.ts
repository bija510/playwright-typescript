
import { test, expect, Browser, BrowserContext, Page, chromium } from "@playwright/test";

test.describe("Frames handling concept", () => {

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    test.beforeAll(async () => {
        browser = await chromium.launch({
            headless: false
        });
        context = await browser.newContext()
        page = await context.newPage();
        await page.goto("https://www.letskodeit.com/practice")
    })

    test("Interact with frames", async () => {
        const frame = page.frame({ name: "firstFr" });
        // frame?.fill("")
        if (frame != null) {
            await frame.fill("input[name='fname']", "Koushik");
            await frame.fill("input[name='lname']", "Chatterjee");

            // inner frame
            const frames = frame.childFrames();
            console.log('No. of inner frames: ' + frames.length);
            if (frames != null)
                await frames[0].fill("input[name='email']", "koushik@mail.com")
            else {
                console.log("Wrong frame");
            }
            const parent = frames[0].parentFrame()
            // await frame.fill("input[name='lname']", "Letcode");
            await parent?.fill("input[name='lname']", "Youtube");
        } else throw new Error("No such frame")
    })

    test.afterAll(async () => {
        await page.close()
        await context.close()
        await browser.close()
    })
})