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
        this.cookiesPolicyHeader = page.locator('csb-modal-header__title:has-text("Cookies Policy")')
    }

    async acceptCookies() {
        await expect(this.acceptCookiesBtn).toBeEnabled();
        await this.acceptCookiesBtn.click();
    }

    async isCookiesMsgIsVisible(): Promise<boolean> {
        return await this.cookiesPolicyHeader.isVisible();
    }

    async acceptCookiesIfVisible() {
        if (this.isCookiesMsgIsVisible) {
            await this.acceptCookiesBtn.click();
        }
    }
}
