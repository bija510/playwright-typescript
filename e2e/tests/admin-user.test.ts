import { test, expect } from '../fixtures/test-fixtures';  // Import custom fixtures
import * as testData from '../../data/TestData.json';
import AdminPage from '../pages/admin-page';

test.describe('Admin', () => {
    test('Add Admin User', async ({ loggedInPage }) => {
        // Use the loggedInPage fixture (pre-logged-in page) for AdminPage
        const adminPage = new AdminPage(loggedInPage.page);
        
        // Perform the add user action
        await adminPage.addUser();
        
        // Or check if the user appears in a list: await expect(loggedInPage.page.locator('.user-list')).toContainText('NewUser');
        console.log(testData.msg);
    });
});

