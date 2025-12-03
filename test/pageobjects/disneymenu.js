import { $, browser, expect } from '@wdio/globals'
import Page from './page.js';

class disneymenu extends Page {
    get disneyBtn () {
        return $('a[data-testid="matterhorn-navigation-item-0"]');
    }

    get onDisneyBtn () {
        return $('a[data-testid="matterhorn-navigation-sub-item-0-0"]');
    }

    get disneyBundBtn () {
        return $('a[data-testid="matterhorn-navigation-sub-item-0-1"]');
    }
    
    get parkBtn () {
        return $('a[data-testid="matterhorn-navigation-item-1"]');
    }

    get moviesBtn () {
        return $('a[data-testid="matterhorn-navigation-item-2"]');
    }

    get shopBtn () {
        return $('a[data-testid="matterhorn-navigation-item-3"]');
    }

    get searchBtn () {
        return $('#searchBarNav');
    }

    get searchInput () {
        return this.searchBtn;
    }

    get searchX () {
        return $('#searchBarClose');
    }

    get arrowFuncNext () {
        return $('button[data-direction="next"]');
    }

    get arrowFuncPrev () {
        return $('button[data-direction="prev"]');
    }


    async nextBtn () {
        await this.arrowFuncNext.click();
    }

    async prevBtn () {
        await this.arrowFuncPrev.click();
    }

    async disneyClick () {
        await this.disneyBtn.click();
        const allHandles = await browser.getWindowHandles();
        await browser.switchToWindow(allHandles[allHandles.length - 1]);
        await expect(await browser.getUrl()).toBe('https://www.disneyplus.com/?cid=DTCI-Synergy-Gocom-Site-NA-DisneyPlus-US-DisneyPlus-DisneyPlus-EN-GlobalNav-Desktop');
    }

    async parkClick () {
        await this.parkBtn.click();
        const allHandles = await browser.getWindowHandles();
        await browser.switchToWindow(allHandles[allHandles.length - 1]);
        await expect(await browser.getUrl()).toBe('https://disneyparks.disney.go.com/?DISCID=DI_sitenav');
    }

    async moviesClick () {
        await this.moviesBtn.click();
    }

    async shopClick () {
        await this.shopBtn.click();
    }

    async search(query) {
        await this.searchInput.setValue(query);
        await expect(browser).toHaveUrlContaining('search');
    }

    async searchResultsPage() {
        await expect(browser).toHaveUrlContaining('search');
    }
}

export default new disneymenu();