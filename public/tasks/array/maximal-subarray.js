'use strict';

/**
 * @see {@link https://learn.javascript.ru/task/maximal-subarray}
 */

const getArraySum = (arr) => arr.reduce((acc, it) => acc + it);

exports.getMaxSubSumSlow = (arr) => {
  if (arr.every(el => el < 0) ) {
    return 0;
  }

  const subArrs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      const subArr = arr.slice(i, j);
      subArrs.push(subArr);
    }
  }

  let maxSum = 0;

  for (let i = 0; i < subArrs.length; i++) {
    const nextSum = getArraySum(subArrs[i]);
    maxSum = Math.max(maxSum, nextSum);
  }

  return maxSum;
};

exports.getMaxSubSumFast = (arr) => {};
