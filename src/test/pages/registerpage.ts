import { Page, Locator } from '@playwright/test'
import { BasePage } from './basepage';

export class RegisterPage extends BasePage {
    private genderRadioBtn: Locator;
    private firstName: Locator;
    private lastName: Locator;
    private Email: Locator;
    private password: Locator;
    private confirmPassword: Locator;
    private registerSubmitBtn: Locator;
    private registerSuccess: Locator;

    constructor(page: Page) {
        super(page)
        this.genderRadioBtn = page.locator('#gender-male');
        this.firstName = page.locator('#FirstName');
        this.lastName = page.locator('#LastName');
        this.Email = page.locator('#Email');
        this.password = page.locator('#Password');
        this.confirmPassword = page.locator('#ConfirmPassword');
        this.registerSubmitBtn = page.locator('#register-button')
        this.registerSuccess = page.locator('//div[@class="result"]')
    }

    async markGenderRadioBtn() {
        await this.marRadioBtn(this.genderRadioBtn);
    }

    async enterRegisterDetails(firstName: string, lastName: string, Email: string, password: string, confirmPassword: string) {
        await this.fill(this.firstName, firstName);
        await this.fill(this.lastName, lastName);
        await this.fill(this.Email, Email);
        await this.fill(this.password, password);
        await this.fill(this.confirmPassword, confirmPassword);
    }
    async clickRegisterBtn() {
        await this.click(this.registerSubmitBtn);
    }

    async getRegisterSuccessText() {
        await this.getText(this.registerSuccess);
    }

    async assertRegisterResult(registerSuccess: string) {
        await this.toContainText(this.registerSuccess, registerSuccess)
    }
}