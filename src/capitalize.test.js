const capitalize = require('./capitalize');

test('test to Test', () => {
  expect(capitalize('test')).toBe('Test');
});

test('123 to 123', () => {
  expect(capitalize('123')).toBe('123');
});

test('TEST to TEST', () => {
  expect(capitalize('TEST')).toBe('TEST');
});
