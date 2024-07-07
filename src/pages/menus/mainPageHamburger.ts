import { expect } from '@playwright/test';
import { Page, BrowserContext, Locator } from 'playwright';
import BasePage from "../BasePage";

export default class MainPageHamburger extends BasePage {
    public page: Page;

    private casinoBtnIcon: Locator;
    private slotsBtnIcon: Locator;
    private liveCasinoBtnIcon: Locator;
    private tableGamesBtnIcon: Locator;
    private scratchCardsBtnIcon: Locator;
    private sportsBtnIcon: Locator;
    private tournamentsBtnIcon: Locator;
    private jackpotsBtnIcon: Locator;
    private promotionsBtnIcon: Locator;
    private changeLanguageDropDown: Locator;

    constructor(page: Page, context: BrowserContext) {
        super(page, context);

        this.casinoBtnIcon = page.locator('.icon-casino');
        this.slotsBtnIcon = page.locator('.icon-slots');
        this.liveCasinoBtnIcon = page.locator('.icon-live-casino');
        this.tableGamesBtnIcon = page.locator('.icon-table-games');
        this.scratchCardsBtnIcon = page.locator('.icon-scratch-cards');
        this.sportsBtnIcon = page.locator('.icon-sports');
        this.tournamentsBtnIcon = page.locator('.icon-tournaments');
        this.jackpotsBtnIcon = page.locator('.icon-jackpots');
        this.promotionsBtnIcon = page.locator('.icon-promotions');
        this.changeLanguageDropDown = page.locator('.side-menu-inner .js-dropdown');
    }

    async goToSports() {
        await expect(this.sportsBtnIcon).toBeEnabled();
        await this.sportsBtnIcon.click()
    }
}