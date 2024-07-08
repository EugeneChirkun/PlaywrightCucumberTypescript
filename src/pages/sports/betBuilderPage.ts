import BasePage from "../basePage";
import {BrowserContext, Locator, Page} from "playwright";

export default class BetBuilderPage extends BasePage {
    public page: Page;

    private sportListEntry: Locator;

    constructor(page: Page, context: BrowserContext) {
        super(page, context);

        this.sportListEntry = page.locator('.sports-list-entry');
    }

    async betBuilderDashboardItemsCount() {
        await this.page.waitForTimeout(3000);
        return await this.sportListEntry.count();
    }

    async chooseSportToBet(sportToSelect) {
        switch (sportToSelect) {
            case 'Football':
                await this.sportListEntry.locator(`.sports-list-entry__title:has-text("${sportToSelect}")`).click();
                break;
            default:
                throw new Error(`No matching ${sportToSelect} sport found`);
        }
    }

    async getSportListEntries(): Promise<Locator[]> {
        const count = await this.sportListEntry.count();
        const locators = [];

        for (let i = 0; i < count; i++) {
            locators.push(this.sportListEntry.nth(i));
        }
        return locators;
    }
}
