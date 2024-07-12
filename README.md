# General overview

### Test cases
Test cases are written using Gherkin syntax, for further automation using Cucumber. Stored in .xlsx and placed in `test cases EXCEL` directory in project root folder.

### Challenges Faced During the Task
- Test Stability: The site sometimes goes down and becomes unavailable, affecting test stability.
- User Registration: Testing on the global site presented challenges with user registration. The .pl domain required personal data such as ID numbers for registration.
- Testing on Production: Without having Swagger or any other documentation with API endpoints, implementing load and performance testing using Artillery.io was challenging.
- Domain-Specific Challenges: The domain of the application, gambling, and bets, has specific regulations and behaviors which added complexity to the testing process.

### Additional Challenges

- Gambling and Betting Regulations: The domain has strict regulations and compliance requirements which can affect how tests are executed and what data can be used.
- Data Sensitivity: Handling sensitive user data during tests requires additional security measures and considerations.
- Dynamic Content: The nature of betting sites means that content can change frequently, requiring tests to be robust and adaptable to these changes.

# Introduction

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

Was added two workflows for GitHub Actions. Workflows triggered on push and pull request in `master` branch 
One workflow for running Playwright tests and creating reports, second workflow for performance and load testing using Artillery.io.
