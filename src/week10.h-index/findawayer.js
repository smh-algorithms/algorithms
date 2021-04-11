// https://programmers.co.kr/learn/courses/30/lessons/42747

// 테스트 1 〉	통과 (0.33ms, 30.1MB)
// 테스트 2 〉	통과 (0.52ms, 30MB)
// 테스트 3 〉	통과 (0.45ms, 30MB)
// 테스트 4 〉	통과 (0.40ms, 30.3MB)
// 테스트 5 〉	통과 (0.28ms, 30.1MB)
// 테스트 6 〉	통과 (0.55ms, 30.1MB)
// 테스트 7 〉	통과 (0.23ms, 30.1MB)
// 테스트 8 〉	통과 (0.09ms, 30.2MB)
// 테스트 9 〉	통과 (0.12ms, 30.2MB)
// 테스트 10 〉	통과 (0.27ms, 30.1MB)
// 테스트 11 〉	통과 (0.61ms, 30.1MB)
// 테스트 12 〉	통과 (0.09ms, 30.2MB)
// 테스트 13 〉	통과 (0.54ms, 30.1MB)
// 테스트 14 〉	통과 (0.51ms, 30MB)
// 테스트 15 〉	통과 (0.53ms, 30.2MB)
// 테스트 16 〉	통과 (0.07ms, 30.1MB)

function solution(citations) {
  const { length } = citations.sort((a, z) => z - a);
  let i = 0;
  while (i < length && i < citations[i]) i += 1;
  return i;
}

describe('h-index', () => {
  test.each`
    citations                      | output
    ${[3, 0, 6, 1, 5]}             | ${3}
    ${[0, 2, 4, 6, 6, 6, 8, 8, 9]} | ${6}
    ${[0, 0]}                      | ${0}
  `('returns $output from $citations', ({ citations, output }) => {
    expect(solution(citations)).toBe(output);
  });
});
