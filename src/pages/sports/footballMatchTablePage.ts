import BasePage from "../basePage";
import { BrowserContext, Locator, Page } from "playwright";
import CustomWorld from "../../support/world";

export default class FootballMatchTablePage extends BasePage {
    public page: Page;

    private gamesTableLine: Locator

    constructor(page: Page, context: BrowserContext) {
        super(page, context);

        this.gamesTableLine = page.locator('.odds-table__entry');
    }

    async gamesTableItemsCount() {
        await this.page.waitForTimeout(3000)
        return await this.gamesTableLine.count();
    }
}
