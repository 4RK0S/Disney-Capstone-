import { expect, browser } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import searchbar from '../pageobjects/searchbar.js'

describe('Disney searchbar components test', () => {

    beforeEach(async () => {
        await homePage.open();
    });
    
    it('Clicking magnifying glass, searching for mickey, & clear message', async () => {
        await searchbar.searchClick();
        await searchbar.searchForMickey();
        await searchbar.resultsPage();
    })

    it('Clicking magnifying glass, searching in numbers', async () => {
        await searchbar.searchClick();
        await searchbar.searchForNumbers();
        await searchbar.resultsPage();
    })

    it('Clicking magnifying glass, searching in special characters', async () => {
        await searchbar.searchClick();
        await searchbar.searchForSpcChar();
        await searchbar.resultsPage();
    })

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