# 🎭 Playwright-Typescript

## 👋 Introduction
Playwright is an open-source Node.js library developed by Microsoft for automated end-to-end testing of web applications. It supports modern browsers like Chromium, Firefox, and WebKit and allows you to write reliable, fast, and cross-browser tests. When combined with TypeScript, it provides a powerful, type-safe development experience, making it easier to build and maintain complex test suites.

In this project, we are using **Playwright with TypeScript** to take advantage of strong typing, better developer tooling, and improved code maintainability.


Useful Resources:
1. [TypeScript Tutorial](https://www.tutorialspoint.com/typescript/index.htm)  
2. [Playwright Documentation](https://playwright.dev/docs/intro/)  
---

## ✨ Key Features of Playwright with TypeScript

- Cross-browser testing (Chromium, Firefox, WebKit)  
- TypeScript support with type safety  
- Auto-waiting for elements  
- Web-first assertions  
- Test isolation and parallel execution  
- HTML reports, screenshots, and video support  
- Mobile device emulation  
- CI/CD integration support  

## 🔤 Playwright Supported Languages

Playwright offers robust support across multiple programming languages, each with its own recommended testing framework. Below is a summary:

| Language             | Recommended Test Runner / Framework | Documentation Link                                                                 |
|----------------------|-------------------------------------|------------------------------------------------------------------------------------|
| **JavaScript / TypeScript** ✅| Playwright Test Runner             | [Documentation](https://playwright.dev/docs/intro)                                 |
| **Python**           | Pytest Plugin                        | [Documentation](https://playwright.dev/python/docs/intro)                          |
| **Java**             | JUnit or TestNG                      | [Documentation](https://playwright.dev/java/docs/intro)                            |
| **.NET (C#)**        | MSTest, NUnit, or xUnit              | [Documentation](https://playwright.dev/dotnet/docs/intro)                          |

## 🎛️ Supported Selectors in Playwright (TypeScript)

Playwright provides a wide range of selectors to locate elements within the DOM effectively. These selectors are powerful, flexible, and designed for ease of use.

### Selector Types

| Selector Type              | Description                                                                 |
|----------------------------|-----------------------------------------------------------------------------|
| ⭐ **ID Selector**            | Shortcut for selecting by ID (e.g., `#submit-button`)                       |
| ⭐ **CSS Selector**           | Standard CSS selectors (e.g., `div.class`, `#id`, `[attr=value]`)           |
| ⭐ **XPath Selector**         | Use XPath expressions (e.g., `xpath=//div[@id='main']`)                     |
| **Text Selector**          | Select elements by visible text (e.g., `text="Submit"`)                     |
| **Data Test ID Selector**  | Select elements using `data-testid` (e.g., `[data-testid="login"]`)         |
| **Role Selector**          | Select elements by ARIA role (e.g., `role=button[name="Submit"]`)           |
| **Alt Text Selector**      | Select images by their `alt` text (e.g., `img[alt="Logo"]`)                 |
| **Label Selector**         | Select form elements by their label text (e.g., `label="Email"`)            |
| **Placeholder Selector**   | Select input elements by placeholder (e.g., `placeholder="Search"`)         |
| **Test ID Selector**       | Custom attribute selectors (e.g., `data-test-id="username"`)                |

#### Example Usage
```ts
await page.locator('form#login >> text="Submit"');
```
## 📘 Playwright-Typescript Naming Conventions Cheat Sheet

This cheat sheet provides a quick reference to standard naming conventions in project to help maintain clean and consistent code.

### 🔠 Naming Conventions Table

| **Element**        | **Convention**      | **Example**                  |
|--------------------|---------------------|------------------------------|
| File Name          | `kebab-case`        | `user-profile.ts`            |
| Test File          | `kebab-case + .test`  | `login.test.ts`           |
| Folder Name        | `kebab-case`        | `demo-test`                  |
| Component File     | `PascalCase`        | `UserProfile.ts`             |
| Function Name      | `camelCase`         | `getUserInfo()`              |
| Variable Name      | `camelCase`         | `userEmail`                  |
| Class Name         | `PascalCase`        | `AuthService`                |
| Constant Name      | `UPPER_CASE`        | `MAX_RETRIES`                |
| Boolean Name       | `camelCase`         | `isLoggedIn`, `hasAccess`    |

### ✅ Summary

- Use **kebab-case** for regular `.ts` file names.
- Use **kebab-case + .test** for playwright E2E test files `(*.spec.ts, *.test.ts)`.
- Use **PascalCase** for files that export components or classes.
- Use **camelCase** for variables, functions, and booleans.
- Use **UPPER_CASE** for constants that should not change.

## Pre-requirements:
 1. `scoop`
 2. `Node JS`
 3. A code editor (e.g., `Visual Studio Code`)
 4. VsCode plugins like `Playwright Test for VSCode`
 5. `devDependencies` inside `package.json` file
 6. To install dependencies
 It will only available in this package not global & all file will store in  `node modules`

# 📥 Installation Guide

### Step 1: 🥄 Install Scoop 

To install Scoop, open PowerShell in Windows and run:

```sh
irm get.scoop.sh | iex
```

After installation, close and reopen PowerShell, then run:

```sh
scoop help
```

### Step 2: Install Node.js

To install Node.js, run:

```sh
scoop install nodejs
```

To confirm Node.js and npm were installed correctly, check their versions:

- `npm`: used to install, update, and manage JavaScript libraries or tools.
- `npx`: lets you run Node.js packages without installing them globally.

```powershell
node -v
npm -v
npx -v
```

To update Node.js:

```sh
scoop update nodejs
```
### Step 3: Installing or Updating Playwright
1. Run the command below to `install` & select the following to get started:
2. Choose between `TypeScript` or JavaScript (default is TypeScript)
3. Name of your Tests folder (default is tests or `e2e` if you already have a tests folder in your project)
4. Add a `GitHub Actions workflow` to easily run tests on CI
5. Install `Playwright browsers` (default is true)

```sh
npm init playwright@latest
```

It will install & create following files basically a `project` with example tests.
1. playwright.config.ts
2. package.json
3. package-lock.json
4. tests/
  example.spec.ts
5. tests-examples/
  demo-todo-app.spec.ts

> Updating & check Playwright
- It installs or upgrades the Playwright test runner as a dev dependency in an existing project without generating any configuration or project structure.
```sh
npm install -D @playwright/test@latest
npx playwright --version
```

#### Step 4: Playwright Test Agents
```sh
npx playwright init-agents --loop=vscode
```
It will add these `3 agents` .github/agents `🎭 planner, 🎭 generator and 🎭 healer`.
### Other dependencies & devDependencies
After adding the `devDependencies` in your `package.json`, run this command in Windows PowerShell or Command Prompt: `Example`
```json
  "devDependencies": {
    "@commitlint/config-conventional": "^20.3.1",
    "@playwright/test": "^1.58.0",
    "@types/node": "^22.15.18",
    "commitlint": "^20.3.1",
    "husky": "^9.1.7"
  },
  "dependencies": {
    "dotenv": "^17.2.3"
  }
```

```sh
npm install
```

`@playwright/test` 
The dependency "@playwright/test": "^1.52.0" provides Playwright Test, which is Playwright's built-in test runner and testing framework. It simplifies writing, running, and organizing end-to-end (E2E) tests for web applications.

`@types/node` 
The @types/node package provides TypeScript type definitions for Node.js built-in modules like fs, path, and globals like process and __dirname. It's used in Playwright projects with TypeScript to enable type checking and IntelliSense for Node.js APIs.

### 🧩 Commit Message Standards & Git Hooks

This project uses Commitlint and Husky to enforce consistent commit message conventions and improve code quality before changes are committed to the repository.
```sh
npm install --save-dev commitlint @commitlint/config-conventional husky
```
> Why this is needed
- `Commitlint` ensures all commit messages follow the Conventional Commits specification
- `@commitlint/config-conventional` provides a standard, widely adopted rule set
- `Husky` runs commit checks automatically using Git hooks

Together, these tools prevent invalid commits, keep Git history clean, and support automated versioning and CI/CD workflows.

## 🌍 Playwright Environment Configuration & Execution Guide

This framework supports running Playwright tests across multiple
environments (QA, UAT, DEV) using dotenv-based environment switching.

------------------------------------------------------------------------

## 📁 Environment Files

    .env.qa
    .env.uat
    .env.dev

### Example `.env.uat`

    BASE_URL=https://uat.yourapp.com
    APP_USERNAME=admin
    APP_PASSWORD=admin123

> ⚠️ We use `APP_USERNAME` instead of `USERNAME` to avoid conflicts with
> Windows system environment variables.

------------------------------------------------------------------------

## ⚙️ Dotenv Setup
```sh
npm install dotenv
```

``` ts
dotenv.config({
  path: `.env.${process.env.ENVIRONMENT || 'qa'}`
});
```

------------------------------------------------------------------------

## ▶️ Running Tests using various environment

### Windows PowerShell

``` powershell
$env:ENVIRONMENT="qa"; npx playwright test --grep "@smoke"
$env:ENVIRONMENT="uat"; npx playwright test --grep "@smoke"

$env:ENVIRONMENT="qa"; npx playwright test --grep "@regression"
$env:ENVIRONMENT="uat"; npx playwright test --grep "@regression"
```


## ▶️ How to run single or multiple test from VS Code with just click.
1. Install the `Playwright Test for VSCode` plugin from Microsoft.
2. Open the `playwright.config.ts` file and update the `testDir` path:
```typescript
   export default defineConfig({
     testDir: './e2e',
```
3. Now, each test inside the `test.describe` block will display a triangle ▶️ icon to run the test.
4. Look for the glass jar icon with a half-filled sign `(Test Explorer)` below the Extensions section in the Activity Bar.
5. You can also run tests from there as well.

## 🏷️ Playwright Test Tags (Short)
```sh
import { test, expect } from '@playwright/test';

// Single tag
test('has title @smoke', async ({ page }) => 

// Multiple tags
test('get started link @smoke @regression', async ({ page }) => 

// test.describe with tag
test.describe('@critical', () => 

// Nested describe (1-liner)
test.describe('@e2e @ui', () => { test('end-to-end test 1', async ({ page }) => { 

// Conditional test
test.describe(() => { test('conditional test @slow', async ({ page }) => 
```

```sh
npx playwright test --grep "@smoke"
npx playwright test --grep "@smoke|@regression"
npx playwright test --grep-invert "@slow"
```

## ▶️ How to run all test and single test `(.test.ts)` file from cmd

How to `run all` test
```sh
npx playwright test
npx playwright test --ui
npx playwright test --headed
npx playwright test --project webkit
npx playwright test --project webkit --project firefox
```
How to `run specific` tests
```sh
npx playwright test login.test.ts

```
How to `run multiple` folder (dir)
```sh
npx playwright test e2e/examples/ e2e/tests/
```

How to To run (.test.ts) files that have **open** or **basic**
```sh
npx playwright test open basic
```

How to run a test with a specific title `open chrome`
```sh
npx playwright test -g "open chrome"
```
How to `run last failed` tests
```sh
npx playwright test --last-failed
```

### 🛠️ Debug
How to debug from UI
```sh
npx playwright test --ui
```

How to debug `tests`, `test`, from `line num 10` with the Playwright Inspector
```sh
npx playwright test --debug
npx playwright test example.spec.ts --debug
npx playwright test example.spec.ts:10 --debug
```

## 📊 Test reports or simply open html report in browser
```sh
npx playwright show-report
```

## ➕ How to Add a VS Code Project to GitHub
 Follow these simple steps to publish your local project to GitHub using Visual Studio Code:
1. **Open your project folder** in Visual Studio Code.
2. Click on the **Source Control** icon in the sidebar _or press_ `Ctrl + Shift + G`.
3. Click on the **"Publish to GitHub"** button.
4. **Sign in** to your GitHub account when prompted, and follow the on-screen instructions.

✅ That’s it! The process is quick and easy — VS Code will handle the rest.


 ## cmd command to open website to record script.
 ```sh
 npx playwright codegen wikipedia.org 
 ```

## ⬆️ How to Upload File

1. **Using an `<input>` HTML Tag**
   - If the HTML tag `<input>` is present with the attribute `type="file"`, we can use the method:
     ```js
     page.setInputFiles()
     ```

2. **Without an `<input>` Tag**
   - If the HTML tag is not available or the file upload is triggered by a button or other UI element (e.g., causing a native file chooser to appear), then:
     - In Selenium, we typically use third-party tools like **Robot Class**, **Sikuli**, or **AutoIt** to handle the file upload dialog.
     - In Playwright, we use:
       ```js
       fileChooser.setFiles(filePath1)
       ```
       along with a **listener** to handle the file chooser event.
     - This approach allows us to programmatically handle native file picker popups.

 ## { } How to read JSON data file.
 1. Create testData.json file
 2. Create playwright.config.ts file & paste this
 ```js
  declare module "*.json" {
    const value: any;
    export default value
  }
 ```
 3. Then in the LoginTest.test.ts file import this.
  ```
  import * as testData from "../../data/TestData.json"
  ```
  4. Then declare this const variable & use Example:-  data.firstName, data.lastName..
  ```
  let data = <any>testData
  ```

## 🔁 🚀 How to set up CI GitHub Actions
 [GitHub Actions](https://playwright.dev/docs/ci-intro)


 
  
  

