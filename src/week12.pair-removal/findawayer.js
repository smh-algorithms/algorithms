// https://programmers.co.kr/learn/courses/30/lessons/12973

// 정확성  테스트
// 테스트 1 〉	통과 (0.07ms, 30MB)
// 테스트 2 〉	통과 (9.97ms, 35.1MB)
// 테스트 3 〉	통과 (6.77ms, 35.7MB)
// 테스트 4 〉	통과 (7.79ms, 36.2MB)
// 테스트 5 〉	통과 (7.26ms, 35.7MB)
// 테스트 6 〉	통과 (9.54ms, 35.9MB)
// 테스트 7 〉	통과 (7.42ms, 36.2MB)
// 테스트 8 〉	통과 (9.25ms, 35.9MB)
// 테스트 9 〉	통과 (0.06ms, 30MB)
// 테스트 10 〉	통과 (0.10ms, 30.1MB)
// 테스트 11 〉	통과 (0.07ms, 29.9MB)
// 테스트 12 〉	통과 (0.08ms, 30.3MB)
// 테스트 13 〉	통과 (0.07ms, 30.2MB)
// 효율성  테스트
// 테스트 1 〉	통과 (43.78ms, 53.7MB)
// 테스트 2 〉	통과 (56.54ms, 36.9MB)
// 테스트 3 〉	통과 (42.59ms, 46.5MB)
// 테스트 4 〉	통과 (31.98ms, 46.5MB)
// 테스트 5 〉	통과 (36.19ms, 46.4MB)
// 테스트 6 〉	통과 (34.64ms, 46.4MB)
// 테스트 7 〉	통과 (34.03ms, 46.6MB)
// 테스트 8 〉	통과 (36.48ms, 53.4MB)

function solution(s) {
  const stack = [];

  for (const char of s)
    if (stack[stack.length - 1] === char) stack.pop();
    else stack.push(char);

  return stack.length ? 0 : 1;
}

describe('pair-removal', () => {
  test.each`
    s           | output
    ${'baabaa'} | ${1}
    ${'cdcd'}   | ${0}
  `('returns $output from $s', ({ s, output }) => {
    expect(solution(s)).toBe(output);
  });
});
