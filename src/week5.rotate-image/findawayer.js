// https://leetcode.com/problems/rotate-image/
// Runtime: 80 ms, faster than 58.16% of JavaScript online submissions for Rotate Image.
// Memory Usage: 39.5 MB, less than 16.27% of JavaScript online submissions for Rotate Image.

const rotate = matrix => {
  const { length } = matrix;

  if (length === 1) return matrix;

  for (let row = 0, rstop = length / 2; row < rstop; row += 1) {
    for (let col = row, cstop = length - col - 1; col < cstop; col += 1) {
      let $row = row;
      let $col = col;
      let previous = matrix[row][col];
      let temp;

      do {
        [$row, $col] = [$col, length - 1 - $row];
        temp = matrix[$row][$col];
        matrix[$row][$col] = previous;
        previous = temp;
      } while (row !== $row || col !== $col);
    }
  }

  return matrix;
};

describe('rotate-image', () => {
  test.each`
    input                                                              | output
    ${[[1]]}                                                           | ${[[1]]}
    ${[[1, 2], [3, 4]]}                                                | ${[[3, 1], [4, 2]]}
    ${[[1, 2, 3], [4, 5, 6], [7, 8, 9]]}                               | ${[[7, 4, 1], [8, 5, 2], [9, 6, 3]]}
    ${[[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]} | ${[[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]}
  `('returns $output from $input', ({ input, output }) => {
    expect(rotate(input)).toEqual(output);
  });
});
