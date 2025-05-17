import { test, expect, chromium, firefox, webkit } from "@playwright/test";

// https://jestjs.io/docs/api

test.describe('Run test with different annoatation Globals', () => {

    test('testTodoDemo', async () => {
        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://qaclickacademy.github.io/protocommerce/")
        await browser.close();
    })

    test.skip('test.skip Demo', async () => {
        const browser = await chromium.launch({
            headless: false,
            channel: 'chrome'
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://qaclickacademy.github.io/protocommerce/")
        await browser.close();
    })

    test('testDemo2', async () => {
        const browser = await chromium.launch({
            headless: false,
            channel: 'msedge'
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://qaclickacademy.github.io/protocommerce/")
        await browser.close();
    })

    test('testDemo3', async () => {
        const browser = await firefox.launch({
            headless: false
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://qaclickacademy.github.io/protocommerce/")
        await browser.close();
    })

})