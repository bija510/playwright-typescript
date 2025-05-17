import { test, expect, chromium, ChromiumBrowser, ChromiumBrowserContext, Page } from "@playwright/test";

test.describe('Upload file demo', () => {

    let browser: ChromiumBrowser;
    let context: ChromiumBrowserContext;
    let page: Page;
    const filePath1 = process.cwd() + "\\upload_file\\PdfFile.pdf" // path type 1 OK
    const filePath2 = process.cwd() + "/upload_file/TextFile.txt" // path type 2 OK
    const filePath3 = "./upload_file/PngFile.png" // path type 3 OK

    test.beforeAll(async () => {
        browser = await chromium.launch({
            headless: false
        })
        context = await browser.newContext();
        page = await context.newPage();
    })

    test('upload file', async () => {
        await page.goto("https://www.sendgb.com/")
        // 1. For single file upload
        //await page.setInputFiles("input[name='qqfile']", filePath1)

        // 2. For multiple file upload
        await page.setInputFiles("input[name='qqfile']", [filePath2, filePath3])
    })

    test('upload file2', async () => {
        await page.goto("https://the-internet.herokuapp.com/upload")
        page.on("filechooser", async (filechooser) => {
            // 1. single file
            await filechooser.setFiles(filePath1)
            // 2. multiple file
            // await filechooser.setFiles([filePath1, filePath2])
        })
        await page.click(".example + div#drag-drop-upload", { force: true })
    })


    test.afterAll(async () => {
        await new Promise(r => setTimeout(r, 3000));
        await page.close()
        await context.close()
        await browser.close()

    })


})