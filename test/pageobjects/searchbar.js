import { $, browser, expect } from '@wdio/globals'
import opensite from './url.js';

class searchbar extends opensite {
    get searchBtn () {
        return $('//input[@id="searchBarNav"]');
    }

    get searchX () {
        return $('#searchBarClose');
    }

    get searchOpen () {
        return $('#searchBarOpen');
    }

    get liloStitch () {
        return $('//a[@href="https://www.disneystore.com/stitch-keychain-lilo-stitch-463510053995.html"]');
    }

    async performSearch(searchTerms) {
        const searchBox = await $("#searchBarNav");
        for (const term of searchTerms) {
            await this.searchOpen.click();
            await searchBox.waitForDisplayed();
            await searchBox.setValue(term);
            await browser.keys('Enter');
            await this.resultsPage();
            await searchBox.clearValue();
        }
    }

    async searchClick () {
        await this.searchOpen.click();
        await this.searchBtn.click();
        await expect(this.searchBtn).toBeDisplayed();
    }

    async searchClickX () {
        await this.searchOpen.click();
        await this.searchX.click();
        await expect(this.searchBtn).not.toBeDisplayed();
    }

    async searchForLongMsg () {
        const searchBox = $("#searchBarNav");
        await searchBox.setValue("Hellooooooooooo thisss isss gonna be a really very long long super duper long message because why not");
        await browser.keys('Enter');
        await searchBox.clearValue();
    }

    async searchForNothing () {
        const searchBox = $("#searchBarNav");
        await searchBox.setValue("");
        await browser.keys('Enter');
    }

    async searchStitchMenu () {
        const searchBox = $("#searchBarNav");
        await searchBox.setValue("stitch");
        await this.liloStitch.click();
        
        const resultsSelector = await $('//h1[@class="product-name"]');
        await expect(resultsSelector).toHaveText(expect.stringContaining('Stitch Keychain – Lilo & Stitch'));
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