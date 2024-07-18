import BasePage from "../basePage";
import { BrowserContext, Locator, Page } from "playwright";
import * as consts from "../../testData/constants/consts";
import { expect } from "@playwright/test";
import CustomWorld from "../../support/world";

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
        await this.takeScreenshot();
        console.log(`Navigated to Bet Builder`);
    }

    async chooseBetBuilderDashBoardOption(option: string) {
        try {
            await this.sportListEntry.locator(`.sports-list-entry__title:has-text("${option}")`).click();
            await this.takeScreenshot();
            console.log(`Bet Builder option ${option} chosen`);
        } catch (error) {
            console.error(`Failed to choose the Bet Builder Dashboard option: ${option}`, error);
            throw new Error(`Could not select the option "${option}" from the Bet Builder Dashboard. Please check if the option exists and the page is properly loaded.`);
        }
    }

    async isBetBuilderDashBoardItemVisible(itemName: string) {
        await expect(this.sportListEntry.locator(`.sports-list-entry__title:has-text("${itemName}")`)).toBeVisible();
        await this.takeScreenshot();
        console.log(`Checking item ${itemName} visibility`);
    }

    async isDashboardHeadlineVisible(headline: string) {
        await expect(this.betBuilderDashboardHeadline.locator(`text=${headline}`)).toBeVisible()
        await this.takeScreenshot();
        console.log(`Checking headline ${headline} visibility`);
    }
}
