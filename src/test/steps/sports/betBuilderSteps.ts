import CustomWorld from "../../../support/world";
import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Then('the user should see at least one sport to select', async function (this: CustomWorld) {
    expect(await this.allPagesObj?.betBuilderPage.betBuilderDashboardItemsCount()).toBeGreaterThanOrEqual(1);
});

When('the user clicks on the {string} option', async function (this: CustomWorld, sportToSelect: string) {
    await this.allPagesObj?.betBuilderPage.chooseSportToBet(sportToSelect);
});

Then('the user should see at least one region to select', async function (this: CustomWorld) {
    expect(await this.allPagesObj?.betBuilderPage.betBuilderDashboardItemsCount()).toBeGreaterThanOrEqual(1);
});

When('each region should display a match counter next to its name', async function (this: CustomWorld) {
    const entries = await this.allPagesObj?.betBuilderPage.getSportListEntries();
    for (const entry of entries) {
        const countLocator = entry.locator('.sports-list-entry__count');
        const textContent = await countLocator.textContent();
        if (!textContent || !/^\d+$/.test(textContent.trim())) {
            throw new Error(`Entry does not contain a valid count: ${textContent}`);
        }
    }
});

