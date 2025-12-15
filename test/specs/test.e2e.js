import { expect, browser } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import disneymenu from '../pageobjects/disneymenu.js'
import Page from '../pageobjects/page.js'
import characters from '../pageobjects/characters.js'
import searchbar from '../pageobjects/searchbar.js'

describe('Disney components test', () => {

    beforeEach(async () => {
        await homePage.open();
        // await browser.pause(3000);
    });

    it('When clicked Disney+ Button should send you to a new site and verify', async () => {
        await disneymenu.disneyClick();
    })

    it('When clicking Parks & Travel Button should send you to a new site and verify', async () => {
        await disneymenu.parkClick();
    })

    // it('Movies Button should send you to a new site', async () => {
    //     await disneymenu.moviesClick();
    // })

    // it('Shop Button should send you to a new site', async () => {
    //     await disneymenu.shopClick();
    // })

    it('In characters section clicking Lightning McQueen should display him at the bottom', async () => {
        await characters.lightMqClick();
    })

    it('In characters section clicking Mater should display him at the bottom', async () => {
        await characters.materClick();
    })

    // it('In characters section clicking Sally should display him at the bottom', async () => {
    //     await characters.sallyClick();
    // //     await components.assertCharacterDetails('Sally');
    //  })

    // it('In characters section clicking Doc Hudson should display him at the bottom', async () => {
    //     await characters.docClick();
    // //     await components.assertCharacterDetails('Doc Hudson');
    // })

    // it('In characters section clicking Guido should display him at the bottom', async () => {
    //     await characters.guidoClick();
    // //     await components.assertCharacterDetails('Guido');
    // })

    // it('In characters section clicking Luigi should display him at the bottom', async () => {
    //     await characters.luigiClick();
    // //     await components.assertCharacterDetails('Luigi');
    // })

    // it('In characters section clicking Sarge should display him at the bottom', async () => {
    //     await characters.sargeClick();
    // //     await components.assertCharacterDetails('Sarge');
    // })

    // it('In characters section clicking Fillmore should display him at the bottom', async () => {
    //     await characters.fillmoreClick();
    // //     await components.assertCharacterDetails('Fillmore');
    // })

    // it('In characters section clicking Flo should display him at the bottom', async () => {
    //     await characters.floClick();
    // //     await components.assertCharacterDetails('Flo');
    // })

    // it('In characters section clicking Ramone should display him at the bottom', async () => {
    //     await characters.ramoneClick();
    // //     await components.assertCharacterDetails('Ramone');
    // })

})