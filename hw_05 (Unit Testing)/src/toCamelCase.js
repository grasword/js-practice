/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => simpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */
function toCamelCase(toConvert) {
  // PLACE YOUR CODE BETWEEN THIS...
  if (typeof toConvert !== 'string') {
    return '';
  }
  const regExp = /\w+|\n\w+|\t\w+/g;
  const words = toConvert.match(regExp);
  const lowerCaseWords = words.map((w) => {
    return w.toLowerCase();
  });
  const camelCaseWords = lowerCaseWords.map((w, i) => {
    return i === 0 ? w : w.charAt(0).toUpperCase() + w.slice(1);
  });
  return camelCaseWords.join('').replace(/[\s]+/g, '');
  // ...AND THIS COMMENT LINE!
}

module.exports = toCamelCase;
