import { browser } from '@wdio/globals'
export default class Url {
    disney (path) {
        return browser.url(`https://cars.disney.com/${path}`)
    }
}