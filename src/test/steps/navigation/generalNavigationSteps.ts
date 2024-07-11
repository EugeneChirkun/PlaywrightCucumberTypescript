import { When } from "@cucumber/cucumber";
import CustomWorld from "../../../support/world";

When('the user is on the Sports page', async function (this: CustomWorld) {
    await this.allPagesObj?.sportsMainPage.navigateToSports();
    await this.page.waitForLoadState('domcontentloaded');
    await this.allPagesObj?.lvBetActive.continueWithoutLoginIfVisible();
    await this.allPagesObj?.cookiesModal.acceptCookiesIfVisible();
});

When('the user goes back', async function (this: CustomWorld) {
    await this.allPagesObj.basePage.navigateBack();
});
