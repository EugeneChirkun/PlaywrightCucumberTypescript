import { When } from "@cucumber/cucumber";
import CustomWorld from "../../../support/world";
import { expect } from "@playwright/test";

When('the user should see a list of upcoming matches', async function (this: CustomWorld) {
   expect(await this.allPagesObj?.footballMatchTablePage.gamesTableItemsCount()).toBeGreaterThanOrEqual(1);
});
