const { expect } = require('chai');
const Circle = require('../src/circle');

describe('Circle', () => {
  it('should store radius', () => {
    const circle = new Circle(12);
    expect(circle.r).to.equal(12);
  });

  it('should handle invalid radius', () => {
    expect(() => {
      return new Circle(-2);
    }).to.throw('[Error] Radius must be greater than 0');
  });

  it('should calculate perimeter', () => {
    const circle = new Circle(42);
    expect(circle.getPerimeter()).to.equal(2 * 42 * Math.PI);
  });

  it('should calculate ares', () => {
    const circle = new Circle(42);
    expect(circle.getArea()).to.equal(42 * 42 * Math.PI);
  });
});
