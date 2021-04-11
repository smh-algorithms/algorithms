// https://leetcode.com/problems/number-of-1-bits/

// Runtime: 80 ms, faster than 97.20% of JavaScript online submissions for Number of 1 Bits.
// Memory Usage: 39.8 MB, less than 80.45% of JavaScript online submissions for Number of 1 Bits.

const hammingWeight = n => {
  let count = 0;
  while (n) {
    if (n & 1) count += 1;
    n >>>= 1;
  }
  return count;
};

describe('number-of-1-bits', () => {
  test.each`
    n                                     | output
    ${0b00000000000000000000000000001011} | ${3}
    ${0b00000000000000000000000010000000} | ${1}
    ${0b11111111111111111111111111111101} | ${31}
  `('returns $output from $n', ({ n, output }) => {
    expect(hammingWeight(n)).toBe(output);
  });
});
