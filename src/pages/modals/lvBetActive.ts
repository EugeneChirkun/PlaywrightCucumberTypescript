import { expect } from '@playwright/test';
import { Page, BrowserContext, Locator } from 'playwright';
import BasePage from "../basePage";


export default class LvBetActive extends BasePage {
    public page: Page;

    private continueWithoutLoginBtn: Locator;
    private goToLvBetPlBtn: Locator;

    constructor(page: Page, context: BrowserContext) {
        super(page, context);

        this.continueWithoutLoginBtn = page.getByTestId('without-logging-in');
        this.goToLvBetPlBtn = page.getByTestId('redirect-lvbet-pl');
    }

    async continueWithoutLogin() {
        await expect(this.continueWithoutLoginBtn).toBeEnabled();
        await this.continueWithoutLoginBtn.click();
    }

    async continueWithoutLoginIfVisible() {
        if (await this.continueWithoutLoginBtn.isVisible()) {
            await this.continueWithoutLoginBtn.click();
        }
    }

    async goToLvBetPl() {
        await expect(this.goToLvBetPlBtn).toBeEnabled();
        await this.goToLvBetPlBtn.click();
    }
}