import { $, browser, expect } from '@wdio/globals'
import opensite from './url.js'; 

class characters extends opensite {

    characterButton(characterName) {
        return $(`(//button[@aria-label="${characterName}"])[2]`);
    }

    get descriptionText() {
        return $('p[id^="selectedItem-"]'); 
    }

    get characterImg() {
        return $('//img[@class="hsDdd BPJf beVFj dOZvi BmZon MTjhY zqmMu Gwosx "]');
    }

    async selectAndVerifyCharacter(name, expectedDescription) {
        const charBtn = await this.characterButton(name);
        
        await charBtn.waitForClickable({ timeout: 5000 });
        await charBtn.click();

        await expect(this.descriptionText).toHaveText(
            expect.stringContaining(expectedDescription)
        );
        
        const img = await this.characterImg;
        
        await img.waitForExist({ timeout: 5000 });
        
        await expect(img).toBeDisplayed();

        const isImageLoaded = await browser.execute((el) => {
            return el.complete && typeof el.naturalWidth !== 'undefined' && el.naturalWidth > 0;
        }, img);

        if (!isImageLoaded) {
            throw new Error(`Image for ${name} is displayed but appears to be broken or empty.`);
        }
    }
}

export default new characters();