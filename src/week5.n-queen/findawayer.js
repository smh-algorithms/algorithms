// https://programmers.co.kr/learn/courses/30/lessons/12952

// 테스트 1 〉	통과 (0.17ms, 30.2MB)
// 테스트 2 〉	통과 (0.17ms, 30.3MB)
// 테스트 3 〉	통과 (0.13ms, 30.1MB)
// 테스트 4 〉	통과 (0.29ms, 30MB)
// 테스트 5 〉	통과 (0.66ms, 30.1MB)
// 테스트 6 〉	통과 (2.85ms, 32.9MB)
// 테스트 7 〉	통과 (10.09ms, 33.3MB)
// 테스트 8 〉	통과 (21.46ms, 33.1MB)
// 테스트 9 〉	통과 (63.79ms, 33.4MB)
// 테스트 10 〉	통과 (355.82ms, 33.2MB)
// 테스트 11 〉	통과 (2229.50ms, 33.1MB)
function solution(n) {
  const board = [...new Array(n)].map(() => new Array(n).fill(false));

  // 주어진 랭크(row)와 파일(column)에 해당하는 칸이 다른 퀸의 공격권인지 확인
  const isUnderAttack = (rank, file) => {
    // (모든 퀸은 서로 다른 랭크에 존재)
    for (let i = 0; i < rank; i += 1) {
      const currentRank = board[i];
      // 같은 파일에 퀸이 존재
      if (currentRank[file]) return true;
      // 같은 대각선에 퀸이 존재
      const deltaRank = rank - i;
      if (currentRank[file + deltaRank] || currentRank[file - deltaRank]) return true;
    }
    return false;
  };

  // 퀸을 각 랭크에 하나씩 배치하면서, 서로를 공격하지 않도록
  // 4파일을 모두 배치하는 경우의 수를 백트래킹
  const backtrack = rank => {
    if (rank === n) return 1;

    let count = 0;

    for (let file = 0; file < n; file += 1) {
      if (isUnderAttack(rank, file)) continue;
      board[rank][file] = true;
      count += backtrack(rank + 1);
      board[rank][file] = false;
    }

    return count;
  };

  return backtrack(0);
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
