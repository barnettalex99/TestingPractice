const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const cipher = 'bcdefghijklmnopqrstuvwxyza';

function toCipher(char) {
  if (cipher.includes(char)) {
    const index = alphabet.indexOf(char);
    return cipher[index];
  }
  return char;
}

function caesarCipher(string) {
  if (typeof string !== 'string') {
    return 'not a string';
  }
  let newString = '';
  const lowerString = string.toLowerCase();
  for (let i = 0; i < lowerString.length; i++) {
    newString += `${toCipher(lowerString[i])}`;
  }
  return newString;
}

module.exports = caesarCipher;
