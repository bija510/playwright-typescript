import { Page } from '@playwright/test';

export default class AdminPage {
    private page: Page;

    // Locators using modern Playwright selectors
    private readonly mnu_admin = "Admin";
    private readonly btn_add  = "//button[normalize-space()='Add']";

    constructor(page: Page) {
        this.page = page;
    }  

    async addUser(): Promise<void> {
        await this.page.getByRole('link', { name: this.mnu_admin }).click();
        await this.page.click(this.btn_add);
        // Additional steps to fill user details can be added here
    }
    
};