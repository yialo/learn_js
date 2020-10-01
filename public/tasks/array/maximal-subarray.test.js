'use strict';

const { getMaxSubSum } = require('./maximal-subarray');

describe('getMaxSubSum', () => {
  test.each([
    [[-1, 2, 3, -9], [2, 3], 5],
    [[2, -1, 2, 3, -9], [2, -1, 2, 3], 6],
    [[-1, 2, 3, -9, 11], [11], 11],
    [[-2, -1, 1, 2], [1, 2], 3],
    [[100, -9, 2, -3, 5], [100], 100],
    [[1, 2, 3], [1, 2, 3], 6],
    [[-1, -2, -3], [], 0],
  ])('should just work', (arr, _subArr, expectedSum) => {
    const result = getMaxSubSum(arr);
    expect(result).toBe(expectedSum);
  });
});
