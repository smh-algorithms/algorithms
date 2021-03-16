// https://leetcode.com/problems/first-bad-version/

// Runtime: 76 ms, faster than 74.73% of JavaScript online submissions for First Bad Version.
// Memory Usage: 38 MB, less than 95.67% of JavaScript online submissions for First Bad Version.

var solution = function (isBadVersion) {
  return function (n) {
    let left = 1;
    let right = n;
    while (left <= right) {
      const middle = ((left + right) / 2) | 0;
      if (isBadVersion(middle)) right = middle - 1;
      else left = middle + 1;
    }
    return left;
  };
};

describe('first-bad-version', () => {
  test.each`
    n    | bad  | output
    ${5} | ${4} | ${4}
  `('returns $output from $n and $bad', ({ n, bad, output }) => {
    const isBadVersion = x => x >= bad;
    expect(solution(isBadVersion(n))).toBe(output);
  });
});
