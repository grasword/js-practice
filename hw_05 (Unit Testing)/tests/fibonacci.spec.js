const { expect } = require('chai');
const fibonacci = require('../src/fibonacci');

describe('Fibonacci', () => {
  it('should return a number', () => {
    expect(fibonacci(2)).to.be.a('number');
  });

  it('should return 0 if negative value passed', () => {
    expect(fibonacci(-2)).to.equal(0);
  });

  const values = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377];

  values.forEach((n, i) => {
    it(`should return ${n} for ${i + 1}`, () => {
      expect(fibonacci(i + 1)).to.equal(n);
    });
  });
});
