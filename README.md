## Introduction

This suite supports the end to end testing of https://lvbet.com/.

- Testing scenarios are written in the easy to read gherkin syntax.
- `cucumber-js` is the test runner. Executing each defined step.
- `playwright` is used as a test helper, facilitating automated browser interaction in each step.

## Installation & Setup

### Prerequisites:

- Node installed (v20.x)

### Setup

1. `npm install` - Install node packages.
2. `npx playwright install --with-deps` - To download browsers
3. `npm install -g artillery` - To install Artillery.io

## Usage

Tests can be run with the command `npm run run:all`. See the `package.json` for a full list of options.
To run current test, add `@Current` into feature file, and run `npm run run:current`

## Reference

- [Cucumber documentation](https://cucumber.io/docs/installation/javascript/)
- [Gherkin syntax](https://cucumber.io/docs/gherkin/reference/)
- [Playwright documentation](https://playwright.dev/docs/intro)

## Cucumber HTML Reports

Reports can be generated with the command `npm run generate:report`. See the `package.json` for a full list of options.
Also, in `/artefacts` folder are stored screenshots and videos, generated during tests execution. 

## Performance and load testing

For performance and load testing purposes Artillery.io was added.

## GitHub Actions workflows

Was added two workflows for GitHub Actions. Workflows triggered on push and pull request in `master` branch. 
One workflow for running Playwright tests and creating reports, second workflow for performance and load testing using Artillery.io.


