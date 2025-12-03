import { $, browser, expect } from '@wdio/globals'
import Page from './page.js';

class searchbar extends Page {
    get searchBtn () {
        return $('#searchBarNav');
    }

    get searchInput () {
        return this.searchBtn;
    }

    get searchX () {
        return $('#searchBarClose');
    }



    async search(query) {
        await this.searchInput.setValue(query);
        await expect(browser).toHaveUrlContaining('search');
    }

    async searchResultsPage() {
        await expect(browser).toHaveUrlContaining('search');
    }
}

export default new searchbar();