import { test as base } from '@playwright/test';
import OrangeHRM from '../pages/login-page';
import * as testData from '../../data/TestData.json';
const data = <any>testData;

// Extend the base test with custom fixtures
export const test = base.extend<{
  loggedInPage: OrangeHRM;  // Custom fixture for a logged-in OrangeHRM page
}>({
  // Define the loggedInPage fixture
  loggedInPage: async ({ page }, use) => {
    // Navigate to the application
    await page.goto('/');

    // Create an instance of the OrangeHRM page object
    const orgHRM = new OrangeHRM(page);
    console.log('Logging in with user:', process.env.APP_USERNAME);
    // Perform login using test data
    await orgHRM.login(process.env.APP_USERNAME!, process.env.APP_PASSWORD!);

    // Verify login success (optional, but ensures the fixture is valid)
    const isLoggedIn = await orgHRM.verifyLoginSuccess();
    if (!isLoggedIn) {
      throw new Error('Login failed in fixture setup');
    }

    // Pass the logged-in page object to the test
    await use(orgHRM);
  },
});

// Export the extended test for use in other files
export { expect } from '@playwright/test';