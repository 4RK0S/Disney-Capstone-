import { $, browser, expect } from '@wdio/globals'
import opensite from './page.js';

class disneymenu extends opensite {
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
    get worldResortBtn () {
        return $('a[data-testid="matterhorn-navigation-sub-item-1-0"]')
    }
    get landResort() { 
        return $('//a[@data-testid="matterhorn-navigation-sub-item-1-1"]'); 
    }
    get cruiseBtn() { 
        return $('a[data-testid="matterhorn-navigation-sub-item-1-2"]'); 
    }
    get aulaniBtn() { 
        return $('a[data-testid="matterhorn-navigation-sub-item-1-3"]'); 
    }
    get adventuresBtn() { 
        return $('a[data-testid="matterhorn-navigation-sub-item-1-4"]'); 
    }
    get clubBtn() { 
        return $('a[data-testid="matterhorn-navigation-sub-item-1-5"]'); 
    }

    get moviesBtn () {
        return $('a[data-testid="matterhorn-navigation-item-2"]');
    }
    get moviesAnywhrBtn() { 
        return $('a[data-testid="matterhorn-navigation-sub-item-2-0"]'); 
    }
    get centuryBtn() { 
        return $('a[data-testid="matterhorn-navigation-sub-item-2-1"]'); 
    }

    get shopBtn () {
        return $('a[data-testid="matterhorn-navigation-item-3"]');
    }
    get saleBtn() { 
        return $('a[data-testid="matterhorn-navigation-sub-item-3-0"]'); 
    }
    get clothesBtn() { 
        return $('a[data-testid="matterhorn-navigation-sub-item-3-1"]'); 
    }
    get accessoriesBtn() { 
        return $('a[data-testid="matterhorn-navigation-sub-item-3-2"]'); 
    }
    get toysBtn() { 
        return $('a[data-testid="matterhorn-navigation-sub-item-3-3"]'); 
    }

    get moreBtn () {
        return $('//button[@data-testid="matterhorn-navigation-item-4"]');
    }

    get newsBtn() { 
        return $('//a[@href="http://news.disney.com/"]');
    }

    get newsLink() {
        return $('//a[contains(text(), "Disney News")]');
    }
    get d23Btn() { 
        return $('//a[@href="https://d23.com/"]'); 
    }
    get showsBtn() { 
        return $('//a[@href="https://liveshows.disney.com/"]'); 
    }
    
    get disneyWorld() {
        return $('//img[@alt="Walt Disney World Logo"]')
    }

    get worldLink() {
        return $('//a[@href="https://disneyworld.disney.go.com/?DISCID=DI_mtt_chrome_dropdown_wdw"]')
    }

    async disneyClick () {
        await this.disneyBtn.moveTo();
        const disnB = await $('button[class="VZTD HNQqj fXQuq ibBnq UbGlr vsXdd KDIsc GYmxK OwSIu lwPSj PUdKg LBBrO ubOdK TaAzQ FfVOu zGMUT left"]');
        const fontWeight = await disnB.getCSSProperty('font-weight');
        expect(fontWeight.value).toBe(700);
        
        await this.disneyBtn.click();
        const allHandles = await browser.getWindowHandles();
        await browser.switchToWindow(allHandles[allHandles.length - 1]);
        await expect(await browser.getUrl()).toBe('https://www.disneyplus.com/?cid=DTCI-Synergy-Gocom-Site-NA-DisneyPlus-US-DisneyPlus-DisneyPlus-EN-GlobalNav-Desktop');
    }

    async onDisneyClick() {
        await this.disneyBtn.moveTo();
        const onDisneyB = await $('a[href="https://ondisneyplus.disney.com/"]');
        const fontWeight1 = await onDisneyB.getCSSProperty('font-weight');
        expect(fontWeight1.value).toBe(700);
        
        await this.onDisneyBtn.click();
        const allHandles = await browser.getWindowHandles();
        await browser.switchToWindow(allHandles[allHandles.length - 1]);
        await expect(await browser.getUrl()).toBe('https://ondisneyplus.disney.com/');
    }

