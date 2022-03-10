const { expect } = require('chai');
const toCamelCase = require('../src/toCamelCase');
const testData = require('../src/data/toCamelCase.json');

describe('To Camel Case', () => {
  it('should be a function', () => {
    expect(toCamelCase).to.be.instanceOf(Function);
  });

  testData.forEach((data) => {
    it(`should return proper value for ${JSON.stringify(data.argument)}`, () => {
      expect(toCamelCase(...data.argument)).to.equal(data.result);
    });
  });
});
