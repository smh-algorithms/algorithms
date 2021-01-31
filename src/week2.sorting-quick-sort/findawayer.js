function sort(array) {
  let { length } = array;

  // 정렬이 필요없는 짧은 배열
  if (length < 2) return array;
  // 재귀하면서 퀵정렬
  quickSort(array, 0, length - 1);

  return array;
}

function quickSort(array, start, end) {
  // 정렬할 원소가 없음
  if (start >= end) return;

  // 맨 마지막 원소를 피벗으로 부분정렬
  const pivot = partition(array, start, end);

  // 부분배열을 재정렬
  quickSort(array, start, pivot - 1);
  quickSort(array, pivot + 1, end);
}

function partition(array, start, end) {
  const pivot = array[end];

  let i = start;
  let j = end - 1;

  while (i <= j) {
    // 앞에서 시작해서 피벗보다 크거나 같은 숫자가 나올 때까지 스킵
    while (array[i] < pivot) {
      i += 1;
    }
    // 뒤에서 시작해서 피벗보다 크거나 작은 숫자가 나올 때까지 스킵
    while (array[j] > pivot) {
      j -= 1;
    }
    // 잘못 배치된 원소가 있다면 위치를 바꾸고 포인터를 각각 전진
    if (i < j) {
      swap(array, i, j);
      i += 1;
      j -= 1;
    }
  }

  // 맨 끝에 있던 피벗을 larger slice보다 앞으로 보냄
  if (i !== end) swap(array, i, end);

  return i;
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

describe('sorting-quick-sort', () => {
  test.each`
    input                                      | output
    ${[6, 5, 3, 1, 4, 8]}                      | ${[1, 3, 4, 5, 6, 8]}
    ${[-2, 45, 0, 11, -9]}                     | ${[-9, -2, 0, 11, 45]}
    ${[10, 5, 2, 7, 4, 9, 12, 1, 8, 6, 11, 3]} | ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
  `('returns $output from $input', ({ input, output }) => {
    expect(sort(input)).toEqual(output);
  });
});
