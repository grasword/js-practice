const { expect } = require('chai');
const del = require('../src/delete');

describe('Delete', () => {
  it('should handle if not object is passed', () => {
    expect(() => {
      return del(1);
    }).to.throw('[Error] Please, provide an object as a parameter');
  });

  it('should delete property', () => {
    const o = { a: 12, b: 23 };
    const newO = del(o, 'a');
    expect(newO.a).to.be.undefined;
  });

  it('should not modify original object', () => {
    const o = { a: 12, b: 23 };
    const newO = del(o, 'a');
    expect(o.a).to.equal(12);
    expect(o).not.to.equal(newO);
  });
});
