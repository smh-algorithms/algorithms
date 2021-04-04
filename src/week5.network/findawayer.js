// https://programmers.co.kr/learn/courses/30/lessons/43162

// 테스트 1 〉	통과 (0.08ms, 30.1MB)
// 테스트 2 〉	통과 (0.11ms, 30MB)
// 테스트 3 〉	통과 (0.14ms, 30MB)
// 테스트 4 〉	통과 (0.14ms, 30MB)
// 테스트 5 〉	통과 (0.09ms, 30MB)
// 테스트 6 〉	통과 (0.25ms, 29.8MB)
// 테스트 7 〉	통과 (0.11ms, 30.1MB)
// 테스트 8 〉	통과 (0.22ms, 30.1MB)
// 테스트 9 〉	통과 (0.19ms, 29.9MB)
// 테스트 10 〉	통과 (0.18ms, 29.9MB)
// 테스트 11 〉	통과 (0.57ms, 30MB)
// 테스트 12 〉	통과 (0.56ms, 30.2MB)
// 테스트 13 〉	통과 (0.33ms, 30MB)

function solution(n, computers) {
  let count = 0;
  const visited = {};

  const dfs = node => {
    visited[node] = true;
    // 방문하지 않은 컴퓨터와 네트워크를 갖고 있다면 재귀하면서 방문한 것으로 마킹
    for (let i = 0; i < n; i += 1) if (!visited[i] && computers[node][i]) dfs(i);
    // 네트워크 갯수를 증가
    return 1;
  };

  // 각 컴퓨터를 순회하면서 DFS 실행
  for (let i = 0; i < n; i += 1) if (!visited[i]) count += dfs(i);

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
