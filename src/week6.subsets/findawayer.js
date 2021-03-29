// https://leetcode.com/problems/subsets/

// Runtime: 80 ms, faster than 84.50% of JavaScript online submissions for Subsets.
// Memory Usage: 40.5 MB, less than 44.65% of JavaScript online submissions for Subsets.

const subsets = nums => {
  const { length } = nums;
  const result = [];

  const dfs = (array, subarray, start) => {
    result.push(subarray);
    for (let i = start; i < length; i++) dfs(array, [...subarray, array[i]], i + 1);
  };

  dfs(nums, [], 0);

  return result;
};

describe('subsets', () => {
  test.each`
    nums         | output
    ${[1, 2, 3]} | ${[[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]}
    ${[0]}       | ${[[], [0]]}
  `('returns $output from $nums', ({ nums, output }) => {
    expect(subsets(nums)).toIncludeAllMembers(output);
  });
});
