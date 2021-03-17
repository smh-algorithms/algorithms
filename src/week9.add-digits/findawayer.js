// https://leetcode.com/problems/add-digits/

// Runtime: 100 ms, faster than 61.39% of JavaScript online submissions for Add Digits.
// Memory Usage: 40.2 MB, less than 53.47% of JavaScript online submissions for Add Digits.

const addDigits = num => num && (num % 9 || 9);

describe('add-digits', () => {
  test.each`
    num    | output
    ${38}  | ${2}
    ${0}   | ${0}
    ${54}  | ${9}
    ${74}  | ${2}
    ${789} | ${6}
  `('returns $output from $num', ({ num, output }) => {
    expect(addDigits(num)).toBe(output);
  });
});
