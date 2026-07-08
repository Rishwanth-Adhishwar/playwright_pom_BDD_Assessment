import { Locator, expect, type Page } from '@playwright/test';

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async click(locator: Locator) {
        await locator.click();
    }

    async fill(locator: Locator, value: string) {
        await locator.fill(value);
    }
    async getText(locator: Locator) {
        return await locator.textContent();
    }

    async marRadioBtn(locator: Locator) {
        await locator.isVisible();
        await locator.check();
    }

    async toContainText(locator: Locator, expected: string) {
        const text = await locator.textContent();
        expect(text).toContain(expected);
    }

}