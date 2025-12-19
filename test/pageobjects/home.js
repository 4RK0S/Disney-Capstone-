import { $ } from '@wdio/globals'
import Url from './url.js';

class Home extends Url {
    disney () {
        return super.disney('');
    }
}

export default new Home();