import { $, browser, expect } from '@wdio/globals'
import opensite from './page.js'; 

class characters extends opensite {
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
        const ltMqSelector2 = await $('img[class="hsDdd BPJf beVFj dOZvi BmZon MTjhY zqmMu Gwosx "]');
        await expect(ltMqSelector2).toBeDisplayed();
    }

    async materClick () {
        await this.mater.click();
        const materSelector = await $('p[id="selectedItem-1"]');
        await expect(materSelector).toHaveText(expect.stringContaining('Mater is the rustiest, trustiest tow truck in Radiator Springs. He loves tractor tippin’, helping out stranded cars, and most of all, hanging out with his best friend, Lightning McQueen. Mater is great at driving backwards, because he doesn’t need to know where he’s going as long as he knows where he’s been.'));
        const materSelector2 = await $('img[class="hsDdd BPJf beVFj dOZvi BmZon MTjhY zqmMu Gwosx "]');
        await expect(materSelector2).toBeDisplayed();
    }

    async sallyClick () {
        await this.sally.click();
        const sallySelector = await $('p[id="selectedItem-2"]');
        await expect(sallySelector).toHaveText(expect.stringContaining('Sally is a beautiful baby blue Porsche who fell in love with small town life in Radiator Springs. She runs the Cozy Cone, is the town attorney, and is dedicated to preserving her favorite place to live. She loves cruisin’ in the slow lane with Lightning McQueen.'));
        const sallySelector2 = await $('img[class="hsDdd BPJf beVFj dOZvi BmZon MTjhY zqmMu Gwosx "]');
        await expect(sallySelector2).toBeDisplayed();
    }

    async docHudsonClick () {
        await this.docHudson.click();
        const docHudsonSelector = await $('p[id="selectedItem-3"]');
        await expect(docHudsonSelector).toHaveText(expect.stringContaining('Doc is the wise, quiet country doctor who run Radiator Springs’ medical clinic. Before Doc slowed down in Radiator Springs, he was the Fabulous Hudson Hornet. Now he uses his knowledge of racing to teach hotshots like Lightning to race smart, not just fast.'));
        const docHudsonSelector2 = await $('img[class="hsDdd BPJf beVFj dOZvi BmZon MTjhY zqmMu Gwosx "]');
        await expect(docHudsonSelector2).toBeDisplayed();
    }

    async guidoClick () {
        await this.guido.click();
        const guidoSelector = await $('p[id="selectedItem-4"]');
        await expect(guidoSelector).toHaveText(expect.stringContaining('Guido is a little Italian forklift and Luigi’s assistant and best buddy--you’ll hardly ever see the two pals apart. Like Luigi, Guido is an avid Ferrari racing fan who dreams of performing a real pit stop on a real Ferrari.'));
        const guidoSelector2 = await $('img[class="hsDdd BPJf beVFj dOZvi BmZon MTjhY zqmMu Gwosx "]');
        await expect(guidoSelector2).toBeDisplayed();
    }

    async luigiClick () {
        await this.luigi.click();
        const luigiSelector = await $('p[id="selectedItem-5"]');
        await expect(luigiSelector).toHaveText(expect.stringContaining('Luigi is a 1959 Fiat 500 who runs the local tire shop, Luigi’s Casa Della Tires, “Home of the Leaning Tower of Tires.” He loves changing tires for racecars like Lightning McQueen, but nothing makes him happier than when a real Ferrari comes through his door.'));
        const luigiSelector2 = await $('img[class="hsDdd BPJf beVFj dOZvi BmZon MTjhY zqmMu Gwosx "]');
        await expect(luigiSelector2).toBeDisplayed();
    }

    async sargeClick () {
        await this.sarge.click();
        const sargeSelector = await $('p[id="selectedItem-6"]');
        await expect(sargeSelector).toHaveText(expect.stringContaining('Sarge, a 1942 WW2 Willy’s Army Jeep is the most patriotic resident of Radiator Springs. He runs the local army surplus store, Sarge’s Surplus Hut, and always starts the day with a rendition of Reveille.'));
        const sargeSelector2 = await $('img[class="hsDdd BPJf beVFj dOZvi BmZon MTjhY zqmMu Gwosx "]');
        await expect(sargeSelector2).toBeDisplayed();
    }

    async fillmoreClick () {
        await this.fillmore.click();
        const fillmoreSelector = await $('p[id="selectedItem-7"]');
        await expect(fillmoreSelector).toHaveText(expect.stringContaining('Fillmore is a 1960 VW Bus, and naturally, also Radiator Springs’ resident Hippie and clean fuel aficionado. He brews his own organic fuel in his tie-dyed, geometric dome, and his unkempt yard tends to bug his veteran army jeep neighbor, Sarge.'));
        const fillmoreSelector2 = await $('img[class="hsDdd BPJf beVFj dOZvi BmZon MTjhY zqmMu Gwosx "]');
        await expect(fillmoreSelector2).toBeDisplayed();
    }

    async floClick () {
        await this.flo.click();
        const floSelector = await $('p[id="selectedItem-8"]');
        await expect(floSelector).toHaveText(expect.stringContaining('Flo is a sassy, no-nonsense 1950’s show car who enjoys traveling cross-country. She now runs the local diner, Flo’s V-8 Cafe, and the only gas station for miles around.'));
        const floSelector2 = await $('img[class="hsDdd BPJf beVFj dOZvi BmZon MTjhY zqmMu Gwosx "]');
        await expect(floSelector2).toBeDisplayed();
    }

    async ramoneClick () {
        await this.ramone.click();
        const ramoneSelector = await $('p[id="selectedItem-9"]');
        await expect(ramoneSelector).toHaveText(expect.stringContaining('Ramone is a 1951 Impala low-rider who loves riding “low and slow.” He runs Ramone’s House of Body Art, the local custom body and paint shop. A true artist, but without many customers to paint, Ramone changes his own paint job every day.'));
        const ramoneSelector2 = await $('img[class="hsDdd BPJf beVFj dOZvi BmZon MTjhY zqmMu Gwosx "]');
        await expect(ramoneSelector2).toBeDisplayed();
    }
}

export default new characters();