import { Page, BrowserContext } from 'playwright';

export default class OrangeHRM {
    page: Page;
    context: BrowserContext;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
    }

    TxtBxLogin = "xpath=//input[@placeholder='Username']";
    TxtBxPassword = "xpath=//input[@placeholder='Password']";
    BtnLogin = "xpath=//button[@type='submit']";

    //Login
    login = async (email: string, password: string) => {
        await this.page.fill(this.TxtBxLogin, email);
        await this.page.fill(this.TxtBxPassword, password);
        await this.page.click(this.BtnLogin);
        // await this.page.waitForNavigation({ waitUntil: 'domcontentloaded' });
    };

}