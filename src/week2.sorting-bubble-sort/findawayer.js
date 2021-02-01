function sort(array) {
  let { length } = array;

  // 정렬이 필요없는 짧은 배열
  if (length < 2) return array;

  let i;
  let unsorted;

  // 원소 스왑을 필요로 하지 않을 때까지 계속해서 루프
  do {
    unsorted = false;
    i = 1;

    while (i < length) {
      // 두 개의 원소를 비교해 크기 순서에 맞춰 스왑
      if (array[i - 1] > array[i]) {
        swap(array, i, i - 1);
        unsorted = true;
      }
      i += 1;
    }

    // 위 과정에 의해 마지막 원소는 최대값을 가진 원소이므로
    // 다음 루프에서는 마지막 원소를 검사하지 않음
    length -= 1;
  } while (unsorted);

  return array;
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

describe('sorting-bubble-sort', () => {
  test.each`
    input                                      | output
    ${[6, 5, 3, 1, 4, 8]}                      | ${[1, 3, 4, 5, 6, 8]}
    ${[-2, 45, 0, 11, -9]}                     | ${[-9, -2, 0, 11, 45]}
    ${[10, 5, 2, 7, 4, 9, 12, 1, 8, 6, 11, 3]} | ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
  `('returns $output from $input', ({ input, output }) => {
    expect(sort(input)).toEqual(output);
  });
});
