import { Browser, BrowserContext, Page } from "@playwright/test";
import { World, setWorldConstructor } from "@cucumber/cucumber";
import type { BasePage } from "../pages/basepage";
import type { LaunchPage } from "../pages/launchpage";
import type { RegisterPage } from "../pages/registerpage";
import type { LoginPage } from "../pages/loginpage";

export class RishwaWorld extends World {
    browser!: Browser;
    browserContext!: BrowserContext;
    page!: Page;
    basePage!: BasePage;
    launchPage!: LaunchPage;
    registerPage!: RegisterPage;
    loginPage!: LoginPage;
}
setWorldConstructor(RishwaWorld);


