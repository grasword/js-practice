/**
 * It deletes the given property of the given object
 * and returns the new object.
 * The function must not modify the original object!
 *
 * @param {object} obj the object
 * @param {string} key the name of the property to delete
 * @returns {object} the new object without the given property
 */
module.exports = function del(obj, key) {
  // PLACE YOUR CODE BETWEEN THIS...
  if (typeof obj !== 'object') {
    throw Error('[Error] Please, provide an object as a parameter');
  }
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;

  // ...AND THIS COMMENT LINE!
};
