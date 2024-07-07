import { expect } from '@playwright/test';
import { Page, BrowserContext, Locator } from 'playwright';
import BasePage from "../BasePage";


export default class CookiesModal extends BasePage {
    public page: Page;

    private mamageCookiesSettingsBtn: Locator;
    private acceptCookiesBtn: Locator;

    constructor(page: Page, context: BrowserContext) {
        super(page, context);

        this.mamageCookiesSettingsBtn = page.getByText('Manage settings');
        this.acceptCookiesBtn = page.getByText('Accept all cookies');
    }
    
    async acceptCookies() {
        await expect(this.acceptCookiesBtn).toBeEnabled();
        await this.acceptCookiesBtn.click();
    }
}