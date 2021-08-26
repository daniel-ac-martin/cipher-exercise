'use strict';

const startCode = 'a'.charCodeAt(0);

const charToInt = char => char.charCodeAt(0) - startCode;
const intToChar = int => String.fromCharCode(int + startCode);

module.exports = {
  charToInt,
  intToChar
};
