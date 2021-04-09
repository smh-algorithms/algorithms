// https://leetcode.com/problems/flipping-an-image/

// Runtime: 84 ms, faster than 77.43% of JavaScript online submissions for Flipping an Image.
// Memory Usage: 40.2 MB, less than 76.95% of JavaScript online submissions for Flipping an Image.

function flipAndInvertImage(image) {
  return image.map(row => row.reverse().map(x => (x ? 0 : 1)));
}

describe('flipping-an-image', () => {
  test.each`
    image                                                       | output
    ${[[1, 1, 0], [1, 0, 1], [0, 0, 0]]}                        | ${[[1, 0, 0], [0, 1, 0], [1, 1, 1]]}
    ${[[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]} | ${[[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0]]}
  `('returns $output from $image', ({ image, output }) => {
    expect(flipAndInvertImage(image)).toEqual(output);
  });
});
