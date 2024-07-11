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
        await expect(this.continueWithoutLoginBtn).toBeVisible();
        await this.continueWithoutLoginBtn.click({ force: true });
    }

    async continueWithoutLoginIfVisible() {
        if (await this.isLoginVisible()) {
            await this.continueWithoutLoginBtn.click({ force: true })
        }
    }

    async goToLvBetLocal() {
        await expect(this.goToLvBetLocalBtn).toBeVisible();
        await this.goToLvBetLocalBtn.click({ force: true });
    }

    async isLoginVisible(): Promise<boolean> {
        return await this.continueWithoutLoginBtn.isVisible();

    }
}
