function sort(array) {
  let { length } = array;

  // 정렬이 필요없는 짧은 배열
  if (length < 2) return array;

  let i = 1;
  let j;

  while (i < length) {
    j = i;

    // 계속해 앞의 원소와 비교해 더 작다면 스왑
    while (j && array[j] < array[j - 1]) {
      swap(j, j - 1);
      j -= 1;
    }

    i += 1;
  }

  return array;
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

describe('sorting-insertion-sort', () => {
  test.each`
    input                                      | output
    ${[6, 5, 3, 1, 4, 8]}                      | ${[1, 3, 4, 5, 6, 8]}
    ${[-2, 45, 0, 11, -9]}                     | ${[-9, -2, 0, 11, 45]}
    ${[10, 5, 2, 7, 4, 9, 12, 1, 8, 6, 11, 3]} | ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
  `('returns $output from $input', ({ input, output }) => {
    expect(sort(input)).toEqual(output);
  });
});
