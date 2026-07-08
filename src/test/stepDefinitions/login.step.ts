import { Then, When } from "@cucumber/cucumber";
import { RishwaWorld } from "../world/rishwaWorld";
import { LoginData, readLoginData } from "../utils/csvReader";


const users: LoginData[] = readLoginData();

When('The User Clicks on Login Link', async function (this: RishwaWorld) {
    await this.launchPage.cliclLoginLink();
});

When('The User Enter a valid Email', async function (this: RishwaWorld) {
    for (const ld of users) {
        await this.loginPage.enterEmail(ld.vemail)
    }
});

When('The User Enters a valid Password', async function (this: RishwaWorld) {
    for (const ld of users) {
        await this.loginPage.enterPassword(ld.vpassword)
    }
});

When('The User Clicks a Login Button', async function (this: RishwaWorld) {
    await this.loginPage.clickLoginBtn();
});

Then('The User Should Be Successfully logged In', async function (this: RishwaWorld) {
    for (const ld of users) {
        await this.loginPage.assertLoginSuccess(ld.vemail)
    }

});
When('The User Enters a Email as {string}', async function (this: RishwaWorld, string) {
    await this.loginPage.enterEmail(string);
});

When('The User Enters a password as {string}', async function (this: RishwaWorld, string) {
    await this.loginPage.enterPassword(string);
});

Then('The User Should Be displayed With Error Message as {string}', async function (this: RishwaWorld, string) {
    await this.loginPage.assertInvalidLoginMsg(string);
});