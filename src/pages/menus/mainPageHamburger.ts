import { expect } from '@playwright/test';
import { Page, BrowserContext, Locator } from 'playwright';
import BasePage from "../basePage";
import CustomWorld from '../../support/world';
import getAllPages from '../getAllPages';
import LvBetActive from '../modals/lvBetActive';

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

    async goToPageViaSidebarMenu(ctx: CustomWorld, menuItem: string) {
        await expect(this.casinoBtnIcon).toBeVisible();
        let lvBetActive = new LvBetActive(this.page, this.context);

        switch (menuItem) {
            case 'Casino':
                await this.casinoBtnIcon.click();
                await lvBetActive.continueWithoutLoginIfVisible();
                await expect(this.page).toHaveURL(/casino/), { timeout: 45000 };
                break;
            case 'Slots':
                await this.slotsBtnIcon.click();
                await lvBetActive.continueWithoutLoginIfVisible();
                await expect(this.page).toHaveURL(/slots/), { timeout: 45000 };
                break;
            case 'Live Casino':
                await this.liveCasinoBtnIcon.click();
                await lvBetActive.continueWithoutLoginIfVisible();
                await expect(this.page).toHaveURL(/live-casino/), { timeout: 45000 };
                break;
            case 'Table Games':
                await this.tableGamesBtnIcon.click();
                await lvBetActive.continueWithoutLoginIfVisible();
                await expect(this.page).toHaveURL(/table-games/), { timeout: 45000 };
                break;
            case 'Scratch Cards':
                await this.scratchCardsBtnIcon.click();
                await lvBetActive.continueWithoutLoginIfVisible();
                await expect(this.page).toHaveURL(/scratch-cards/), { timeout: 45000 };
                break;
            case 'Sports':
                await this.sportsBtnIcon.click();
                await lvBetActive.continueWithoutLoginIfVisible();
                await expect(this.page).toHaveURL(/sports/), { timeout: 45000 };
                break;
            case 'Tournaments':
                await this.tournamentsBtnIcon.click();
                await lvBetActive.continueWithoutLoginIfVisible();
                await expect(this.page).toHaveURL(/tournaments/), { timeout: 45000 };
                break;
            case 'Jackpots':
                await this.jackpotsBtnIcon.click();
                await lvBetActive.continueWithoutLoginIfVisible();
                await expect(this.page).toHaveURL(/jackpots/), { timeout: 45000 };
                break;
            case 'Promotions':
                await this.promotionsBtnIcon.click();
                await lvBetActive.continueWithoutLoginIfVisible();
                await expect(this.page).toHaveURL(/casino-bonus/), { timeout: 45000 };
                break;
            default:
                throw new Error(`No matching ${menuItem} page not found`);
        }
    }
}