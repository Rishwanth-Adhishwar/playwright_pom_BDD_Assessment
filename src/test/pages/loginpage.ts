import { Page, Locator } from '@playwright/test'
import { BasePage } from './basepage';

export class LoginPage extends BasePage {
    private emailField: Locator;
    private passwordField: Locator;
    private loginBtn: Locator;
    private LoginSuccessMsg: Locator;
    private errorMsg: Locator;

    constructor(page: Page) {
        super(page);
        this.emailField = page.locator('#Email');
        this.passwordField = page.locator('#Password');
        this.loginBtn = page.locator('(//input[@type="submit"])[2]');
        this.LoginSuccessMsg = page.locator('(//a[@class="account"])[1]');
        this.errorMsg = page.locator('.validation-summary-errors span')
    }
    async enterEmail(email: string) {
        await this.fill(this.emailField, email);
    }
    async enterPassword(password: string) {
        await this.fill(this.passwordField, password);
    }
    async clickLoginBtn() {
        await this.click(this.loginBtn);
    }
    async assertLoginSuccess(email: string) {
        await this.toContainText(this.LoginSuccessMsg, email);
    }
    async assertInvalidLoginMsg(message: string) {
        await this.toContainText(this.errorMsg, message);
    }

}