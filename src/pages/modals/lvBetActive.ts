import { expect } from '@playwright/test';
import { BrowserContext, Locator, Page } from 'playwright';
import BasePage from "../basePage";
import CustomWorld from "../../support/world";


export default class LvBetActive extends BasePage {
    public page: Page;

    private continueWithoutLoginBtn: Locator;
    private goToLvBetLocalBtn: Locator;

    constructor(page: Page, context: BrowserContext) {
        super(page, context);

        this.continueWithoutLoginBtn = page.getByTestId('without-logging-in');
        this.goToLvBetLocalBtn = page.getByTestId(/^redirect-lvbet-/);
    }

    async continueWithoutLogin() {
        await expect(this.continueWithoutLoginBtn).toBeEnabled();
        await this.continueWithoutLoginBtn.click();
    }

    async continueWithoutLoginIfVisible() {
        if (await this.isLoginVisible()) {
            await this.continueWithoutLoginBtn.scrollIntoViewIfNeeded();
            await this.continueWithoutLoginBtn.click({ timeout: 60000 })
        }
    }

    async goToLvBetLocal() {
        await expect(this.goToLvBetLocalBtn).toBeEnabled();
        await this.goToLvBetLocalBtn.click();
    }

    async isLoginVisible(): Promise<boolean> {
        return await this.continueWithoutLoginBtn.isVisible();

    }
}
