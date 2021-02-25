// https://leetcode.com/problems/minimum-window-substring/

// Runtime: 96 ms, faster than 92.41% of JavaScript online submissions for Minimum Window Substring.
// Memory Usage: 41.4 MB, less than 70.61% of JavaScript online submissions for Minimum Window Substring.

const minWindow = (s, t) => {
  const { length: sLength } = s;
  const { length: tLength } = t;

  // 문자열과 검색하려는 문자열이 일치할 경우 문자열을 그대로 반환
  if (sLength === tLength && s === t) return s;

  // 부분 문자열의 시작과 끝을 가리키는 2개의 포인터
  let start = 0;
  let end = 0;
  // 찾은 글자의 갯수
  let found = 0;
  // 조건을 만족하는 부분 문자열의 최대 길이
  let minLength = Infinity;
  // 조건을 만족하는 가장 짧은 부분 문자열 (기본값은 빈 문자열)
  let shortest = '';

  // 부분 문자열에 대상 글자들이 포함된 횟수를 카운트하는 해시맵
  const counter = {};
  for (const char of t) counter[char] = counter[char] - 1 || -1;
  const cLength = Object.keys(counter).length;

  // 포인터를 옮겨가면서
  while (start < sLength) {
    // 검색 조건을 만족할 때까지 end 포인터를 뒤로 옮김
    if (found < cLength && end < sLength) {
      const char = s[end++];
      if (char in counter) {
        counter[char] += 1;
        if (counter[char] === 0) found += 1;
      }
    }
    // 검색 조건을 만족했거나, end 포인터를 더 이상 옮길 수 없다면
    // start 포인터를 검색 조건을 만족하지 못할 때까지 뒤로 옮김
    else {
      const char = s[start++];
      if (char in counter) {
        if (counter[char] === 0) found -= 1;
        counter[char] -= 1;
      }
    }
    // 조건을 만족하는 더 짧은 부분 문자열을 찾았다면 shortest에 업데이트
    if (found === cLength && end - start < minLength) {
      minLength = end - start;
      shortest = s.slice(start, end);
    }
  }

  return shortest;
};

describe('minimum-window-substring', () => {
  test.each`
    s                  | t        | output
    ${'ADOBECODEBANC'} | ${'ABC'} | ${'BANC'}
    ${'a'}             | ${'a'}   | ${'a'}
    ${'abc'}           | ${'ac'}  | ${'abc'}
    ${'bbaa'}          | ${'aba'} | ${'baa'}
  `('returns $output from $input', ({ input, output }) => {
    expect(minWindow(input)).toBe(output);
  });
});
