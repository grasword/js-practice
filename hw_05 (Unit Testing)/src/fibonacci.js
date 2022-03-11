/**
 * The function returns the nth value of
 * the Fibonacci sequence
 *
 * @param {number} n (n >= 0)
 * @returns {number} Fibonacci number or 0 if any arguments are not proper
 */

function fibonacci(num, m) {
  /*
   * Your task is to calculate the nth value of the
   * Fibonacci sequence.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   * Store the value in the nThFibonacci variable.
   * Also take into consideration the documentation of the function!
   */
  // PLACE YOUR CODE BETWEEN THIS...
  const memo = m || {};

  if (num < 0) {
    return 0;
  }
  if (memo[num]) {
    return memo[num];
  }
  if (num <= 1) {
    return num;
  }

  const nThFibonacci = (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo));
  // ...AND THIS COMMENT LINE!
  return nThFibonacci;
}

module.exports = fibonacci;
