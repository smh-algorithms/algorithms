// Runtime: 72 ms, faster than 93.87% of JavaScript online submissions for Hamming Distance.
// Memory Usage: 38.9 MB, less than 16.00% of JavaScript online submissions for Hamming Distance.

function hammingDistance(x, y) {
  let d = x ^ y;
  let c = 0;
  while (d) {
    c += d & 1;
    d >>= 1;
  }
  return c;
}

describe('hamming-distance', () => {
  test.each`
    x    | y    | output
    ${1} | ${4} | ${2}
    ${3} | ${1} | ${1}
    ${9} | ${6} | ${4}
  `('returns $output from $x and $y', ({ x, y, output }) => {
    expect(hammingDistance(x, y)).toBe(output);
  });
});
