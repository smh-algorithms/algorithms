// https://leetcode.com/problems/reverse-bits/

// Runtime: 92 ms, faster than 73.40% of JavaScript online submissions for Reverse Bits.
// Memory Usage: 41 MB, less than 13.54% of JavaScript online submissions for Reverse Bits.
const reverseBits = n => parseInt([...n.toString(2).padStart(32, '0')].reverse().join(''), 2);

describe('reverse-bits', () => {
  test.each`
    n             | output
    ${43261596}   | ${964176192}
    ${4294967293} | ${3221225471}
  `('returns $output from $n', ({ n, output }) => {
    expect(reverseBits(n)).toBe(output);
  });
});
