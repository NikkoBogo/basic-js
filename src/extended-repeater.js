const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let substring = '';
  let result ='';
  if ('separator' in options === false && 'addition' in options === false && 'additionRepeatTimes' in options === false && 'additionSeparator' in options === false) {
    options.separator = '+';
    options.addition = '';
    options.additionRepeatTimes = '';
    options.additionSeparator = '';
  } else if ('separator' in options === true && 'addition' in options === false && 'additionRepeatTimes' in options === false && 'additionSeparator' in options === false) {
    options.addition = '';
    options.additionRepeatTimes = '';
    options.additionSeparator = '';
  } else if ('separator' in options === false && 'addition' in options === true && 'additionRepeatTimes' in options === false && 'additionSeparator' in options === false) {
    options.separator = '+';
    options.additionRepeatTimes = '';
    options.additionSeparator = '';
  } else if ('separator' in options === false && 'addition' in options === true && 'additionRepeatTimes' in options === true && 'additionSeparator' in options === false) {
    options.separator = '+';
    options.additionSeparator = '|';
  } else if ('separator' in options === false && 'addition' in options === true && 'additionRepeatTimes' in options === true && 'additionSeparator' in options === true) {
    options.separator = '+';
  } else if ('separator' in options === true && 'addition' in options === true && 'additionRepeatTimes' in options === true && 'additionSeparator' in options === false) {
    options.additionSeparator = '|';
  }
  for (let i = 1; i < options.additionRepeatTimes; i += 1) {
    substring = substring + options.addition + options.additionSeparator;
  }
  substring = str + substring + options.addition;
  for (let i = 1; i < options.repeatTimes; i += 1) {
    result = result + substring + options.separator;
  }
  result = result + substring;
  return result;
}

module.exports = {
  repeater
};
