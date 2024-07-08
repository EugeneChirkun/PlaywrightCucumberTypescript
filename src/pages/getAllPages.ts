import {BrowserContext, Page} from 'playwright';

import BasePage from './basePage';
import MainPage from './mainPage';
import CookiesModal from './modals/cookiesModal';
import LvBetActive from './modals/lvBetActive';
import MainPageHamburger from './menus/mainPageHamburger';
import SportsMainPage from './sports/sportsMainPage'
import SearchPage from "./menus/searchPage";
import GamesMainPage from "./games/gamesMainPage";


function getAllPages(page: Page, context: BrowserContext) {

    return {
        basePage: new BasePage(page, context),
        mainPage: new MainPage(page, context),
        cookiesModal: new CookiesModal(page, context),
        lvBetActive: new LvBetActive(page, context),
        mainPageHamburger: new MainPageHamburger(page, context),
        sportsMainPage: new SportsMainPage(page, context),
        searchPage: new SearchPage(page, context),
        gamesMainPage: new GamesMainPage(page, context),
    };
}

export default getAllPages;
