function perimeter(n) {
  let [a, b, s] = [1, 1, 1];
  while (n--) {
    [a, b] = [b, a + b];
    s += a;
  }
  return 4 * s;
}

describe('perimeter', () => {
  test.each`
    n    | output
    ${5} | ${80}
    ${7} | ${216}
  `('returns $output from $n', ({ n, output }) => {
    expect(perimeter(n)).toBe(output);
  });
});
