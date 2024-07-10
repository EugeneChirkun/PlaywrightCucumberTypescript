import BasePage from "../basePage";
import { BrowserContext, Locator, Page } from "playwright";
import { expect } from "@playwright/test";

export default class SearchPage extends BasePage {
    public page: Page;

    private searchInput: Locator;
    private searchResultsList: Locator;

    constructor(page: Page, context: BrowserContext) {
        super(page, context);

        this.searchInput = page.locator('#js-searchInput')
        this.searchResultsList = page.locator('#js-searchList')
    }

    async searchGame(gameName: string) {
        await this.searchInput.fill(gameName);
        await this.searchInput.press('Enter')
        await this.takeScreenshot();
        console.log(`Searching for ${gameName}`);
    }

    async isSearchResultDisplayed(gameName: string) {
        await expect(this.searchResultsList).toContainText(gameName);
    }

    async selectGameFromSearchResultsList(gameName: string) {
        await this.searchResultsList.locator('.search-panel-list-content').locator(`h4:text("${gameName}")`).first().click();
        await this.takeScreenshot();
        console.log(`Selecting first match with ${gameName} from search results list`);
    }
}
