const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let result = 0;
  let newArray = matrix.join(',').split(',');
  for (let i = 0; i < newArray.length; i += 1) {
    if (newArray[i] === '^^') {
      result += 1;
    }
    result += 0;
  }
  return result > 0 ? result : false;
}

module.exports = {
  countCats
};
