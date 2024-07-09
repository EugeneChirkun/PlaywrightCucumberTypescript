import BasePage from "../basePage";
import { BrowserContext, Locator, Page } from "playwright";
import * as consts from "../../testData/constants/consts";
import { expect } from "@playwright/test";

export default class BetBuilderPage extends BasePage {
    public page: Page;

    private sportListEntry: Locator;
    private betBuilderDashboardHeadline: Locator;

    constructor(page: Page, context: BrowserContext) {
        super(page, context);

        this.sportListEntry = page.locator('.sports-list-entry');
        this.betBuilderDashboardHeadline = page.locator('.basic-headline__title');
    }

    async betBuilderDashboardItemsCount() {
        await this.page.waitForTimeout(3000)
        return await this.sportListEntry.count();
    }

    async getSportListEntries(): Promise<Locator[]> {
        const count = await this.sportListEntry.count();
        const locators = [];

        for (let i = 0; i < count; i++) {
            locators.push(this.sportListEntry.nth(i));
        }
        return locators;
    }

    async navigateToFootballBetBuilder() {
        await this.page.goto(`${consts.APP_BASE_URL}sports/betbuilder/football/--/1/`);
    }

    async chooseBetBuilderDashBoardOption(option: string) {
        try {
            await this.sportListEntry.locator(`.sports-list-entry__title:has-text("${option}")`).click();
        } catch (error) {
            console.error(`Failed to choose the Bet Builder Dashboard option: ${option}`, error);
            throw new Error(`Could not select the option "${option}" from the Bet Builder Dashboard. Please check if the option exists and the page is properly loaded.`);
        }
    }

    async isBetBuilderDashBoardItemVisible(itemName: string) {
        await expect(this.sportListEntry.locator(`.sports-list-entry__title:has-text("${itemName}")`)).toBeVisible();
    }

    async isDashboardHeadlineVisible(headline: string) {
        await expect(this.betBuilderDashboardHeadline.locator(`text=${headline}`)).toBeVisible()
    }
}
