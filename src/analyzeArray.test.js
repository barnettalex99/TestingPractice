const analyzeArray = require('./analyzeArray');
const trialArray1 = [1, 2, 3, 4, 5];
const trialObject1 = analyzeArray(trialArray1);

// test average

test('12345 to 3', () => {
  expect(trialObject1.average).toBe(3);
});

// test min

test('12345 to 1', () => {
  expect(trialObject1.min).toBe(1);
});

// test max

test('12345 to 5', () => {
  expect(trialObject1.max).toBe(5);
});

// test length

test('12345 to 5', () => {
  expect(trialObject1.length).toBe(5);
});
