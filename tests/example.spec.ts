import {test, expect, Page, Locator} from '@playwright/test';

class LoginPage{
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly welcomeMessage: Locator;
  
  constructor(page) {
    this.page=page;
    this.usernameInput = page.getByTestId('username');
    this.passwordInput = page.getByTestId('password');
    this.loginButton = page.getByTestId('login-btn');
    this.errorMessage = page.getByTestId('error');
    this.welcomeMessage = page.getByTestId('welcome');
    
  }
  
  async  loginUser(user:string, password:string){
    await this.usernameInput.fill(user)
    await this.passwordInput.fill(password)
    await this.loginButton.click();
  }
}


test.describe('Login Tests', () => {
  let login: LoginPage;

  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
    login = new LoginPage(page);
  });

  test('successful login', async () => {
    await login.loginUser('admin', '1234');
    await expect(login.welcomeMessage).toBeVisible();
  });

  test('mocking a server failure (500 error)', async ({ page }) => {
    const login = new LoginPage(page);
    await page.goto('http://localhost:4200/login');

    // 1. SET UP THE MOCK (The Interceptor)
    await page.route('**/api/v1/auth', async (route) => {
      await route.fulfill({
        status: 500, 
        contentType: 'application/json',
        body: JSON.stringify({ message: 'Internal Server Error' })
      });
    });

    // 2. TRIGGER THE REQUEST
    await login.loginUser('failedtest', '1234');

    // 3. ASSERTION
    await expect(login.errorMessage).toBeVisible();
    await expect(login.errorMessage).toHaveText('Cannot process, try later')
    
  });

  test('invalid login shows error', async () => {
    await login.loginUser('wrong', 'wrong');
    await expect(login.errorMessage).toBeVisible();
    await expect(login.errorMessage).toHaveText('Invalid credentials') 
    
  });
});