import { expect, browser } from '@wdio/globals'
import home from '../pageobjects/home.js'
import CharactersPage from '../pageobjects/characters.js'
import characters from '../pageobjects/characters.js';

describe('Disney characters components test', () => {

    beforeEach(async () => {
        await home.disney();
    });

    it('should validate multiple characters info and images', async () => {
        const testData = [
            {
            name: 'Lightning McQueen',
            description: 'Lightning McQueen, #95, is a hotshot rookie race car who loves going faster than fast.'
        },
        {
            name: 'Mater',
            description: 'Mater is the rustiest, trustiest tow truck in Radiator Springs. He loves tractor tippin’, helping out stranded cars, and most of all, hanging out with his best friend, Lightning McQueen. Mater is great at driving backwards, because he doesn’t need to know where he’s going as long as he knows where he’s been.'
        },
        {
            name: 'Sally',
            description: 'Sally is a beautiful baby blue Porsche who fell in love with small town life in Radiator Springs.'
        },
        {
            name: 'Doc Hudson',
            description: 'Doc is the wise, quiet country doctor who run Radiator Springs’ medical clinic.'
        },
        {
            name: 'Guido',
            description: 'Guido is a little Italian forklift and Luigi’s assistant and best buddy'
        },
        {
            name: 'Luigi',
            description: 'Luigi is a 1959 Fiat 500 who runs the local tire shop'
        },
        {
            name: 'Sarge',
            description: 'Sarge, a 1942 WW2 Willy’s Army Jeep is the most patriotic resident of Radiator Springs.'
        },
        {
            name: 'Fillmore',
            description: 'Fillmore is a 1960 VW Bus, and naturally, also Radiator Springs’ resident Hippie'
        },
        {
            name: 'Flo',
            description: 'Flo is a sassy, no-nonsense 1950’s show car who enjoys traveling cross-country.'
        },
        {
            name: 'Ramone',
            description: 'Ramone is a 1951 Impala low-rider who loves riding “low and slow.”'
        }
        ];
        for (const data of testData) {
            await characters.selectAndVerifyCharacter(data.name, data.description);
        }
    });
});