import { Then } from '@cucumber/cucumber';
import CustomWorld from '../../../support/world';

Then('the user is on the page of {string}', async function (this: CustomWorld, gameName: string) {
    await this.allPagesObj?.gamesMainPage.isUserOnGamePage(gameName);
});
