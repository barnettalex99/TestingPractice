function average(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

function min(array) {
  let minVal = array[0];
  for (let i = 0; i < array.length; i++) {
    const potentialMin = array[i];
    if (potentialMin < minVal) {
      minVal = potentialMin;
    }
  }
  return minVal;
}

function max(array) {
  let maxVal = array[0];
  for (let i = 0; i < array.length; i++) {
    const potentialMax = array[i];
    if (potentialMax > maxVal) {
      maxVal = potentialMax;
    }
  }
  return maxVal;
}

function analyzeArray(array) {
  const analyzedArray = {
    average: average(array),
    min: min(array),
    max: max(array),
    length: array.length,
  };
  return analyzedArray;
}

module.exports = analyzeArray;
