import { DataTable, Given, Then, When } from '@cucumber/cucumber';
import CustomWorld from '../../../support/world';
import { expect } from "playwright/test";

When('the user selects the {string} option from the menu', async function (this: CustomWorld, menuItem: string) {
    await this.allPagesObj?.mainPageHamburger.goToPageViaSidebarMenu(this, menuItem);
})