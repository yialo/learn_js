'use strict';

/**
 * @see {@link https://learn.javascript.ru/task/maximal-subarray}
 */

exports.getMaxSubSumSlow = (arr) => {
  if (arr.every(el => el < 0) ) {
    return 0;
  }

  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let subSum = 0;

    for (let j = i; j < arr.length; j++) {
      subSum += arr[j];
      maxSum = Math.max(maxSum, subSum);
    }
  }

  return maxSum;
};

exports.getMaxSubSumFast = (arr) => {};
