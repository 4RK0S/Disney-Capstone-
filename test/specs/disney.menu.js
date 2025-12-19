import { expect, browser } from '@wdio/globals'
import home from '../pageobjects/home.js'
import disneymenu from '../pageobjects/disneymenu.js'

describe('Disney menu components test', () => {
    beforeEach(async () => {
        await home.disney();
    });

    it('should verify sub-menu item turns bold on hover', async () => {
        await disneymenu.validateFullMenu();
    });
});
