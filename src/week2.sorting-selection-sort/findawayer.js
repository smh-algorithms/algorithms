function sort(array) {
  let { length } = array;

  // 정렬이 필요없는 짧은 배열
  if (length < 2) return array;

  let i = 0;
  let j;
  let minIndex;
  let minValue;

  // 마지막 남은 원소는 가장 크므로 length -1 까지만 루프
  while (i < length - 1) {
    j = i;
    minIndex = i;
    minValue = array[i];

    // 최소값과 그 인덱스를 찾음
    while (j < length) {
      if (array[j] < minValue) {
        minIndex = j;
        minValue = array[j];
      }
      j += 1;
    }
    // 최소값을 인덱스 i 위치와 스왑
    if (minIndex !== i) {
      swap(array, i, minIndex);
    }

    i += 1;
  }

  return array;
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

describe('sorting-selection-sort', () => {
  test.each`
    input                                      | output
    ${[6, 5, 3, 1, 4, 8]}                      | ${[1, 3, 4, 5, 6, 8]}
    ${[-2, 45, 0, 11, -9]}                     | ${[-9, -2, 0, 11, 45]}
    ${[10, 5, 2, 7, 4, 9, 12, 1, 8, 6, 11, 3]} | ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
  `('returns $output from $input', ({ input, output }) => {
    expect(sort(input)).toEqual(output);
  });
});
