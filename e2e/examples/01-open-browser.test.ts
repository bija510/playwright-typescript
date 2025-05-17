import { test, type Page, chromium, firefox, webkit } from "@playwright/test";

// https://playwright.dev/docs/browsers#google-chrome--microsoft-edge

test.describe('lunch browser', () => {

    test('open chromium for chrome and msedge', async () => {
        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://qaclickacademy.github.io/protocommerce/")
        await browser.close();
    })

    test('open chrome', async () => {
        const browser = await chromium.launch({
            headless: false,
            channel: 'chrome'
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://qaclickacademy.github.io/protocommerce/")
        await browser.close();
    })

    test('open msedge', async () => {
        const browser = await chromium.launch({
            headless: false,
            channel: 'msedge'
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://qaclickacademy.github.io/protocommerce/")
        await browser.close();
    })

    test('open firefox', async () => {
        const browser = await firefox.launch({
            headless: false
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://qaclickacademy.github.io/protocommerce/")
        await browser.close();
    })

    test('open webkit for safari', async () => {
        const browser = await webkit.launch({
            headless: false
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://qaclickacademy.github.io/protocommerce/")
        await browser.close();
    })


})