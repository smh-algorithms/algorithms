function rgb(...arg) {
  return arg
    .map(x => clamp(x, 0, 255).toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase();
}

function clamp(x, min, max) {
  if (x < min) return min;
  if (x > max) return max;
  return x;
}

describe('rgb-to-hex', () => {
  test.each`
    r      | g      | b      | hex
    ${255} | ${255} | ${255} | ${'FFFFFF'}
    ${255} | ${255} | ${300} | ${'FFFFFF'}
    ${0}   | ${0}   | ${0}   | ${'000000'}
    ${148} | ${0}   | ${211} | ${'9400D3'}
  `('returns $output from $input', ({ r, g, b, hex }) => {
    expect(rgb(r, g, b)).toBe(hex);
  });
});
