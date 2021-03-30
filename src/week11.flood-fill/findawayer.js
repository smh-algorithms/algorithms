// https://leetcode.com/problems/flood-fill/

// Runtime: 100 ms, faster than 47.88% of JavaScript online submissions for Flood Fill.
// Memory Usage: 40.9 MB, less than 80.77% of JavaScript online submissions for Flood Fill.

const floodFill = (image, startRow, startCol, newColor) => {
  const stack = [[startRow, startCol]];
  const color = image[startRow][startCol];
  const maxRow = image.length - 1;
  const maxCol = image[0].length - 1;

  while (stack[0]) {
    const [row, col] = stack.pop();
    image[row][col] = newColor;
    if (row && isValid(image[row - 1][col], color, newColor)) stack.push([row - 1, col]);
    if (row < maxRow && isValid(image[row + 1][col], color, newColor)) stack.push([row + 1, col]);
    if (col && isValid(image[row][col - 1], color, newColor)) stack.push([row, col - 1]);
    if (col < maxCol && isValid(image[row][col + 1], color, newColor)) stack.push([row, col + 1]);
  }

  return image;
};

// target color is connected AND not visited yet.
function isValid(color, targetColor, newColor) {
  return color === targetColor && color !== newColor;
}

describe('flood-fill', () => {
  it('should flood fill color of the image', () => {
    const image = [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ];
    const sr = 1;
    const sc = 1;
    const newColor = 2;
    const output = [
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1],
    ];
    expect(floodFill(image, sr, sc, newColor)).toEqual(output);
  });
});
