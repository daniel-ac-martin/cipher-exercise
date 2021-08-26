'use strict';

const { charToInt, intToChar } = require('./helpers');

const N = 26; // Might be useful

const shiftChar = char => (
  intToChar(
    charToInt(char) + 0 // Broken!
  )
);

const encrypt = message => (
  message
    .split('')
    .map(shiftChar)
    .join('')
);

const decrypt = message => 'IMPLEMENT ME'; // Broken!

module.exports = {
  decrypt,
  encrypt
};
