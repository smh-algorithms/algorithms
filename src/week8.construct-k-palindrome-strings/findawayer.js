// Runtime: 112 ms, faster than 79.59% of JavaScript online submissions for Construct K Palindrome Strings.
// Memory Usage: 43 MB, less than 57.14% of JavaScript online submissions for Construct K Palindrome Strings.

const canConstruct = (s, k) => {
  const { length } = s;

  if (length === k) return true;
  if (length < k) return false;

  const chars = {};
  for (let i = 0, char = s[i]; i < length; char = s[++i]) {
    chars[char] = chars[char] + 1 || 1;
  }

  let odds = 0;
  for (const char in chars) {
    if (chars[char] & 1) odds += 1;
    if (odds > k) return false;
  }

  return true;
};

describe('construct-k-palindrome-strings', () => {
  test.each`
    s                    | k    | output
    ${'annabelle'}       | ${2} | ${true}
    ${'leetcode'}        | ${3} | ${false}
    ${'true'}            | ${4} | ${true}
    ${'yzyzyzyzyzyzyzy'} | ${2} | ${true}
    ${'cr'}              | ${7} | ${false}
  `('returns $output if $s can be use to contruct $k palindrome strings', ({ s, k, output }) => {
    expect(canConstruct(s, k)).toBe(output);
  });
});
