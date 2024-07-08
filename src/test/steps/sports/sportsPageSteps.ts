import {DataTable, Then, When} from '@cucumber/cucumber';
import CustomWorld from '../../../support/world';

Then('the user should be redirected to the Sports page', async function (this: CustomWorld) {
    await this.page?.waitForLoadState('domcontentloaded');
    await this.allPagesObj?.lvBetActive.continueWithoutLoginIfVisible();
    await this.allPagesObj?.cookiesModal.acceptCookiesIfVisible();
    await this.allPagesObj?.sportsMainPage.isUserOnSportsMainPage();
});

When('the user should see the menu items', async function (this: CustomWorld, table: DataTable) {
    const expectedItems = table.raw().flat();
    for (const itemName of expectedItems) {
        await this.allPagesObj?.sportsMainPage.isTopNavBarItemVisible(itemName);
    }
});
