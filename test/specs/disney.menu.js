import { expect, browser } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import disneymenu from '../pageobjects/disneymenu.js'

describe('Disney menu components test', () => {

    beforeEach(async () => {
        await homePage.open();
    });

    it('Should hover over disney to check if bold and menu open then click every link', async () => {
        await disneymenu.disneyClick();
    })

    it('Should hover over On Disney+ to check if bold and click to verify URL', async () => {
        await disneymenu.onDisneyClick();
    });

    it('Should hover over Disney Bundle to check if bold and click to verify URL', async () => {
        await disneymenu.disneyBundClick();
    });

    it('Should hover over Walt Disney World to check if bold and click to verify URL', async () => {
        await disneymenu.worldClick();
    });

    it('Should hover over Disneyland to check if bold and click to verify URL', async () => {
        await disneymenu.landClick();
    });

    it('Should hover over Disney Cruise Line to check if bold and click to verify URL', async () => {
        await disneymenu.cruiseClick();
    });

    it('Should hover over Aulani to check if bold and click to verify URL', async () => {
        await disneymenu.aulaniClick();
    });

    it('Should hover over Adventures by Disney to check if bold and click to verify URL', async () => {
        await disneymenu.adventuresClick();
    });

    it('Should hover over Disney Vacation Club to check if bold and click to verify URL', async () => {
        await disneymenu.clubClick();
    });

    it('Park will be in bold when hovered and sends you to new site', async () => {
        await disneymenu.parkClick();
    })

    it('Movies Button should send you to a new site and should be bold', async () => {
        await disneymenu.moviesClick();
    })

    it('Should hover over Movies Anywhere to check if bold and click to verify URL', async () => {
        await disneymenu.moviesAnywhrClick();
    });

    it('Should hover over 20th Century Studios to check if bold and click to verify URL', async () => {
        await disneymenu.centuryClick();
    });

    it('Should hover over shop and check if bold and verify URL', async () => {
        await disneymenu.shopClick();
    })

    it('Should hover over Sale to check if bold and click to verify URL', async () => {
        await disneymenu.saleClick();
    });

    // it('Should hover over Clothing to check if bold and click to verify URL', async () => {
    //     await disneymenu.clothesClick();
    // });

    // it('Should hover over Accessories to check if bold and click to verify URL', async () => {
    //     await disneymenu.accessoriesClick();
    // });

    // it('Should hover over Toys to check if bold and click to verify URL', async () => {
    //     await disneymenu.toysClick();
    // });

    // it('Hovers over more to verify if bold and doesnt send you to new link when clicked', async () => {
    //     await disneymenu.moreClick();
    // });

    // it('Should hover over News to check if bold and click to verify URL', async () => {
    //     await disneymenu.newsClick();
    // });

    // it('Should hover over D23 to check if bold and click to verify URL', async () => {
    //     await disneymenu.d23Click();
    // });

    // it('Should hover over Shows to check if bold and click to verify URL', async () => {
    //     await disneymenu.showsClick();
    // });
})
