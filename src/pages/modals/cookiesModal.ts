import { expect } from '@playwright/test';
import { Page, BrowserContext, Locator } from 'playwright';
import BasePage from "../BasePage";


export default class CookiesModal extends BasePage {
    public page: Page;

    private mamageCookiesSettingsBtn: Locator;
    private acceptCookiesBtn: Locator;

    private cookiesPolicyHeader: Locator;

    constructor(page: Page, context: BrowserContext) {
        super(page, context);

        this.mamageCookiesSettingsBtn = page.getByText('Manage settings');
        this.acceptCookiesBtn = page.getByText('Accept all cookies');

        this.cookiesPolicyHeader = page.getByText('Cookies Policy');
    }

    async acceptCookies() {
        await expect(this.acceptCookiesBtn).toBeEnabled();
        await this.acceptCookiesBtn.click();
    }

    async isCookiesMsgIsVisible() {
        await expect(this.cookiesPolicyHeader).toBeVisible();
    }
}