/**
 * It returns the property names of the given object.
 *
 * @param {object} obj the object
 * @returns {string[]} the list of the properties of the object or empty array if it is not an object
 */
const properties = (obj) => {
  if (typeof obj !== 'object') {
    return [];
  }
  const arrOfProp = [];
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      arrOfProp.push(prop);
    }
  }
  return arrOfProp;
};

module.exports = properties;
