import { When } from "@cucumber/cucumber";
import CustomWorld from "../../../support/world";

When('the user is on the Sports page', async function (this: CustomWorld) {
    await this.allPagesObj?.sportsMainPage.navigateToSports();
    await this.allPagesObj?.lvBetActive.continueWithoutLoginIfVisible();
    await this.allPagesObj?.cookiesModal.acceptCookiesIfVisible();
});
