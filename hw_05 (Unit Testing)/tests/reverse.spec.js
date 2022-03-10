const { expect } = require('chai');
const reverse = require('../src/reverse');

describe('Reverse', () => {
  it('should handle if not object is passed', () => {
    expect(() => {
      return reverse(1);
    }).to.throw('[Error] Please, provide an object as a parameter');
  });

  it('should reverse object', () => {
    const o = { a: 12, b: 23 };
    const newO = reverse(o);
    expect(newO).to.eql({ 12: 'a', 23: 'b' });
  });

  it('should handle duplicate', () => {
    const o = { a: 12, b: 23, c: 12 };
    const newO = reverse(o);
    expect(newO).to.eql({ 12: 'c', 23: 'b' });
  });

  it('should not modify original object', () => {
    const o = { a: 12, b: 23 };
    const newO = reverse(o);
    expect(newO).not.to.be.equal(o);
  });
});
