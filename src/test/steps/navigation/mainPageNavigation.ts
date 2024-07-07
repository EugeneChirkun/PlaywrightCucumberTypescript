import { DataTable, Given, Then, When } from '@cucumber/cucumber';
import CustomWorld from '../../../support/world';
import { expect } from "playwright/test";

Given('the user is on the LVBet home page', async function (this: CustomWorld) {
    await this.allPagesObj?.mainPage.isUserOnMainPage();
});

When('the user clicks on the hamburger menu icon in the top left corner', async function (this: CustomWorld) {
    await this.allPagesObj?.mainPage.openGamburgerMenu();
});

When('the user clicks on the {string} option in the header menu', async function (this: CustomWorld, menuItem: string) {
    await this.allPagesObj?.mainPage.clickOnTopNavBarMenuItem(menuItem);
})
