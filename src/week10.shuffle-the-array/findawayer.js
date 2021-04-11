// https://leetcode.com/problems/shuffle-the-array/

// Runtime: 76 ms, faster than 98.99% of JavaScript online submissions for Shuffle the Array.
// Memory Usage: 40.8 MB, less than 27.78% of JavaScript online submissions for Shuffle the Array.

var shuffle = function (nums, n) {
  const output = new Array(n << 1);
  for (let i = 0; i < n; ++i) {
    output[i << 1] = nums[i];
    output[(i << 1) | 1] = nums[i + n];
  }
  return output;
};

describe('shuffle-the-array', () => {
  test.each`
    nums                  | n    | output
    ${[2, 5, 1, 3, 4, 7]} | ${3} | ${[2, 3, 5, 4, 1, 7]}
  `('returns $output from $nums and $n', ({ nums, n, output }) => {
    expect(shuffle(nums, n)).toEqual(output);
  });
});
