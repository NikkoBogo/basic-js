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
  } else if (arr.includes('--double-next') === false && arr.includes('--double-prev') === false && arr.includes('--discard-next') === false && arr.includes('--discard-prev') === false) {
    return arr;
  } else if (arr.at(-1) === '--double-next'|| arr.at(-1) === '--discard-next') {
    arr.splice(-1);
    return arr;
  } else if (arr[0] === '--discard-prev' || arr[0] === '--double-prev') {
    arr.splice(0, 1);
    return arr;
  }
  let result;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === '--double-next') {
      arr.splice(i, 1, arr[i + 1]);
      i = 0;
      result = arr;
    } else if (arr[i] === '--discard-prev') {
      arr.splice(i - 1, 2, ' ');
      i = 0;
      result = arr;
    } else if (arr[i] === '--double-prev') {
      arr.splice(i, 1, arr[i - 1]);
      i = 0;
      result = arr;
    } else if (arr[i] === '--discard-next') {
      arr.splice(i, 2, ' ');
      i = 0;
      result = arr;
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
