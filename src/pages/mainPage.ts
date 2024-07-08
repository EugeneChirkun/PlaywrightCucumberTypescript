import { expect } from '@playwright/test';
import { Page, BrowserContext, Locator } from 'playwright';
import BasePage from './basePage'
import LvBetActive from './modals/lvBetActive';

export default class MainPage extends BasePage {
    public page: Page;

    private topNavBar: {
        hamburgerMenu: Locator;
        slotsBtn: Locator;
        liveCasinoBtn: Locator;
        sportsBtn: Locator;
        tournamentsBtn: Locator;
        promotionsBtn: Locator;
    }

    private loginBtn: Locator;
    private registerBtn: Locator;

    private searchField: Locator;

    constructor(page: Page, context: BrowserContext) {
        super(page, context);

        this.topNavBar = {
            hamburgerMenu: page.locator('.js-header-menu'),
            slotsBtn: page.getByRole('navigation').getByRole('link', { name: 'Slots', exact: true }),
            liveCasinoBtn: page.getByRole('navigation').getByRole('link', { name: 'Live Casino' }),
            sportsBtn: page.getByRole('navigation').getByRole('link', { name: 'Sports', exact: true }),
            tournamentsBtn: page.getByRole('navigation').getByRole('link', { name: 'Tournaments', exact: true }),
            promotionsBtn: page.getByRole('navigation').getByRole('link', { name: 'Promotions', exact: true })
        }

        this.loginBtn = page.getByLabel('Log in');
        this.registerBtn = page.getByRole('link', { name: 'Register' });

        this.searchField = page.locator('#searching');
    }

    async navigateToMain() {
        await this.page.goto('https://lvbet.com/');
    }

    async openGamburgerMenu() {
        await expect(this.topNavBar.hamburgerMenu).toBeEnabled();
        await this.topNavBar.hamburgerMenu.click()
    }

    async isUserOnMainPage() {
        await expect(this.page).toHaveURL(/casino/);
    }

    async clickOnTopNavBarMenuItem(menuItem: string) {
        await expect(this.topNavBar.liveCasinoBtn).toBeVisible();
        let lvBetActive = new LvBetActive(this.page, this.context);

        switch (menuItem) {
            case 'Slots':
                await this.topNavBar.slotsBtn.click();
                await lvBetActive.continueWithoutLoginIfVisible();
                await expect(this.page).toHaveURL(/slots/);
                break;
            case 'Live Casino':
                await this.topNavBar.liveCasinoBtn.click();
                await lvBetActive.continueWithoutLoginIfVisible();
                await expect(this.page).toHaveURL(/live-casino/);
                break;
            case 'Sports':
                await this.topNavBar.sportsBtn.click();
                await lvBetActive.continueWithoutLoginIfVisible();
                await expect(this.page).toHaveURL(/sports/);
                break;
            case 'Tournaments':
                await this.topNavBar.tournamentsBtn.click();
                await lvBetActive.continueWithoutLoginIfVisible();
                await expect(this.page).toHaveURL(/tournaments/);
                break;
            case 'Promotions':
                await this.topNavBar.promotionsBtn.click();
                await lvBetActive.continueWithoutLoginIfVisible();
                await expect(this.page).toHaveURL(/casino-bonus/);
                break;
            default:
                throw new Error(`No matching ${menuItem} page not found`);
        }
    }

    async initiateSearch() {
        await this.searchField.click();
    }
}
