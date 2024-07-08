import { BrowserContext, Page } from 'playwright';

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
}
