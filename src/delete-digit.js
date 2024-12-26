const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result;
  let sortArray = [];
  let array = n.toString().split('');
  for (let i = 0; i < array.length; i += 1) {
    array = n.toString().split('');
    delete array[i];
    sortArray.push(+array.join(''));
  }
  return Math.max.apply(null, sortArray);
}

module.exports = {
  deleteDigit
};
