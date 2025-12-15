import { $, browser, expect } from '@wdio/globals'
import Page from './page.js';

class searchbar extends Page {
    get searchBtn () {
        return $('#searchBarNav');
    }

    get searchInput () {
        return this.searchBtn();
    }

    get searchX () {
        return $('#searchBarClose');
    }

    get searchOpen () {
        return $('#searchBarOpen');
    }


    async searchClick () {
        await this.searchOpen.click();
        await this.searchBtn.click();
    }

    async searchForMickey () {
        const searchBox = $("#searchBarNav");
        await searchBox.setValue("Mickey");
        await browser.keys('Enter');
        await searchBox.clearValue();
    }

    async searchForNumbers () {
        const searchBox = $("#searchBarNav");
        await searchBox.setValue("8741579");
        await browser.keys('Enter');
    }

    async searchForSpcChar () {
        const searchBox = $("#searchBarNav");
        await searchBox.setValue("&#(!&$)''");
        await browser.keys('Enter');
    }

    async searchForNothing () {
        const searchBox = $("#searchBarNav");
        await searchBox.setValue("");
        await browser.keys('Enter');
    }

    async resultsPage () {
        const resultsSelector = await $('p[class="XpvMl ehPoD hfDkF TUFqZ KfQkg jsU ghObo wpXg XBBWG "]');
        await expect(resultsSelector).toHaveText(expect.stringContaining('Results'));
    }
}

export default new searchbar();