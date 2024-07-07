import { DataTable, Given, Then, When } from '@cucumber/cucumber';
import CustomWorld from '../../../support/world';
import { expect } from "playwright/test";
import SportsMainPage from '../../../pages/sports/sportsMainPage';

Then('the user should be redirected to the Sports page', async function (this: CustomWorld) {
    await this.allPagesObj?.sportsMainPage.isUserOnSportsMainPage();
});

When('the user should see the menu items', async function (this: CustomWorld, table: DataTable) {
    const expectedItems = table.raw().flat();
    for (const itemName of expectedItems) {
        await this.allPagesObj?.sportsMainPage.isTopNavBarItemVisible(itemName);
    }
});
