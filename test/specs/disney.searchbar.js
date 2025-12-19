import { expect, browser } from '@wdio/globals'
import home from '../pageobjects/home.js'
import searchbar from '../pageobjects/searchbar.js'

describe('Disney searchbar components test', () => {

    beforeEach(async () => {
        await home.disney();
    });
    it('should search for multiple Disney searches successfully', async () => {
        const characters = ["Mickey", "8741579", "&#(!&$)''"];
        await searchbar.performSearch(characters);
    });

    it('Clicking magnifying glass, searches long msg clicks stitch in menu', async () => {
        await searchbar.searchClick();
        await searchbar.searchForLongMsg();
    })

    it('Clicking magnifying glass, searching nothing', async () => {
        await searchbar.searchClick();
        await searchbar.searchForNothing();
    })

    it('Clicking magnifying glass, searches "sti" clicks stitch in menu', async () => {
        await searchbar.searchClick();
        await searchbar.searchStitchMenu();
    })

    it('Click magnifying glass, then clicking X', async () => {
        await searchbar.searchClickX();
    })

    it('Click magnifying glass, then verifying search is gone when typing', async () => {
        await searchbar.searchBarNav();
    })
})