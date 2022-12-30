const caesarCipher = require('./caesarCipher');

// test to see if cipher works

test('abc to bcd', () => {
  expect(caesarCipher('abc')).toBe('bcd');
});

// test capital letters

test('CapitaLIZEd to dbqjubmjafe', () => {
  expect(caesarCipher('CapitaLIZEd')).toBe('dbqjubmjafe');
});

// test numbers

test('123abc to 123bcd', () => {
  expect(caesarCipher('123abc')).toBe('123bcd');
});

// test spaces

test('check cipher to joljr jpwoly', () => {
  expect(caesarCipher('check cipher')).toBe('difdl djqifs');
});
