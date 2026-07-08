import { Given, Then, When } from "@cucumber/cucumber";
import { RishwaWorld } from "../world/rishwaWorld";
import { RegisterData, readRegisterData } from "../utils/csvReader";


const users: RegisterData[] = readRegisterData();

Given('The User is in Launch Page Of DemoWebShop Website', async function (this: RishwaWorld) {
    await this.launchPage.navigate();
});

When('The User Clicks on Register Link', async function (this: RishwaWorld) {
    await this.launchPage.clickRegisterLink();
});

When('The User Mark The Gender Radio Button', async function (this: RishwaWorld) {
    await this.registerPage.markGenderRadioBtn();
});

When('The User Enter the valid Credentials', async function (this: RishwaWorld) {
    for (const rd of users) {
        await this.registerPage.enterRegisterDetails(rd.firstName, rd.lastName, rd.Email, rd.password, rd.confirmPassword);
    }
});

When('The USer Clicks on Register Button', async function (this: RishwaWorld) {
    await this.registerPage.clickRegisterBtn();
});

Then('The User Should displayed With Register Success Text', async function (this: RishwaWorld) {
    for (const rd of users) {
        await this.registerPage.assertRegisterResult(rd.registerSuccess);
    }

});