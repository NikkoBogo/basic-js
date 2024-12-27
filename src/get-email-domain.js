const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let preparedEmail = email.slice(email.indexOf('@') + 1);
  if (preparedEmail.includes('@') === true) {
    return preparedEmail.slice(preparedEmail.indexOf('@') + 1)
  }
  return preparedEmail;
}

module.exports = {
  getEmailDomain
};
