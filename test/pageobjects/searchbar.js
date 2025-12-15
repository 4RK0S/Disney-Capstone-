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

    get liloStitch () {
        return $('a[href="https://ondisneyplus.disney.com/show/lilo-and-stitch-the-series"]');
    }


    async searchClick () {
        await this.searchOpen.click();
        await this.searchBtn.click();
    }

    async searchClickX () {
        await this.searchOpen.click();
        await this.searchX.click();
    }

    async searchForMickey () {
        const searchBox = $("#searchBarNav");
        await searchBox.setValue("Mickey");
        await browser.keys('Enter');
        await searchBox.clearValue();
    }

    async searchForLongMsg () {
        const searchBox = $("#searchBarNav");
        await searchBox.setValue("Hellooooooooooo thisss isss gonna be a really very long long super duper long message because why not");
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

    async searchStitchMenu () {
        const searchBox = $("#searchBarNav");
        await searchBox.setValue("sti");
        await this.liloStitch.click();
        const resultsSelector = await $('h1[class="catalog-title"]');
        await expect(resultsSelector).toHaveText(expect.stringContaining('Lilo & Stitch: The Series'));
    }

    async searchBarNav () {
        await this.searchOpen.click();
         const searchBox = $("#searchBarNav");
        await searchBox.setValue("f");
        const resultsSelector = await $('input[placeholder="Search"]');
        await expect(resultsSelector).not.toHaveText(expect.stringContaining('Search'));
    }

    async resultsPage () {
        const resultsSelector = await $('p[class="XpvMl ehPoD hfDkF TUFqZ KfQkg jsU ghObo wpXg XBBWG "]');
        await expect(resultsSelector).toHaveText(expect.stringContaining('Results'));
    }
}

export default new searchbar();