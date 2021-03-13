// Runtime: 112 ms, faster than 79.59% of JavaScript online submissions for Construct K Palindrome Strings.
// Memory Usage: 43 MB, less than 57.14% of JavaScript online submissions for Construct K Palindrome Strings.

const canConstruct = (s, k) => {
  const { length } = s;

  if (length === k) return true;
  if (length < k) return false;

  // 문자열 `s`가 포함하는 글자의 출현 횟수를 해시맵으로 저장
  const chars = {};
  for (let i = 0, char = s[i]; i < length; char = s[++i]) {
    chars[char] = chars[char] + 1 || 1;
  }

  // 홀수 횟수만큼 나타난 글자가 K와 같거나 작아야
  // 모든 글자를 이용해 팰린드롬을 K만큼 생성 가능
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
