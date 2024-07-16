const report = require("multiple-cucumber-html-reporter");
const os = require("os");

const platformName = os.platform();
const platformVersion = os.version();

report.generate({
    jsonDir: "test-results",
    reportPath: "test-report",
    reportName: "LVBET automation report",
    pageTitle: "LVBET test report",
    openReportInBrowser: true,
    displayDuration: true,
    metadata: {
        ApplicationUrl: 'https://lvbet.com/',
        device: "Test machine",
        platform: {
            name: platformName,
            version: platformVersion,
        },
    }
});
