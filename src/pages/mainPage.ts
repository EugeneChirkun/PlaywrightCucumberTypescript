import { expect } from '@playwright/test';
import { Page, BrowserContext, Locator } from 'playwright';
import BasePage from "./BasePage";

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
    }

    async navigateToMain() {
        await this.page.goto('https://lvbet.com/');
    }

    async openGamburgerMenu() {
        await expect(this.topNavBar.hamburgerMenu).toBeEnabled();
        await this.topNavBar.hamburgerMenu.click()
    }
}