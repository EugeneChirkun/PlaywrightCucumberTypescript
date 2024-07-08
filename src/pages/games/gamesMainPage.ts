import BasePage from "../basePage";
import {BrowserContext, Page} from "playwright";
import {expect} from "@playwright/test";

export default class GamesMainPage extends BasePage {
    public page: Page;

    constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }

    async isUserOnGamePage(gameName: string) {
        const formattedGameName = gameName.toLowerCase().replace(/\s+/g, '-');
        const urlPattern = new RegExp(formattedGameName);
        await expect(this.page).toHaveURL(urlPattern);
    }
}
