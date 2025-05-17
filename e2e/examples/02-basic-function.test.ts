import { test, expect, type Page, chromium, firefox } from "@playwright/test";

test.describe('basic actions', () => {

    test('click fill and innerText', async () => {

        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://learn.letskodeit.com/p/practice")

        //1a. fill (clear & fill)
        await page.fill("//input[@id='name']", 'for test')

        //1b. type(by default it apppend in begnning & to append at end follow this trick)
        const showHideTxt = await page.$("//input[@id='displayed-text']")
        await showHideTxt?.fill("aFor")
        await showHideTxt?.focus()
        await showHideTxt?.type(' apple')
        await new Promise(r => setTimeout(r, 2000));

        //how to clear
        await showHideTxt?.fill('')

        //2. get Attribute of any like id, name, placeholder, value
        console.log(await page.getAttribute("//input[@id='displayed-text']", 'name')) //show-hide

        //3. radio button & force click where click don't work
        const honda_radioBtn = await page.$('input#hondaradio')
        await honda_radioBtn?.click({ force: true })

        //4. getText
        console.log(await page.innerText("//h1[normalize-space()='Practice Page']"))

        //5. checkbox
        //6. WebElement ele = driver.find...
        const bmw_checkbox = await page.$('input#bmwcheck')
        await bmw_checkbox?.check()

        // 7. Assert the checked state
        expect(await bmw_checkbox?.isChecked()).toBeTruthy()
        await bmw_checkbox?.uncheck()

        //8. dropdown
        const cars_dropdown = await page.$("select[id='carselect']")
        await cars_dropdown?.selectOption({ label: 'Honda' })

        //9. Javascript hard wait
        await new Promise(r => setTimeout(r, 5000));
        await browser.close();
        await context.close();
    })


})