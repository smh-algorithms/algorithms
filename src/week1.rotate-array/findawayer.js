// https://leetcode.com/problems/rotate-array/

// Runtime: 108 ms, faster than 54.04% of JavaScript online submissions for Rotate Array.
// Memory Usage: 39.6 MB, less than 77.36% of JavaScript online submissions for Rotate Array.
function naive(array, times) {
  while (times) {
    array.unshift(array.pop());
    times -= 1;
  }
  return array;
}

describe('rotate-array', () => {
  test.each`
    array                    | times | output
    ${[1, 2, 3, 4, 5, 6, 7]} | ${3}  | ${[5, 6, 7, 1, 2, 3, 4]}
  `('returns $output from $array with $times', ({ array, times, output }) => {
    expect(naive(array, times)).toEqual(output);
  });
});

// Runtime: 80 ms, faster than 96.85% of JavaScript online submissions for Rotate Array.
// Memory Usage: 39.6 MB, less than 77.45% of JavaScript online submissions for Rotate Array.
function cyclic(array, times) {
  const { length } = array;

  // 빈 배열 or 회전한 결과가 현재 배열의 구성과 동일
  if (!length || !(times % length)) {
    return array;
  }

  let i = 0; // 루프 시작점
  let j; // 현재 원소의 인덱스
  let k = 0; // 변경된 원소의 갯수
  let previous;
  let temp;

  // 모든 원소를 times만큼 쉬프트
  while (k < length) {
    j = i;
    previous = array[j];

    do {
      j = (j + times) % length;
      temp = array[j];
      array[j] = previous;
      previous = temp;
      k += 1;
    } while (j !== i);

    i += 1;
  }
  return array;
}

describe('rotate-array with cyclic replacement', () => {
  test.each`
    array                    | times | output
    ${[1, 2, 3, 4, 5, 6, 7]} | ${3}  | ${[5, 6, 7, 1, 2, 3, 4]}
    ${[-1, -100, 3, 99]}     | ${2}  | ${[3, 99, -1, -100]}
  `('returns $output from $array with $times', ({ array, times, output }) => {
    expect(cyclic(array, times)).toEqual(output);
  });
});
