// https://leetcode.com/problems/most-profit-assigning-work/

// Runtime: 120 ms, faster than 89.47% of JavaScript online submissions for Most Profit Assigning Work.
// Memory Usage: 46.2 MB, less than 65.79% of JavaScript online submissions for Most Profit Assigning Work.

const maxProfitAssignment = (difficulty, profit, worker) => {
  // [[difficulty, profit], ...] 난이도 오름차순 정렬
  const table = difficulty.map((d, i) => [d, profit[i]]).sort(([a], [z]) => a - z);
  // [...worker] 능력 오름차순 정렬
  let i = 0;
  let max = 0;
  return worker
    .sort((a, z) => a - z)
    .reduce((res, w) => {
      // 탐욕법: 각 멤버의 능력으로 해결할 수 있는 최고 난이도까지 탐색
      while (table[i] && w >= table[i][0]) {
        // max: 효율이 가장 좋은 일
        max = Math.max(max, table[i][1]);
        i += 1;
      }
      return res + max;
    }, 0);
};

describe('most-profit-assigning-work', () => {
  test.each`
    difficulty          | profit                  | worker          | output
    ${[2, 4, 6, 8, 10]} | ${[10, 20, 30, 40, 50]} | ${[4, 5, 6, 7]} | ${100}
    ${[85, 47, 57]}     | ${[24, 66, 99]}         | ${[40, 25, 25]} | ${0}
  `('returns $output', ({ difficulty, profit, worker, output }) => {
    expect(solution(difficulty, profit, worker)).toBe(output);
  });
});
