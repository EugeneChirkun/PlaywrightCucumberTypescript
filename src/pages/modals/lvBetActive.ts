import { expect } from '@playwright/test';
import { Page, BrowserContext, Locator } from 'playwright';
import BasePage from "../BasePage";


export default class LvBetActive extends BasePage {
    public page: Page;

    private continueWithoutLoginBtn: Locator;
    private goToLvBetPlBtn: Locator;

    constructor(page: Page, context: BrowserContext) {
        super(page, context);

        this.continueWithoutLoginBtn = page.locator('[data-e2e="without-logging-in"]');
        this.goToLvBetPlBtn = page.locator('[data-e2e="redirect-lvbet-pl"]');
    }

    async continueWithoutLogin() {
        await expect(this.continueWithoutLoginBtn).toBeEnabled();
        await this.continueWithoutLoginBtn.click();
    }

    async goToLvBetPl() {
        await expect(this.goToLvBetPlBtn).toBeEnabled();
        await this.goToLvBetPlBtn.click();
    }
}