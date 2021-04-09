// https://leetcode.com/problems/determine-color-of-a-chessboard-square/

// Runtime: 72 ms, faster than 95.50% of JavaScript online submissions for Determine Color of a Chessboard Square.
// Memory Usage: 39.1 MB, less than 10.50% of JavaScript online submissions for Determine Color of a Chessboard Square.

function squareIsWhite(coordinates) {
  const isOddFile = coordinates.charCodeAt(0) & 1;
  const isOddRank = coordinates.charCodeAt(1) & 1;
  return isOddFile !== isOddRank;
}

describe('color-of-chessboard-square', () => {
  test.each`
    coordinates | output
    ${'a1'}     | ${false}
    ${'h3'}     | ${true}
    ${'c7'}     | ${false}
    ${'h8'}     | ${false}
  `('returns $output from $coordinates', ({ coordinates, output }) => {
    expect(squareIsWhite(coordinates)).toBe(output);
  });
});
