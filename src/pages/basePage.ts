import { BrowserContext, Locator, Page } from 'playwright';
import CustomWorld from "../support/world";
import { shortDateTime } from "../utils/shortDateTime";
import { expect } from "@playwright/test";

export default class BasePage {
    page: Page;
    context: BrowserContext;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
    }

    async navigateBack() {
        await this.page.goBack();
    }

    public async takeScreenshot(title?: string) {
        const imageTitle = title ?? global.stepName;
        const imagePath = `${global.scrPath}/${global.testName}/${shortDateTime()}-${imageTitle}.png`;

        return this.page?.screenshot({
            path: imagePath
        });
    }

    public async takeFullScreenshot() {
        return this.page?.screenshot({
            path: `${global.scrPath}/${global.testName}/${shortDateTime()}-${global.stepName}.png`,
            fullPage: true
        });
    }

    async waitForElementToBeVisibleWithReload(element: Locator) {
        await expect(async () => {
            await this.page.reload();
            await this.page.waitForLoadState('domcontentloaded');
            await expect(element).toBeVisible({ timeout: 30 * 1000 });
        }).toPass({
            timeout: 120 * 1000
        });
    }
}
