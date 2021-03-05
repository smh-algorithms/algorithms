// https://www.codewars.com/kata/5541f58a944b85ce6d00006a

function productFib(product) {
  let [a, b] = [0, 1];
  let ab = a * b;
  do {
    if (product <= ab) return [a, b, ab === product];
    [a, b] = [b, a + b];
    ab = a * b;
  } while (ab < Number.MAX_SAFE_INTEGER);
}

describe('product-of-consecutive-fib-numbers', () => {
  test.each`
    input  | output
    ${714} | ${[21, 34, true]}
    ${800} | ${[34, 55, false]}
  `('returns $output from $input', ({ input, output }) => {
    expect(productFib(input)).toEqual(output);
  });
});
