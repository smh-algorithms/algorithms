// https://programmers.co.kr/learn/courses/30/lessons/12952

// 테스트 1 〉	통과 (0.15ms, 30.3MB)
// 테스트 2 〉	통과 (0.18ms, 30MB)
// 테스트 3 〉	통과 (0.19ms, 30MB)
// 테스트 4 〉	통과 (0.32ms, 30.1MB)
// 테스트 5 〉	통과 (0.65ms, 30MB)
// 테스트 6 〉	통과 (2.67ms, 32.9MB)
// 테스트 7 〉	통과 (9.57ms, 33.3MB)
// 테스트 8 〉	통과 (23.06ms, 33.3MB)
// 테스트 9 〉	통과 (67.10ms, 33.1MB)
// 테스트 10 〉	통과 (363.98ms, 33.3MB)
// 테스트 11 〉	통과 (2111.25ms, 33.2MB)
function solution(n) {
  let count = 0;
  const board = [...new Array(n)].map(() => new Array(n).fill(false));

  // 주어진 랭크(row), 파일(column)에 해당하는 좌표가 다른 퀸의 공격권이 아닌지 확인
  const isUnderAttack = (rank, file) => {
    // 이전 랭크를 탐색해서
    for (let i = 0; i < rank; i += 1) {
      const currentRank = board[i];
      // (모든 퀸은 서로 다른 랭크에 존재)
      // 같은 파일에 퀸이 존재
      if (currentRank[file]) return true;
      // 같은 대각선에 퀸이 존재
      const deltaRank = rank - i;
      if (currentRank[file + deltaRank] || currentRank[file - deltaRank]) return true;
    }
    // 공격권에 퀸이 존재하지 않음
    return false;
  };

  // 퀸을 서로 공격하지 않도록 배치하는 방법을 탐색
  const backtrack = rank => {
    if (rank === n) {
      count += 1;
      return;
    }

    for (let file = 0; file < n; file += 1) {
      if (isUnderAttack(rank, file)) continue;
      board[rank][file] = true;
      backtrack(rank + 1);
      board[rank][file] = false;
    }
  };

  // 첫 번째 랭크(row)에 퀸을 배치
  for (let file = 0; file < n; file += 1) {
    board[0][file] = true;
    backtrack(1);
    board[0][file] = false;
  }

  return count;
}

describe('n-queen', () => {
  test.each`
    input | output
    ${1}  | ${1}
    ${2}  | ${0}
    ${3}  | ${0}
    ${4}  | ${2}
    ${5}  | ${10}
    ${6}  | ${4}
    ${7}  | ${40}
    ${8}  | ${92}
    ${9}  | ${352}
    ${10} | ${724}
    ${11} | ${2680}
    ${12} | ${14200}
  `('returns $output from $input', ({ input, output }) => {
    expect(solution(input)).toBe(output);
  });
});
