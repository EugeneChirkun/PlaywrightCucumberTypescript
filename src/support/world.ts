import { setWorldConstructor, World } from '@cucumber/cucumber';
import { BrowserContext, Page } from 'playwright';
import getAllPages from '../pages/getAllPages';

export default class CustomWorld extends World {
    context?: BrowserContext;
    page?: Page;

    public allPagesObj?: ReturnType<typeof getAllPages>;

    public isDebugMode = [undefined, 'False'].includes(process.env.DEBUG) === false;
}

setWorldConstructor(CustomWorld);
