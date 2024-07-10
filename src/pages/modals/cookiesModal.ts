import { expect } from '@playwright/test';
import { BrowserContext, Locator, Page } from 'playwright';
import BasePage from "../basePage";


export default class CookiesModal extends BasePage {
    public page: Page;

    private manageCookiesSettingsBtn: Locator;
    private acceptCookiesBtn: Locator;

    private cookiesPolicyHeader: Locator;

    constructor(page: Page, context: BrowserContext) {
        super(page, context);

        this.manageCookiesSettingsBtn = page.getByText('Manage settings');
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

    async acceptCookiesIfVisible() {
        if (await this.isCookiesMsgIsVisible) {
            await this.acceptCookiesBtn.click();
        }
    }
}
