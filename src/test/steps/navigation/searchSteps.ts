import { Then, When } from '@cucumber/cucumber';
import CustomWorld from '../../../support/world';

When('the user enters the name of a game {string} in the search bar', async function (this: CustomWorld, gameName: string) {
    await this.allPagesObj?.mainPage.initiateSearch();
    await this.allPagesObj?.searchPage.searchGame(gameName);
});

Then('the {string} appeared in the search results', async function (this: CustomWorld, gameName: string) {
    await this.allPagesObj?.searchPage.isSearchResultDisplayed(gameName);
});

When('the user clicks on the {string} from search results', async function (this: CustomWorld, gameName: string) {
    await this.allPagesObj?.searchPage.selectGameFromSearchResultsList(gameName);
});

