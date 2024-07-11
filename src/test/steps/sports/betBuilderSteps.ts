import CustomWorld from "../../../support/world";
import { DataTable, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Then('the user should see at least one sport to select', async function (this: CustomWorld) {
    await this.page.waitForLoadState('domcontentloaded')
    expect(await this.allPagesObj?.betBuilderPage.betBuilderDashboardItemsCount()).toBeGreaterThanOrEqual(1);
});

When('the user clicks on the {string} dashboard option', async function (this: CustomWorld, optionToSelect: string) {
    await this.allPagesObj?.betBuilderPage.chooseBetBuilderDashBoardOption(optionToSelect);
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

When('the user is in the Football section of Bet Builder', async function (this: CustomWorld) {
    await this.allPagesObj?.betBuilderPage.navigateToFootballBetBuilder();
    await this.page.waitForLoadState('domcontentloaded');
    await this.allPagesObj?.lvBetActive.continueWithoutLoginIfVisible();
    await this.allPagesObj?.cookiesModal.acceptCookiesIfVisible();
});

When('the user clicks on the {string} region', async function (this: CustomWorld, footballRegion: string) {
    await this.allPagesObj?.betBuilderPage.chooseBetBuilderDashBoardOption(footballRegion);
});

Then('the user should see options to select', async function (this: CustomWorld, table: DataTable) {
    const expectedItems = table.raw().flat();
    for (const itemName of expectedItems) {
        await this.allPagesObj?.betBuilderPage.isBetBuilderDashBoardItemVisible(itemName);
    }
});

Then('the user should see the dashboard headline {string}', async function (this: CustomWorld, headline: string) {
    await this.allPagesObj?.betBuilderPage.isDashboardHeadlineVisible(headline);
});

