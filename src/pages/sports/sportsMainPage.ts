import { expect } from '@playwright/test';
import { BrowserContext, Locator, Page } from 'playwright';
import BasePage from "../basePage";
import * as consts from "../../testData/constants/consts";

export default class SportsMainPage extends BasePage {
    public page: Page;

    private sportsTopNavBar: {
        sports: Locator;
        betBuilder: Locator;
        inPlay: Locator;
        virtual: Locator;
        eSport: Locator;
        casino: Locator;
        liveCasino: Locator;
        lvBetPot: Locator;
    }

    constructor(page: Page, context: BrowserContext) {
        super(page, context);

        this.sportsTopNavBar = {
            sports: page.locator('.main-nav').locator('a.main-nav-links__entry[href="/sports/en/pre-matches/"]'),
            betBuilder: page.locator('.main-nav').locator('a.main-nav-links__entry[href="/sports/en/betbuilder/"]'),
            inPlay: page.locator('.main-nav').locator('a.main-nav-links__entry[href="/sports/en/live/"]'),
            virtual: page.locator('.main-nav').locator('a.main-nav-links__entry[href="/sports/en/virtual-sports/"]'),
            eSport: page.locator('.main-nav').locator('a.main-nav-links__entry[href="/sports/en/esport/"]'),
            casino: page.locator('.main-nav').locator('a.main-nav-links__entry[href="https://lvbet.com/en/casino/"]'),
            liveCasino: page.locator('.main-nav').locator('a.main-nav-links__entry[href="https://lvbet.com/en/live-casino/"]'),
            lvBetPot: page.locator('.main-nav').locator('a.main-nav-links__entry[href="/sports/en/bet-on-action/"]')
        }
    }

    async isUserOnSportsMainPage() {
        await expect(this.page).toHaveURL(/sports/);
    }

    public getSportsTopNavBar() {
        return this.sportsTopNavBar;
    }

    async navigateToSports() {
        await this.page.goto(`${consts.APP_BASE_URL}sports`);

    }

    public async isTopNavBarItemVisible(itemName: string) {
        await expect(this.sportsTopNavBar.sports).toBeVisible();

        switch (itemName) {
            case 'Sports':
                await expect(this.sportsTopNavBar.sports).toBeVisible;
                await this.takeScreenshot();
                break;
            case 'BetBuilder':
                await expect(this.sportsTopNavBar.betBuilder).toBeVisible;
                break;
            case 'In-play':
                await expect(this.sportsTopNavBar.inPlay).toBeVisible;
                break;
            case 'Virtual':
                await expect(this.sportsTopNavBar.virtual).toBeVisible;
                break;
            case 'E-Sport':
                await expect(this.sportsTopNavBar.eSport).toBeVisible;
                break;
            case 'Casino':
                await expect(this.sportsTopNavBar.casino).toBeVisible;
                break;
            case 'Live casino':
                await expect(this.sportsTopNavBar.liveCasino).toBeVisible;
                break;
            case 'LV Bet Pot':
                await expect(this.sportsTopNavBar.lvBetPot).toBeVisible;
                break;

            default:
                throw new Error(`No matching ${itemName} page found`);
        }
        await this.takeScreenshot();
        console.log(`Checking ${itemName} visibility on sports page top navigation bar`);
    }
}
