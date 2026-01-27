import { test, expect, type Page} from '@playwright/test';

test.describe('Types of error msg', () => {

    test('error element not attached to the DOM', async ({ page }) => {

        await page.goto('https://www.letskodeit.com/practice')

        //1a. fill (clear & fill)
        await page.fill("//input[@name='enter-name']", 'for test')

        //1b. type(by default it apppend in begnning & to append at end follow this trick)
        const showHideTxt = await page.$("//input[@id='displayed-text']")
        await page.reload();
        await showHideTxt?.fill("aFor")
    
    })

     test('error strict mode voilation due to matching more than 1 locator', async ({ page }) => {

        await page.goto('https://www.letskodeit.com/practice')

        await page.locator("input[type='radio']").click();
    
    })

    
     test('Timeout error due to wrong locator', async ({ page }) => {

        await page.goto('https://www.letskodeit.com/practice')

   
        await page.locator("input[type='rrrrrrrrr']").check();
    
    })



})