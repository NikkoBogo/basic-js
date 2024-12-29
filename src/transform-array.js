const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr = 'empty') {
  if (arr === null) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  } else if (arr.length === 0) {
    return [];
  } else if (arr === 'empty' || typeof (arr) !== 'object' || Array.isArray(arr) !== true) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  } 
  let newArray = arr.slice();
  if (newArray.includes('--double-next') === false && newArray.includes('--double-prev') === false && newArray.includes('--discard-next') === false && newArray.includes('--discard-prev') === false) {
    return newArray;
  } else if (newArray.at(-1) === '--double-next'|| newArray.at(-1) === '--discard-next') {
    newArray.splice(-1);
    return newArray;
  } else if (newArray[0] === '--discard-prev' || newArray[0] === '--double-prev') {
    newArray.splice(0, 1);
    return newArray;
  }
  let result;
  for (let i = 0; i < newArray.length; i += 1) {
    if (newArray[i] === '--double-next') {
      newArray.splice(i, 1, newArray[i + 1]);
      i = 0;
      result = newArray;
    } else if (newArray[i] === '--discard-prev') {
      newArray.splice(i - 1, 2, ' ');
      i = 0;
      result = newArray;
    } else if (newArray[i] === '--double-prev') {
      newArray.splice(i, 1, newArray[i - 1]);
      i = 0;
      result = newArray;
    } else if (newArray[i] === '--discard-next') {
      newArray.splice(i, 2, ' ');
      i = 0;
      result = newArray;
    }
  }
  if (result.includes(' ') === true) {
    for (let x = 0; x < result.length; x += 1) {
      if (result[x] === ' ') {
        result.splice(x, 1);
        x = 0;
      }
    }
  }
  return result;
}

module.exports = {
  transform
};
