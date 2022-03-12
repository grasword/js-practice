/**
 * It recieves an array of strings, integers and array like itself.
 * Return the summary of all integers in it on * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */
function arraySum(elements) {
  // PLACE YOUR CODE BETWEEN THIS...
  if (!Array.isArray(elements)) {
    return 0;
  }
  const toNumber = (num) => {
    return typeof num === 'number' ? num : 0;
  };
  const flatten = elements.flat(Infinity);
  return flatten.reduce((sum, num) => {
    return sum + toNumber(num);
  }, 0);
  // ...AND THIS COMMENT LINE!
}

module.exports = arraySum;
