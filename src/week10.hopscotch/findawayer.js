// https://programmers.co.kr/learn/courses/30/lessons/12913

function solution(land, sum = 0, row = 0, lastCol) {
  if (row === land.length) return sum;
  let maxSum = 0;
  for (let col = 0; col < 4; col += 1) {
    if (col === lastCol) continue;
    const currentSum = solution(land, sum + land[row][col], row + 1, col);
    if (currentSum > maxSum) maxSum = currentSum;
  }
  return maxSum;
}

describe('hopscotch', () => {
  test.each`
    land                                          | output
    ${[[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]]} | ${16}
  `('returns $output from $land', ({ land, output }) => {
    expect(solution(land)).toBe(output);
  });
});
