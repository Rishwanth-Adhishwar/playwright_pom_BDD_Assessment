import { Page, Locator } from '@playwright/test'
import { BasePage } from './basepage';
import { ENV } from "../utils/envReader";
export class LaunchPage extends BasePage {


    private registerLink: Locator;
    private loginLink: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.registerLink = page.locator('//a[text()="Register"]');
        this.loginLink = page.locator('//a[text()="Log in"]');
    }

    async navigate() {
        await this.page.goto(ENV.BASE_URL, { timeout: 60000 });
    }
    async clickRegisterLink() {
        await this.click(this.registerLink);
    }
    async cliclLoginLink() {
        await this.click(this.loginLink);
    }

}