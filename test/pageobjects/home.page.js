import { $ } from '@wdio/globals'
import Page from './page.js';

class HomePage extends Page {
    disney () {
        return super.disney('');
    }
}

export default new HomePage();