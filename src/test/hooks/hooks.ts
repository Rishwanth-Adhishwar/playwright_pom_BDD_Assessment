import { RishwaWorld } from "../world/rishwaWorld";
import { chromium, Browser } from "@playwright/test";
import { BeforeAll, Before, After, AfterAll, Status } from "@cucumber/cucumber";
import { BasePage } from "../pages/basepage";
import { LaunchPage } from "../pages/launchpage";
import { RegisterPage } from "../pages/registerpage";
import { LoginPage } from "../pages/loginpage";

let browser: Browser;
BeforeAll(async () => {
    browser = await chromium.launch({ headless: true });
});
Before(async function (this: RishwaWorld) {
    this.browser = browser;
    this.browserContext = await browser.newContext();
    this.page = await this.browserContext.newPage();
    this.basePage = new BasePage(this.page);
    this.launchPage = new LaunchPage(this.page);
    this.registerPage = new RegisterPage(this.page);
    this.loginPage = new LoginPage(this.page);

});
After(async function (this: RishwaWorld, { pickle, result }) {
    console.log(result?.status);
    if (result?.status === Status.FAILED) {
        const img = await this.page.screenshot({ path: `reports/screenshots${pickle.name}.png`, type: "png" });
        this.attach(img, "image/png");
    }
    await this.page.close();
    await this.browserContext.close();
});
AfterAll(async () => {
    await browser?.close();
})