    async disneyBundClick() {
        await this.disneyBtn.moveTo();
        const disneyBundB = await $('a[class="VWQX UbGlr ibBnq bmjsw Xsujv lJgFA kpgVi utGN OwSIu oazfU McMna ubPuV pdYhu RBrva subItem"]');
        const fontWeight2 = await disneyBundB.getCSSProperty('font-weight');
        expect(fontWeight2.value).toBe(700);
        
        await this.disneyBundBtn.click();
        const allHandles = await browser.getWindowHandles();
        await browser.switchToWindow(allHandles[allHandles.length - 1]);
        await expect(await browser.getUrl()).toBe('https://www.disneyplus.com/welcome/disney-hulu-espn-bundle?cid=DTCI-Synergy-Gocom-Site-Acquisition-Bundle-US-DisneyPlus-NA-EN-DropdownNav-Disneycom_Bundle_DropDownNav_Desktop-NA');
    }

    async parkClick () {
        await this.parkBtn.moveTo();
        const parkB = await $('a[class="VZTD HNQqj fXQuq ibBnq UbGlr vsXdd KDIsc GYmxK OwSIu lwPSj PUdKg LBBrO ubOdK TaAzQ FfVOu zGMUT left"]');
        const fontWeight3 = await parkB.getCSSProperty('font-weight');
        expect(fontWeight3.value).toBe(700);
        
        await this.parkBtn.click();
        const allHandles = await browser.getWindowHandles();
        await browser.switchToWindow(allHandles[allHandles.length - 1]);
        await expect(await browser.getUrl()).toBe('https://disneyparks.disney.go.com/?DISCID=DI_sitenav');
    }

    async worldClick() {
        await this.parkBtn.moveTo();
        await expect(this.worldResortBtn).toBeClickable();
        await expect(this.worldLink).toHaveAttribute('href', 'https://disneyworld.disney.go.com/?DISCID=DI_mtt_chrome_dropdown_wdw');

        const worldResortB = await $('a[class="VWQX UbGlr ibBnq bmjsw Xsujv lJgFA kpgVi utGN OwSIu oazfU McMna ubPuV pdYhu RBrva subItem"]');
        const fontWeight4 = await worldResortB.getCSSProperty('font-weight');
        expect(fontWeight4.value).toBe(700);
    }

    async landClick() {
        await this.parkBtn.moveTo();
        await expect(this.landResort).toHaveAttribute('href', 'https://disneyland.disney.go.com/?DISCID=DI_sitenav_dropdown_dlr');

        const landResortB = await $('a[class="VWQX UbGlr ibBnq bmjsw Xsujv lJgFA kpgVi utGN OwSIu oazfU McMna ubPuV pdYhu RBrva subItem"]');
        const fontWeight5 = await landResortB.getCSSProperty('font-weight');
        expect(fontWeight5.value).toBe(700);
    }

    async cruiseClick() {
        await this.parkBtn.moveTo();
        await expect(this.cruiseBtn).toHaveAttribute('href', 'https://disneycruise.disney.go.com/?DISCID=DI_sitenav_dropdown_dcl');

        const cruiseB = await $('a[class="VWQX UbGlr ibBnq bmjsw Xsujv lJgFA kpgVi utGN OwSIu oazfU McMna ubPuV pdYhu RBrva subItem"]');
        const fontWeight6 = await cruiseB.getCSSProperty('font-weight');
        expect(fontWeight6.value).toBe(700);
    }

    async aulaniClick() {
        await this.parkBtn.moveTo();
        await expect(this.aulaniBtn).toHaveAttribute('href', 'https://www.disneyaulani.com/?DISCID=DI_sitenav_dropdown_aulani');

        const aulaniB = await $('a[class="VWQX UbGlr ibBnq bmjsw Xsujv lJgFA kpgVi utGN OwSIu oazfU McMna ubPuV pdYhu RBrva subItem"]');
        const fontWeight7 = await aulaniB.getCSSProperty('font-weight');
        expect(fontWeight7.value).toBe(700);
    }

    async adventuresClick() {
        await this.parkBtn.moveTo();
        await expect(this.adventuresBtn).toHaveAttribute('href', 'https://www.adventuresbydisney.com/?DISCID=DI_sitenav_dropdown_abd');

        const adventuresB = await $('a[class="VWQX UbGlr ibBnq bmjsw Xsujv lJgFA kpgVi utGN OwSIu oazfU McMna ubPuV pdYhu RBrva subItem"]');
        const fontWeight8 = await adventuresB.getCSSProperty('font-weight');
        expect(fontWeight8.value).toBe(700);
    }

