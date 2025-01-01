const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  encrypt(str = "empty", key = "empty") {
    if (
      str === "empty" ||
      key === "empty" ||
      str === undefined ||
      key === undefined
    ) {
      throw new Error("Incorrect arguments!");
    }
    let arrKey = key.split("");
    let newKey = "";
    let result = "";
    let resultLength = str.length >= key.length ? str.length : key.length;
    let reversedStr = "";
    for (let x = 0; x < resultLength; x += 1) {
      if (
        str.toUpperCase().charCodeAt(x) > 90 ||
        str.toUpperCase().charCodeAt(x) < 65
      ) {
        newKey = newKey + str[x];
        arrKey.splice(x, 0, " ");
      } else {
        arrKey.push(arrKey[x]);
        newKey += arrKey[x];
      }
    }
    for (let i = 0; i < str.length; i += 1) {
      if (
        str.toUpperCase().charCodeAt(i) > 90 ||
        str.toUpperCase().charCodeAt(i) < 65
      ) {
        result += str[i];
      } else {
        result += String.fromCharCode(
          ((str.toUpperCase().charCodeAt(i) +
            newKey.toUpperCase().charCodeAt(i)) %
            26) +
            65
        );
      }
    }
    return result;
  }
  decrypt(str = "empty", key = "empty") {
    if (
      str === "empty" ||
      key === "empty" ||
      str === undefined ||
      key === undefined
    ) {
      throw new Error("Incorrect arguments!");
    }
    let arrKey = key.split("");
    let newKey = "";
    let result = "";
    let resultLength = str.length >= key.length ? str.length : key.length;
    for (let x = 0; x < resultLength; x += 1) {
      if (
        str.toUpperCase().charCodeAt(x) > 90 ||
        str.toUpperCase().charCodeAt(x) < 65
      ) {
        newKey = newKey + str[x];
        arrKey.splice(x, 0, " ");
      } else {
        arrKey.push(arrKey[x]);
        newKey += arrKey[x];
      }
    }
    for (let i = 0; i < str.length; i += 1) {
      if (
        str.toUpperCase().charCodeAt(i) > 90 ||
        str.toUpperCase().charCodeAt(i) < 65
      ) {
        result += str[i];
      } else {
        result += String.fromCharCode(
          ((26 +
            (str.toUpperCase().charCodeAt(i) -
              newKey.toUpperCase().charCodeAt(i))) %
            26) +
            65
        );
      }
    }
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
