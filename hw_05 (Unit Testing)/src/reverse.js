/**
 * It reverses the given object, i.e. return a copy of the object
 * where the keys have become the values and the values the keys
 *
 * @param {object} obj the object
 * @returns {object} the new object
 */
const reverse = (object) => {
  if (typeof object !== 'object') {
    throw Error('[Error] Please, provide an object as a parameter');
  }
  const newObj = { ...object };
  return Object.entries(newObj).reduce((obj, entry) => {
    const [key, value] = entry;
    obj[value] = key;
    return obj;
  }, {});
};

module.exports = reverse;
