function sort(array) {
  let { length } = array;

  // 정렬이 필요없는 짧은 배열
  if (length < 2) return array;

  mergeSort(array, new Array(length), 0, length - 1);

  return array;
}

function mergeSort(array, sorted, start, end) {
  if (end <= start) return;
  const middle = Math.floor((start + end) / 2);
  // console.log(`start ${start}, middle ${middle}, end ${end}`);
  // 부분배열로 분할
  mergeSort(array, sorted, start, middle);
  mergeSort(array, sorted, middle + 1, end);
  // 분할된 부분배열을 병합
  merge(array, sorted, start, middle, end);
  // console.log(array)
}

function merge(array, sorted, start, middle, end) {
  let left = start;
  let right = middle + 1;
  let index = start;

  // 2개 부분배열의 원소들을 비교해 순서대로 합병
  while (left <= middle && right <= end) {
    if (array[left] <= array[right]) {
      sorted[index] = array[left];
      left += 1;
    } else {
      sorted[index] = array[right];
      right += 1;
    }
    index += 1;
  }

  // 한쪽 부분배열의 원소가 1개 더 많을 경우, 남은 원소를 배열의 끝에 복사
  while (left <= middle) {
    sorted[index] = array[left];
    left += 1;
    index += 1;
  }
  while (right <= end) {
    sorted[index] = array[right];
    right += 1;
    index += 1;
  }

  // 정렬된 배열을 최초 배열에 복사
  while (start <= end) {
    array[start] = sorted[start];
    start += 1;
  }

  return sorted;
}

describe('sorting-merge-sort', () => {
  test.each`
    input                                      | output
    ${[6, 5, 3, 1, 4, 8]}                      | ${[1, 3, 4, 5, 6, 8]}
    ${[-2, 45, 0, 11, -9]}                     | ${[-9, -2, 0, 11, 45]}
    ${[10, 5, 2, 7, 4, 9, 12, 1, 8, 6, 11, 3]} | ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
  `('returns $output from $input', ({ input, output }) => {
    expect(sort(input)).toEqual(output);
  });
});
