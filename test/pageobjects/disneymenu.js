import { $, browser, expect } from '@wdio/globals'
import opensite from './url.js';

class disneymenu extends opensite {

 get menuConfig() {
        return [
            {
                label: 'Disney+',
                index: 0,
                expectedUrl: 'https://www.disneyplus.com?cid=DTCI-Synergy-Gocom-Site-NA-DisneyPlus-US-DisneyPlus-DisneyPlus-EN-GlobalNav-Desktop',
                subItems: [
                    { label: 'On Disney+', index: 0, expectedUrl: 'https://ondisneyplus.disney.com/' },
                    { label: 'Disney Bundle', index: 1, expectedUrl: 'https://www.disneyplus.com/welcome/disney-hulu-espn-bundle' }
                ]
            },
            {
                label: 'Parks',
                index: 1,
                expectedUrl: 'https://disneyparks.disney.go.com/',
                subItems: [
                    { label: 'Walt Disney World Resort', index: 0, expectedUrl: 'https://disneyworld.disney.go.com/' },
                    { label: 'Disneyland Resort', index: 1, expectedUrl: 'https://disneyland.disney.go.com/' },
                    { label: 'Disney Cruise Line', index: 2, expectedUrl: 'https://disneycruise.disney.go.com/' },
                    { label: 'Aulani', index: 3, expectedUrl: 'https://www.disneyaulani.com/' },
                    { label: 'Adventures by Disney', index: 4, expectedUrl: 'https://www.adventuresbydisney.com/' },
                    { label: 'Disney Vacation Club', index: 5, expectedUrl: 'https://disneyvacationclub.disney.go.com/' }
                ]
            },
            {
                label: 'Movies',
                index: 2,
                expectedUrl: 'https://movies.disney.com/',
                subItems: [
                    { label: 'Movies Anywhere', index: 0, expectedUrl: 'https://moviesanywhere.com/' },
                    { label: '20th Century Studios', index: 1, expectedUrl: 'https://www.20thcenturystudios.com/' }
                ]
            },
            {
                label: 'Shop',
                index: 3,
                expectedUrl: 'https://www.disneystore.com/',
                subItems: [
                    { label: 'Sale', index: 0, expectedUrl: 'https://www.disneystore.com/sale-content/' },
                    { label: 'Clothes', index: 1, expectedUrl: 'https://www.disneystore.com/clothing-content/?cmp=OTL-Gocom_att_DropRollover_Clothes_EFC280559&efc=280559&att=GocomM_HP_Feed_DSIMobileRedirect_t' },
                    { label: 'Accessories', index: 2, expectedUrl: 'https://www.disneystore.com/accessories-content/?cmp=OTL-Gocom_att_DropRollover_Accessories_EFC280559&efc=280559&att=GocomM_HP_Feed_DSIMobileRedirect_t' },
                    { label: 'Toys', index: 3, expectedUrl: 'https://www.disneystore.com/toys-plush/?cmp=OTL-Gocom_att_DropRollover_Toys_EFC280559&efc=280559&cmp=OTL-Gocom&att=GocomM_HP_Feed_DSIMobileRedirect_t' }
                ]
            },
            {
                label: 'More',
                index: 4,
                expectedUrl: null,
                subItems: [
                    { label: 'Disney News', index: 0, selector: '//a[@href="http://news.disney.com/"]' },
                    { label: 'D23', index: 1, selector: '//a[@href="https://d23.com/"]' },
                    { label: 'Disney Live Shows', index: 2, selector: '//a[@href="https://liveshows.disney.com/"]' }
                ]
            }
        ];
    }

    getParentBtn(index) {
        const tag = index === 4 ? 'button' : 'a';
        return $(`${tag}[data-testid="matterhorn-navigation-item-${index}"]`);
    }

    getSubBtn(parentIdx, subIdx, customSelector = null) {
        if (customSelector) return $(customSelector);
        return $(`a[data-testid="matterhorn-navigation-sub-item-${parentIdx}-${subIdx}"]`);
    }

    async verifyLink(element, expectedUrlPart) {
        const href = await element.getAttribute('href');
        console.log(`Checking link destination. Found: ${href} | Expected to contain: ${expectedUrlPart}`);
        expect(href).toContain(expectedUrlPart);
    }

    async open() {
        await browser.url('https://www.disney.com');
    }

    async validateFullMenu() {
        for (const parent of this.menuConfig) {
            const pBtn = await this.getParentBtn(parent.index);

            await pBtn.moveTo();
            const pWeight = await pBtn.getCSSProperty('font-weight');
            expect(pWeight.value).toBe(700);

            if (parent.expectedUrl) {
                await this.verifyLink(pBtn, parent.expectedUrl);
            }

            for (const sub of parent.subItems) {
                await pBtn.moveTo();
                
                const sBtn = await this.getSubBtn(parent.index, sub.index, sub.selector);
                await sBtn.waitForDisplayed();

                await sBtn.moveTo();
                const sWeight = await sBtn.getCSSProperty('font-weight');
                expect(sWeight.value).toBe(700);

                if (sub.expectedUrl) {
                    await this.verifyLink(sBtn, sub.expectedUrl);
                }
            }
        }
    }
}

export default new disneymenu();