// https://programmers.co.kr/learn/courses/30/lessons/42884

// 정확성  테스트
// 테스트 1 〉	통과 (0.28ms, 30.2MB)
// 테스트 2 〉	통과 (0.36ms, 29.9MB)
// 테스트 3 〉	통과 (0.37ms, 29.9MB)
// 테스트 4 〉	통과 (0.43ms, 30MB)
// 테스트 5 〉	통과 (0.50ms, 30MB)
// 효율성  테스트
// 테스트 1 〉	통과 (56.35ms, 34.9MB)
// 테스트 2 〉	통과 (6.07ms, 34MB)
// 테스트 3 〉	통과 (8.55ms, 34MB)
// 테스트 4 〉	통과 (0.81ms, 30.1MB)
// 테스트 5 〉	통과 (8.95ms, 34.2MB)

function solution(routes) {
  const { length } = routes;
  let cameras = 1;

  if (length === 1) return cameras;

  routes.sort(([a1, a2], [z1, z2]) => (a1 === z1 ? a2 - z2 : a1 - z1));

  for (let i = 1, [[, p2]] = routes, c1, c2; i < length; i += 1) {
    [c1, c2] = routes[i];

    if (c1 > p2) {
      cameras += 1;
      p2 = c2;
    } else if (c2 < p2) {
      p2 = c2;
    }
  }

  return cameras;
}

describe('speed-cameras', () => {
  test.each`
    input                                           | output
    ${[[-20, 15], [-14, -5], [-18, -13], [-5, -3]]} | ${2}
  `('returns $output from $input', ({ input, output }) => {
    expect(solution(input)).toBe(output);
  });
});
