const reverseString = require('./reverseString');

// tests even strings
test('test to Test', () => {
  expect(reverseString('test')).toBe('tset');
});

// tests odd strings
test('abc to cba', () => {
  expect(reverseString('abc')).toBe('cba');
});

// tests numbers

test('123 to 321', () => {
  expect(reverseString('123')).toBe('321');
});

// tests capital letters

test('Abc to cbA', () => {
  expect(reverseString('Abc')).toBe('cbA');
});

test('what about spaces to secaps tuoba tahw', () => {
  expect(reverseString('what about spaces')).toBe('secaps tuoba tahw');
});
