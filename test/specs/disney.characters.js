import { expect, browser } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import characters from '../pageobjects/characters.js'

describe('Disney characters components test', () => {

    beforeEach(async () => {
        await homePage.disney();
    });

    it('In characters section clicking Lightning McQueen should display him at the bottom', async () => {
        await characters.lightMqClick();
    })

    it('In characters section clicking Mater should display him at the bottom', async () => {
        await characters.materClick();
    })

    it('In characters section clicking Sally should display him at the bottom', async () => {
        await characters.sallyClick();
     })

    it('In characters section clicking Doc Hudson should display him at the bottom', async () => {
        await characters.docHudsonClick();
    })

    it('In characters section clicking Guido should display him at the bottom', async () => {
        await characters.guidoClick();
    })

    it('In characters section clicking Luigi should display him at the bottom', async () => {
        await characters.luigiClick();
    })

    it('In characters section clicking Sarge should display him at the bottom', async () => {
        await characters.sargeClick();
    })

    it('In characters section clicking Fillmore should display him at the bottom', async () => {
        await characters.fillmoreClick();
    })

    it('In characters section clicking Flo should display him at the bottom', async () => {
        await characters.floClick();
    })

    it('In characters section clicking Ramone should display him at the bottom', async () => {
        await characters.ramoneClick();
    })
})