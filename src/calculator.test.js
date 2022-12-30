const calculator = require('./calculator');

// test add function

test('1+2 to 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

// test subtract function

test('3-2 to 1', () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

// test multiply function

test('3*2 to 6', () => {
  expect(calculator.multiply(3, 2)).toBe(6);
});

// test divide function

test('6/2 to 3', () => {
  expect(calculator.divide(6, 2)).toBe(3);
});
