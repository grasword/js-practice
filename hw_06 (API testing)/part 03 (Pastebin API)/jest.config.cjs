const {defaults} = require('jest-config');

module.exports = {
    verbose: true,
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx', 'mjs'],
    testMatch: ['<rootDir>/tests/**/*.test.mjs']
};
