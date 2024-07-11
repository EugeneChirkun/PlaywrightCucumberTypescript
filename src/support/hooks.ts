import {
    After,
    AfterAll,
    AfterStep,
    Before,
    BeforeAll,
    BeforeStep,
    ITestCaseHookParameter,
    setDefaultTimeout,
    setParallelCanAssign,
    Status
} from '@cucumber/cucumber';
import { chromium, ChromiumBrowser, firefox, FirefoxBrowser, LaunchOptions, webkit, WebKitBrowser } from 'playwright';
import { selectors } from '@playwright/test';
import fs from 'fs';
import CustomWorld from './world';
import getAllPages from '../pages/getAllPages';
import { shortDateTime } from '../utils/shortDateTime';
import path from "path";

const browser = process.env.BROWSER ?? 'chromium';
const startTime = new Date();
let startTestTime: Date = null;
const workingDir: string = process.cwd();

declare global {
    namespace NodeJS {
        interface Global {
            browser: ChromiumBrowser | FirefoxBrowser | WebKitBrowser; // change to your favorite browser
            customBrowser: ChromiumBrowser;
            scrPath?: null;
            videosPath?: null;
            testName?: null;
            tags?: null;
            stepName?: null;
            scenarioUri?: null;
        }
    }
}

selectors.setTestIdAttribute('data-e2e');

setDefaultTimeout(5 * 60 * 1000); // Sets the default timeout for steps

setParallelCanAssign(function (pickleInQuestion, picklesInProgress) {
    // Only one pickle with the word 'SerialMode' in the name can run at a time
    if (pickleInQuestion.name.includes('SerialMode')) {
        return picklesInProgress.every(p => !p.name.includes('SerialMode'));
    }
    return true;
});

const browserOptions: LaunchOptions = {
    headless: true
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

    global.scrPath = path.join(workingDir, `artefacts/screenshots/${dateTimeFormat}`);
    global.videosPath = path.join(workingDir, `artefacts/videos/${dateTimeFormat}`);
});

Before(async function (this: CustomWorld, scenario) {
    // customize the [browser context](https://playwright.dev/docs/next/api/class-browser#browsernewcontextoptions)
    global.testName = scenario.pickle.name.replace(/\W/g, '-');
    global.scenarioUri = scenario.pickle.uri;
    global.tags = scenario.pickle.tags.map(tag => tag.name);

    this.context = await global.browser.newContext({
        recordVideo: {
            dir: `${global.videosPath}/${global.testName}`
        }
    });

    if (this.context !== undefined) {
        this.page = await this.context.newPage();
        this.page.setDefaultTimeout(60 * 1000); // Set default timeout for page methods
        this.page.setDefaultNavigationTimeout(60 * 1000); // Set default timeout for page navigation
        this.allPagesObj = getAllPages(this.page, this.context);
    }
    startTestTime = new Date();

    console.log(`scenario.pickle.name: ${scenario.pickle.name}`);
    return this.page;
});

Before({ tags: '@Ignore' }, async function (this: CustomWorld) {
    return 'skipped' as any;
});

Before({ tags: '@NonAuth' }, async function (this: CustomWorld) {
    await chromium.launch(browserOptions);
    await this.allPagesObj?.mainPage.navigateToMain();
    await this.allPagesObj?.cookiesModal.acceptCookiesIfVisible();
    await this.allPagesObj?.lvBetActive.continueWithoutLogin();
});

BeforeStep(async function (this: CustomWorld, { pickleStep }) {
    global.stepName = pickleStep.text.replace(/\W/g, '-');
});

AfterStep(async function (this: CustomWorld, { result }) {
    const screenshot = await this.page?.screenshot({
        path: `${global.scrPath}/${global.testName}/${shortDateTime()}-${global.stepName}-${result.status}-.png`
    });

    this.attach(screenshot, 'image/png');
});

After(async function (this: CustomWorld, { result }: ITestCaseHookParameter) {
    const endTime: Date = new Date();
    const timeDifference = Math.abs(endTime.getTime() - startTestTime.getTime());
    const minutes = Math.floor(timeDifference / 60000); // 1 minute = 60,000 milliseconds
    const seconds = ((timeDifference % 60000) / 1000).toFixed(0); // Remaining milliseconds after calculating minutes

    await this.page?.close();
    await this.context?.close()

    if (result) {
        if (result.status !== Status.PASSED) {
            const videoPath = await this.page?.video().path();
            this.attach(fs.readFileSync(videoPath), 'video/webm');
        }
    }
    console.log(`Execution time - ${minutes} minutes ${seconds} seconds`);
});

AfterAll(async function () {
    await global.apiContext?.dispose();
    await global.browser.close();
});
