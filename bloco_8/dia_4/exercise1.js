const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(arrayOfArrays) {
  return arrayOfArrays.reduce((acc, nextArray) => acc.concat(nextArray), []);
}

assert.deepStrictEqual(flatten(arrays), ['1', '2', '3', true, 4, 5, 6]);