    async clubClick() {
        await this.parkBtn.moveTo();
        await expect(this.clubBtn).toHaveAttribute('href', 'https://disneyvacationclub.disney.go.com/?DISCID=DI_mtt_chrome_dropdown_dvc');
        
        const clubB = await $('a[class="VWQX UbGlr ibBnq bmjsw Xsujv lJgFA kpgVi utGN OwSIu oazfU McMna ubPuV pdYhu RBrva subItem"]');
        const fontWeight9 = await clubB.getCSSProperty('font-weight');
        expect(fontWeight9.value).toBe(700);
    }

    async moviesClick () {
        await this.moviesBtn.moveTo();
        const moviesB = await $('a[class="VZTD HNQqj fXQuq ibBnq UbGlr vsXdd KDIsc GYmxK OwSIu lwPSj PUdKg LBBrO ubOdK TaAzQ FfVOu zGMUT left"]');
        const fontWeight10 = await moviesB.getCSSProperty('font-weight');
        expect(fontWeight10.value).toBe(700);

        await this.moviesBtn.click();
        const allHandles = await browser.getWindowHandles();
        await browser.switchToWindow(allHandles[allHandles.length - 1]);
        await expect(await browser.getUrl()).toBe('https://movies.disney.com/');
    }

    async moviesAnywhrClick() {
        await this.moviesBtn.moveTo();
        const moviesAnywhrB = await $('a[class="VWQX UbGlr ibBnq bmjsw Xsujv lJgFA kpgVi utGN OwSIu oazfU McMna ubPuV pdYhu RBrva subItem"]');
        const fontWeight11 = await moviesAnywhrB.getCSSProperty('font-weight');
        expect(fontWeight11.value).toBe(700);
        
        await this.moviesAnywhrBtn.click();
        const allHandles = await browser.getWindowHandles();
        await browser.switchToWindow(allHandles[allHandles.length - 1]);
        await expect(await browser.getUrl()).toBe('https://moviesanywhere.com/collection/disney-collection');
    }

    async centuryClick() {
        await this.moviesBtn.moveTo();
        await expect(this.centuryBtn).toHaveAttribute('href', 'https://www.20thcenturystudios.com/');
        
        const centuryB = await $('a[class="VWQX UbGlr ibBnq bmjsw Xsujv lJgFA kpgVi utGN OwSIu oazfU McMna ubPuV pdYhu RBrva subItem"]');
        const fontWeight12 = await centuryB.getCSSProperty('font-weight');
        expect(fontWeight12.value).toBe(700);
    }

    async shopClick () {
        await this.shopBtn.moveTo();
        const shopB = await $('a[class="VZTD HNQqj fXQuq ibBnq UbGlr vsXdd KDIsc GYmxK OwSIu lwPSj PUdKg LBBrO ubOdK TaAzQ FfVOu zGMUT left"]');
        const fontWeight13 = await shopB.getCSSProperty('font-weight');
        expect(fontWeight13.value).toBe(700);

        await this.shopBtn.click();
        const allHandles = await browser.getWindowHandles();
        await browser.switchToWindow(allHandles[allHandles.length - 1]);
        await expect(await browser.getUrl()).toBe('https://www.disneystore.com/?cmp=OTL-Gocom_sitenav_ShpIconB_Shop_EFC28055&efc=280559&att=GocomM_HP_Feed_DSIMobileRedirect_t');
    }

    async saleClick() {
        await this.shopBtn.moveTo();
        const saleB = await $('a[class="VWQX UbGlr ibBnq bmjsw Xsujv lJgFA kpgVi utGN OwSIu oazfU McMna ubPuV pdYhu RBrva subItem"]');
        const fontWeight14 = await saleB.getCSSProperty('font-weight');
        expect(fontWeight14.value).toBe(700);
        
        await this.saleBtn.click();
        const allHandles = await browser.getWindowHandles();
        await browser.switchToWindow(allHandles[allHandles.length - 1]);
        await expect(await browser.getUrl()).toBe('https://www.disneystore.com/sale-content/?cmp=OTL-Gocom_att_DropRollover_Sale_EFC280559&efc=280559&att=GocomM_HP_Feed_DSIMobileRedirect_t');
    }

