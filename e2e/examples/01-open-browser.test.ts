import { test, type Page, type Browser, chromium, firefox, webkit } from "@playwright/test";


test.describe('lunch browser', () => {

    const testUrl = "https://qaclickacademy.github.io/protocommerce/"

    test('lunch chromium (default) for chrome and msedge', async () => {
        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(testUrl)
        await browser.close();
    })

    test('Chrome (via Chromium channel)', async () => {
        const browser = await chromium.launch({
            headless: false,
            channel: 'chrome'
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(testUrl)
        await browser.close();
    })

    test('Microsoft Edge (via Chromium channel)', async () => {
        console.log('Available Chromium channels:');
        console.log(chromium.executablePath());

        const browser = await launchEdgeOrFallback()
           
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(testUrl)
        await browser.close();
    })

    test('lunch firefox', async () => {
        const browser = await firefox.launch({
            channel: 'firefox' ,
            headless: false          
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(testUrl)
        await browser.close();
    })

    test('WebKit (Safari)', async () => {
        const browser = await webkit.launch({
            channel: 'webkit' ,
            headless: false
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(testUrl)
        await browser.close();
    })


})




export async function launchEdgeOrFallback(): Promise<Browser> {
  try {
    console.log('Trying to launch Microsoft Edge...');
    return await chromium.launch({ channel: 'msedge', headless: false });
  } catch (err) {
    console.warn('Edge launch failed. Falling back to Chrome or default Chromium.');
    try {
      return await chromium.launch({ channel: 'chrome', headless: false });
    } catch {
      return await chromium.launch({ headless: false });
    }
  }
}