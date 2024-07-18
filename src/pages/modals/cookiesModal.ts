import { expect } from '@playwright/test';
import { BrowserContext, Locator, Page } from 'playwright';
import BasePage from "../basePage";


export default class CookiesModal extends BasePage {
    public page: Page;

    private manageCookiesSettingsBtn: Locator;
    private acceptCookiesBtn: Locator;
    private cookiesModalWindow: Locator;

    constructor(page: Page, context: BrowserContext) {
        super(page, context);

        this.manageCookiesSettingsBtn = page.getByText('Manage settings');
        this.acceptCookiesBtn = page.getByText('Accept all cookies');
        this.cookiesModalWindow = page.locator('.csb-modal--cookies-consent')
    }

    async acceptCookies() {
        await expect(this.acceptCookiesBtn).toBeVisible();
        await this.acceptCookiesBtn.click({ force: true });
    }

    async isCookiesMsgIsVisible(): Promise<boolean> {
        return await this.cookiesModalWindow.isVisible();
    }

    async acceptCookiesIfVisible() {
        if (this.isCookiesMsgIsVisible) {
            await this.acceptCookiesBtn.click({ force: true });
        }
    }
}
