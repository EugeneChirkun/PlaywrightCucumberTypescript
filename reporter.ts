var reporter = require('cucumber-html-reporter');

var options = {
  theme: 'bootstrap',
  jsonDir: 'report',
  output: 'report/cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  storeScreenshots: true,
  launchReport: true,
  metadata: {
    ApplicationUrl: 'https://lvbet.com/'
  }
};

reporter.generate(options);
