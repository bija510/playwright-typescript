import { Page } from '@playwright/test';

export default class OrangeHRM {
    page: Page;

    // Locators using modern Playwright selectors
    private readonly usernameInput = 'input[placeholder="Username"]';
    private readonly passwordInput = 'input[placeholder="Password"]';
    private readonly loginButton = 'button[type="submit"]';

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Logs into the OrangeHRM application
     * @param username - The username to enter
     * @param password - The password to enter
     */
    async login(username: string, password: string): Promise<void> {
       // Force clear username (overrides autofill + cached value)
        await this.page.fill(this.usernameInput, username);

        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
        // Optional: Wait for navigation or dashboard to appear
        await this.page.waitForURL(/dashboard/, { timeout: 10000 });
        await this.verifyLoginSuccess(); 
    }

    /**
     * Verifies that login was successful by checking for dashboard elements
     */
    async verifyLoginSuccess(): Promise<boolean> {
        try {
            await this.page.waitForSelector('.oxd-topbar-header-title', { timeout: 5000 });
            return true;
        } catch {
            return false;
        }
    }
}