// https://leetcode.com/problems/decode-string/

// Runtime: 76 ms, faster than 74.63% of JavaScript online submissions for Decode String.
// Memory Usage: 38.3 MB, less than 86.73% of JavaScript online submissions for Decode String.

const decodeString = s => {
  const BRACKET_CLOSE = ']';
  const NUMBERS = '0123456789';
  const { length } = s;
  let i = 0;

  const decode = str => {
    let decoded = '';

    // 문자열을 이루는 모든 글자를 탐색
    while (i < length) {
      const char = str[i];

      // 숫자
      if (~NUMBERS.indexOf(char)) {
        // 이어지는 숫자를 모두 선택
        let times = char;
        while (~NUMBERS.indexOf(str[++i])) times += str[i];
        // 숫자 다음에 오는 여는 괄호 스킵
        i += 1;
        // 반복된 서브문자열을 재귀해서 탐색
        decoded += decode(str).repeat(times);
      }
      // 닫는 괄호
      else if (char === BRACKET_CLOSE) return decoded;
      // 알파벳
      else decoded += char;

      i += 1;
    }

    return decoded;
  };

  return decode(s);
};

describe('decode-string', () => {
  test.each`
    input              | output
    ${'3[a]2[bc]'}     | ${'aaabcbc'}
    ${'3[a2[c]]'}      | ${'accaccacc'}
    ${'2[abc]3[cd]ef'} | ${'abcabccdcdcdef'}
    ${'abc3[cd]xyz'}   | ${'abccdcdcdxyz'}
  `('returns $output from $input', ({ input, output }) => {
    expect(decodeString(input)).toBe(output);
  });
});
