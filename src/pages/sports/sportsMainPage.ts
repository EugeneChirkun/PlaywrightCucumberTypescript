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
            sports: page.locator('.main-nav').getByRole('link', { name: 'sports' }),
            betBuilder: page.locator('.main-nav').getByRole('link', { name: 'betbuilder' }),
            inPlay: page.locator('.main-nav').getByRole('link', { name: 'in-play' }),
            virtual: page.locator('.main-nav').getByRole('link', { name: 'virtual' }),
            eSport: page.locator('.main-nav').getByRole('link', { name: 'esport' }),
            casino: page.locator('.main-nav').getByRole('link', { name: 'casino' }),
            liveCasino: page.locator('.main-nav').getByRole('link', { name: 'live casino' }),
            lvBetPot: page.locator('.main-nav').getByRole('link', { name: 'LV BET Pot' })
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

    }
}
