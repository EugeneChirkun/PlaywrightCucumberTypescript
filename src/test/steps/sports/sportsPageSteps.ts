import { DataTable, Then, When } from '@cucumber/cucumber';
import CustomWorld from '../../../support/world';
import { expect } from "@playwright/test";

Then('the user should be redirected to the Sports page', async function (this: CustomWorld) {
    await this.page?.waitForLoadState('domcontentloaded');
    await this.allPagesObj?.lvBetActive.continueWithoutLoginIfVisible();
    await this.allPagesObj?.cookiesModal.acceptCookiesIfVisible();
    await this.allPagesObj?.sportsMainPage.isUserOnSportsMainPage();
});

When('the user should see the menu items', async function (this: CustomWorld, table: DataTable) {
    const expectedItems = table.raw().flat();
    for (const itemName of expectedItems) {
        await this.allPagesObj?.sportsMainPage.isTopNavBarItemVisible(itemName);
    }
});

When('the user hovers over the {} menu item', async function (this: CustomWorld, menuItem: string) {
    switch (menuItem) {
        case 'Sports':
            await this.allPagesObj?.sportsMainPage.getSportsTopNavBar()?.sports.hover();
            break;
        case 'BetBuilder':
            await this.allPagesObj?.sportsMainPage.getSportsTopNavBar()?.betBuilder.hover();
            break;
        case 'In-play':
            await this.allPagesObj?.sportsMainPage.getSportsTopNavBar()?.inPlay.hover();
            break;
        case 'Virtual':
            await this.allPagesObj?.sportsMainPage.getSportsTopNavBar()?.virtual.hover();
            break;
        case 'Casino':
            await this.allPagesObj?.sportsMainPage.getSportsTopNavBar()?.casino.hover();
            break;
        case 'Live casino':
            await this.allPagesObj?.sportsMainPage.getSportsTopNavBar()?.liveCasino.hover();
            break;
        case 'LV Bet Pot':
            await this.allPagesObj?.sportsMainPage.getSportsTopNavBar()?.lvBetPot.hover();
            break;

        default:
            throw new Error(`No matching ${menuItem} menu item found`);
    }
});

Then('the {} should change its background color to yellow {}', async function (this: CustomWorld, menuItem: string, colorToCheck: string) {
    await this.page.waitForLoadState('networkidle');
    let textElement;
    switch (menuItem) {
        case 'Sports':
            textElement = this.allPagesObj?.sportsMainPage.getSportsTopNavBar()?.sports;
            break;
        case 'BetBuilder':
            textElement = this.allPagesObj?.sportsMainPage.getSportsTopNavBar()?.betBuilder;
            break;
        case 'In-play':
            textElement = this.allPagesObj?.sportsMainPage.getSportsTopNavBar()?.inPlay;
            break;
        case 'Virtual':
            textElement = this.allPagesObj?.sportsMainPage.getSportsTopNavBar()?.virtual;
            break;
        case 'Casino':
            textElement = this.allPagesObj?.sportsMainPage.getSportsTopNavBar()?.casino;
            break;
        case 'Live casino':
            textElement = this.allPagesObj?.sportsMainPage.getSportsTopNavBar()?.liveCasino;
            break;
        case 'LV Bet Pot':
            textElement = this.allPagesObj?.sportsMainPage.getSportsTopNavBar()?.lvBetPot;
            break;

        default:
            throw new Error(`No matching ${menuItem} menu item found`);

    }

    const hoverColor = await textElement.evaluate((element) => {
        return window.getComputedStyle(element).color;
    });

    expect(hoverColor).toBe(colorToCheck);
});
