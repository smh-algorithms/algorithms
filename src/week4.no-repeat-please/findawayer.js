// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/no-repeats-please

function permAlone(str) {
  const REPETING_PATTERN = /(.)\1+/;
  const { length } = str;

  const dfs = (substr = '', seen = {}) => {
    if (substr.length === length) return !REPETING_PATTERN.test(substr);

    let count = 0;

    for (let i = 0; i < length; i += 1) {
      if (seen[i]) continue;
      seen[i] = true;
      count += dfs(substr + str[i], seen);
      seen[i] = false;
    }

    return count;
  };

  return dfs();
}

describe('no-repeat-please', () => {
  test.each`
    input         | output
    ${'aab'}      | ${2}
    ${'aaa'}      | ${0}
    ${'aabb'}     | ${8}
    ${'abcdefa'}  | ${3600}
    ${'abfdefa'}  | ${2640}
    ${'zzzzzzzz'} | ${0}
    ${'a'}        | ${1}
    ${'aaab'}     | ${0}
    ${'aaabb'}    | ${12}
  `('returns $output from $input', ({ input, output }) => {
    expect(permAlone(input)).toBe(output);
  });
});
