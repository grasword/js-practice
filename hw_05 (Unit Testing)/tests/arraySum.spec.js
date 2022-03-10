const { expect } = require('chai');
const arraySum = require('../src/arraySum');
const testData = require('../src/data/arraySum.json');

describe('Array Sum', () => {
  it('should be a function', () => {
    expect(arraySum).to.be.instanceOf(Function);
  });

  testData.forEach((data) => {
    it(`should return proper value for ${JSON.stringify(data.arguments)}`, () => {
      expect(arraySum(...data.arguments)).to.equal(data.result);
    });
  });
});
