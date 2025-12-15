import { $, browser, expect } from '@wdio/globals'
import Page from './page.js';

class characters extends Page {
    get lightMq () {
        return $('(//button[@aria-label="Lightning McQueen"])[2]');
    }

    get mater () {
        return $('(//button[@aria-label="Mater"])[2]');
    }

    get sally () {
        return $('(//button[@aria-label="Sally"])[2]');
    }

    get docHudson () {
        return $('(//button[@aria-label="Doc Hudson"])[2]');
    }

    get guido () {
        return $('(//button[@aria-label="Guido"])[2]');
    }

    get luigi () {
        return $('(//button[@aria-label="Luigi"])[2]');
    }

    get sarge () {
        return $('(//button[@aria-label="Sarge"])[2]');
    }

    get fillmore () {
        return $('(//button[@aria-label="Fillmore"])[2]');
    }

    get flo () {
        return $('(//button[@aria-label="Flo"])[2]');
    }

    get ramone () {
        return $('(//button[@aria-label="Ramone"])[2]');
    }



async lightMqClick () {
        await this.lightMq.click();
        const ltmMqSelector = await $('p[id="selectedItem-0"]');
        await expect(ltmMqSelector).toHaveText(expect.stringContaining('Lightning McQueen, #95, is a hotshot rookie race car who loves going faster than fast. When he’s not racing, he spends his time in Radiator Springs with his best pal, Mater.'));
    }

    async materClick () {
        await this.mater.click();
        const materSelector = await $('p[id="selectedItem-1"]');
        await expect(materSelector).toHaveText(expect.stringContaining('Mater is the rustiest, trustiest tow truck in Radiator Springs. He loves tractor tippin’, helping out stranded cars, and most of all, hanging out with his best friend, Lightning McQueen. Mater is great at driving backwards, because he doesn’t need to know where he’s going as long as he knows where he’s been.'));
    }

    async sallyClick () {
        await this.sally.click();
    }

    async docClick () {
        await this.docHudson.click();
    }

    async guidoClick () {
        await this.guido.click();
    }

    async luigiClick () {
        await this.luigi.click();
    }

    async sargeClick () {
        await this.sarge.click();
    }

    async fillmoreClick () {
        await this.fillmore.click();
    }

    async floClick () {
        await this.flo.click();
    }

    async ramoneClick () {
        await this.ramone.click();
    }
}

export default new characters();
