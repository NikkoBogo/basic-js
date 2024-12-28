const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date = 'empty') {
  if (date === 'empty') {
    return 'Unable to determine the time of year!';
  } else if (typeof (date).valueOf() !== 'number' && typeof (date) !== 'object' || typeof (date).valueOf() === 'object' && typeof (date) === 'object' || typeof (date).valueOf() === 'number' && typeof (date) !== 'object') {
    return "Invalid date!";
  }
  let dateMonth = date.toUTCString().split(' ')[2];
  if (dateMonth === 'Dec' || dateMonth === 'Jan' || dateMonth === 'Feb') {
    return 'winter';
  } else if (dateMonth === 'Mar' || dateMonth === 'Apr' || dateMonth === 'May') {
    return 'spring';
  } else if (dateMonth === 'Jun' || dateMonth === 'Jul' || dateMonth === 'Aug') {
    return 'summer';
  } else if (dateMonth === 'Sep' || dateMonth === 'Oct' || dateMonth === 'Nov') {
    return 'autumn';
  }
}

module.exports = {
  getSeason
};
