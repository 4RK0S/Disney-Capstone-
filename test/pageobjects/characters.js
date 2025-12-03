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
    }

    async materClick () {
        await this.mater.click();
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
