// https://programmers.co.kr/learn/courses/30/lessons/43162

// 테스트 1 〉	통과 (0.12ms, 30.1MB)
// 테스트 2 〉	통과 (0.12ms, 30.2MB)
// 테스트 3 〉	통과 (0.15ms, 29.9MB)
// 테스트 4 〉	통과 (0.13ms, 30.1MB)
// 테스트 5 〉	통과 (0.07ms, 30.2MB)
// 테스트 6 〉	통과 (0.26ms, 30.1MB)
// 테스트 7 〉	통과 (0.11ms, 30.1MB)
// 테스트 8 〉	통과 (0.22ms, 30MB)
// 테스트 9 〉	통과 (0.19ms, 30.1MB)
// 테스트 10 〉	통과 (0.14ms, 29.9MB)
// 테스트 11 〉	통과 (0.68ms, 30.2MB)
// 테스트 12 〉	통과 (0.55ms, 30.2MB)
// 테스트 13 〉	통과 (0.34ms, 29.8MB)

function solution(n, computers) {
  let count = 0;
  const visited = {};

  const dfs = node => {
    visited[node] = true;
    for (let i = 0; i < n; i += 1) {
      if (!visited[i] && computers[node][i]) dfs(i);
    }
  };

  for (let i = 0; i < n; i += 1) {
    if (!visited[i]) {
      dfs(i);
      count += 1;
    }
  }

  return count;
}

describe('network', () => {
  test.each`
    n    | computers                            | output
    ${3} | ${[[1, 1, 0], [1, 1, 0], [0, 0, 1]]} | ${2}
    ${3} | ${[[1, 1, 0], [1, 1, 1], [0, 1, 1]]} | ${1}
  `('returns $output from $input', ({ n, computers, output }) => {
    expect(solution(n, computers)).toBe(output);
  });
});
