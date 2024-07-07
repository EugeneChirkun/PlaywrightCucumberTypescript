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
import CustomWorld from './world';


declare global {
    namespace NodeJS {
        interface Global {
            browser: ChromiumBrowser | FirefoxBrowser | WebKitBrowser;
            customBrowser: ChromiumBrowser;
            testName?: null;
            tags?: null;
            stepName?: null;
        }
    }
}


setDefaultTimeout(3 * 60 * 1000); // Sets the default timeout for steps

const browser = process.env.BROWSER ?? 'chromium';

const browserOptions: LaunchOptions = {
    headless: false,
    slowMo: 500
};

// BeforeAll(async function () {
//     switch (browser) {
//         case 'firefox':
//             global.browser = await firefox.launch(browserOptions);
//             break;
//         case 'webkit':
//             global.browser = await webkit.launch(browserOptions);
//             break;
//         case 'msedge':
//             global.browser = await chromium.launch({ headless: true, channel: 'msedge' });
//             break;
//         default:
//             global.browser = await chromium.launch(browserOptions);
//     }
// });

Before({ tags: '@Ignore' }, async function () {
    return 'skipped' as any;
});

Before({ tags: '@Debug' }, async function () {
    this.isDebugMode = true;
});

Before({ tags: '@Sports or @NonAuth' }, async function (this: CustomWorld) {
    await chromium.launch(browserOptions);
    await this.allPagesObj?.mainPage.navigateToMain();

    if (await this.allPagesObj?.cookiesModal.isCookiesMsgIsVisible) {
        await this.allPagesObj?.cookiesModal.acceptCookies();
    }

    await this.allPagesObj?.lvBetActive.continueWithoutLogin();
});


// AfterAll(async function () {
//     await global.browser.close();
// })