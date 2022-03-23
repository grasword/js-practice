'use strict';

import * as fs from 'fs';
import * as path from 'path';

const TOKENS_DIR = 'data/tokens/';

class TokenProvider {

    static getToken(fileName) {
        let token = '';
        const filePath = path.join(TOKENS_DIR, fileName);
        try {
            token = fs.readFileSync(filePath, 'utf8');
        } catch (e) {
            console.log(e.stack);
        }
        return token;
    }
}

export default TokenProvider;
