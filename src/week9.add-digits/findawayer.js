const addDigits = num => (num ? num % 9 || 9 : num);

describe('add-digits', () => {
  test.each`
    num    | output
    ${38}  | ${2}
    ${0}   | ${0}
    ${54}  | ${9}
    ${74}  | ${2}
    ${789} | ${6}
  `('returns $output from $num', ({ num, output }) => {
    expect(addDigits(num)).toBe(output);
  });
});
