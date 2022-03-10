/**
 * Create the Circle class.
 *
 * @typedef {object} Circle
 * @property {number} radius the radius of the circle
 * @function getArea return the area of the circle
 * @function getPerimeter return the perimeter of the circle
 */

class Circle {
  constructor(r) {
    this.r = r;
    if (this.r <= 0) {
      throw Error('[Error] Radius must be greater than 0');
    }
  }
  getArea() {
    return this.r * this.r * Math.PI;
  }
  getPerimeter() {
    return this.r * 2 * Math.PI;
  }
}

module.exports = Circle;
