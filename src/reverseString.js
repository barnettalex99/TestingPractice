function reverseString(string) {
  let newString = [];
  for (let i = 0; i <= string.length; i++) {
    newString[i] = string.charAt(string.length - 1 - i);
  }
  return newString.join('');
}

module.exports = reverseString;
