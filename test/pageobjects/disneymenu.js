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

    async isTBold(element) {
        const fontWeight = await element.getCSSProperty('font-weight');
        const numericWeight = parseInt(fontWeight.value);
        return fontWeight.value === 'bold' || numericWeight >= 700;
    }

 
}

export default new disneymenu();