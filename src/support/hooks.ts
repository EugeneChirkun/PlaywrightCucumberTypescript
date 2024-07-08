import {
    Before,
    After,
    BeforeAll,
    AfterStep,
    Status,
    setDefaultTimeout,
    AfterAll,
    BeforeStep,
    setParallelCanAssign,
    ITestCaseHookParameter
} from '@cucumber/cucumber';
import { chromium, ChromiumBrowser, firefox, FirefoxBrowser, LaunchOptions, request, webkit, WebKitBrowser } from 'playwright';
import { selectors } from '@playwright/test';

import * as path from 'path';
import fs from 'fs';
import CustomWorld from './world';
import getAllPages from '../pages/getAllPages';
import { shortDateTime } from '../utils/shortDateTime';

const browser = process.env.BROWSER ?? 'chromium';
const startTime = new Date();
let startTestTime: Date = null;
const workingDir: string = process.cwd();

declare global {
    namespace NodeJS {
        interface Global {
            browser: ChromiumBrowser | FirefoxBrowser | WebKitBrowser; // change to your favorite browser
            customBrowser: ChromiumBrowser;
            testName?: null;
            tags?: null;
            stepName?: null;
            scenarioUri?: null;
        }
    }
}

selectors.setTestIdAttribute('data-e2e');

setDefaultTimeout(3 * 60 * 1000); // Sets the default timeout for steps

const browserOptions: LaunchOptions = {
    headless: false
};

BeforeAll(async function () {
    switch (browser) {
        case 'firefox':
            global.browser = await firefox.launch(browserOptions);
            break;
        case 'webkit':
            global.browser = await webkit.launch(browserOptions);
            break;
        case 'msedge':
            global.browser = await chromium.launch({ headless: true, channel: 'msedge' });
            break;
        default:
            global.browser = await chromium.launch(browserOptions);
    }

    const dateTimeFormat = startTime.toISOString().split('.')[0].replace(/:/g, '-');
});

Before(async function (this: CustomWorld, scenario) {
    // customize the [browser context](https://playwright.dev/docs/next/api/class-browser#browsernewcontextoptions)
    global.testName = scenario.pickle.name.replace(/\W/g, '-');
    global.scenarioUri = scenario.pickle.uri;
    global.tags = scenario.pickle.tags.map(tag => tag.name);

    this.context = await global.browser.newContext();

    if (this.context !== undefined) {
        this.page = await this.context.newPage();
        this.page.setDefaultTimeout(60 * 1000); // Set default timeout for page methods
        this.page.setDefaultNavigationTimeout(60 * 1000); // Set default timeout for page navigation
        this.allPagesObj = getAllPages(this.page, this.context);
    }

    return this.page;
});

Before({ tags: '@Ignore' }, async function (this: CustomWorld) {
    return 'skipped' as any;
});

Before({ tags: '@Debug' }, async function (this: CustomWorld) {
    this.isDebugMode = true;
});

Before({ tags: '@NonAuth' }, async function (this: CustomWorld) {
    await chromium.launch(browserOptions);
    await this.allPagesObj?.mainPage.navigateToMain();
    await this.allPagesObj?.cookiesModal.acceptCookiesIfVisible();
    await this.allPagesObj?.lvBetActive.continueWithoutLogin();
});

After(async function (this: CustomWorld) {
    await this.page?.close();
    await this.context?.close()
});

AfterAll(async function () {
    await global.apiContext?.dispose();
    await global.browser.close();
});