    async clothesClick() {
        await this.shopBtn.moveTo();
        const clothesB = await $('a[class="VWQX UbGlr ibBnq bmjsw Xsujv lJgFA kpgVi utGN OwSIu oazfU McMna ubPuV pdYhu RBrva subItem"]');
        const fontWeight15 = await clothesB.getCSSProperty('font-weight');
        expect(fontWeight15.value).toBe(700);
        
        await this.clothesBtn.click();
        const allHandles = await browser.getWindowHandles();
        await browser.switchToWindow(allHandles[allHandles.length - 1]);
        await expect(await browser.getUrl()).toBe('https://www.disneystore.com/clothing/?cmp=OTL-Gocom_att_DropRollover_Clothes_EFC280559&efc=280559&att=GocomM_HP_Feed_DSIMobileRedirect_t');
    }

    async accessoriesClick() {
        await this.shopBtn.moveTo();
        const accessoriesB = await $('a[class="VWQX UbGlr ibBnq bmjsw Xsujv lJgFA kpgVi utGN OwSIu oazfU McMna ubPuV pdYhu RBrva subItem"]');
        const fontWeight16 = await accessoriesB.getCSSProperty('font-weight');
        expect(fontWeight16.value).toBe(700);
        
        await this.accessoriesBtn.click();
        const allHandles = await browser.getWindowHandles();
        await browser.switchToWindow(allHandles[allHandles.length - 1]);
        await expect(await browser.getUrl()).toBe('https://www.disneystore.com/accessories/?cmp=OTL-Gocom_att_DropRollover_Accessories_EFC280559&efc=280559&att=GocomM_HP_Feed_DSIMobileRedirect_t');
    }

    async toysClick() {
        await this.shopBtn.moveTo();
        const toysB = await $('a[class="VWQX UbGlr ibBnq bmjsw Xsujv lJgFA kpgVi utGN OwSIu oazfU McMna ubPuV pdYhu RBrva subItem"]');
        const fontWeight17 = await toysB.getCSSProperty('font-weight');
        expect(fontWeight17.value).toBe(700);
        
        await this.toysBtn.click();
        const allHandles = await browser.getWindowHandles();
        await browser.switchToWindow(allHandles[allHandles.length - 1]);
        await expect(await browser.getUrl()).toBe('https://www.disneystore.com/toys-plush/toys/?cmp=OTL-Gocom_att_DropRollover_Toys_EFC280559&efc=280559&cmp=OTL-Gocom&att=GocomM_HP_Feed_DSIMobileRedirect_t');
    }

    async moreClick () {
        await this.moreBtn.moveTo();
        const moreB = await $('button[data-testid="matterhorn-navigation-item-4"]');
        const fontWeight18 = await moreB.getCSSProperty('font-weight');
        expect(fontWeight18.value).toBe(700);

        const more = $('button[class="VZTD HNQqj fXQuq ibBnq UbGlr vsXdd KDIsc GYmxK OwSIu lwPSj PUdKg LBBrO ubOdK TaAzQ FfVOu zGMUT left"]');
        const currentUrl = await browser.getUrl();
        await expect(more).not.toBeClickable();
        const newUrl = await browser.getUrl();
        await expect(newUrl).toBe(currentUrl);
    }x

    async newsClick() {
        await this.moreBtn.moveTo();
        await expect(this.newsLink).toHaveAttribute('href', 'http://news.disney.com/');

        await this.moreBtn.moveTo();
        const newsB = await $('//a[@href="http://news.disney.com/"]');
        const fontWeight19 = await newsB.getCSSProperty('font-weight');
        expect(fontWeight19.value).toBe(700);
    }

    async d23Click() {
        await this.moreBtn.moveTo();
        await expect(this.d23Btn).toHaveAttribute('href', 'https://d23.com/')

        const d23B = await $('//a[@href="https://d23.com/"]');
        const fontWeight20 = await d23B.getCSSProperty('font-weight');
        expect(fontWeight20.value).toBe(700);
    }

    async showsClick() {
        await this.moreBtn.moveTo();
        await expect(this.showsBtn).toHaveAttribute('href', 'https://liveshows.disney.com/')

        const showsB = await $('a[class="VWQX UbGlr ibBnq bmjsw Xsujv lJgFA kpgVi utGN OwSIu oazfU McMna ubPuV pdYhu RBrva subItem"]');
        const fontWeight21 = await showsB.getCSSProperty('font-weight');
        expect(fontWeight21.value).toBe(700);
    }
}

export default new disneymenu();