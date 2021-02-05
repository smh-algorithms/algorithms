// https://leetcode.com/problems/reduce-array-size-to-the-half/
// Runtime: 148 ms, faster than 60.64% of JavaScript online submissions for Reduce Array Size to The Half.
// Memory Usage: 53.9 MB, less than 50.32% of JavaScript online submissions for Reduce Array Size to The Half.

function minSetSize(arr) {
  const { length } = arr;

  if (length < 1) return length;

  // 배열 안에서 각 원소가 중복된 횟수를 맵의 형태로 저장.
  const sizes = {};
  for (const key of arr) sizes[key] = sizes[key] + 1 || 1;
  // 중복이 많은 순서대로 원소를 정렬
  const sortedKeys = Object.keys(sizes).sort((a, z) => sizes[z] - sizes[a]);

  // 배열 안에 남은 원소가 절반 이하가 될 때까지, 중복이 많은 원소부터 소거
  const halfLength = length / 2;
  let sum = 0;
  let i = 0;

  while (sum < halfLength) {
    sum += sizes[sortedKeys[i]];
    i += 1;
  }

  // 제거한 원소의 가짓수가 정답
  return i;
}

describe('reduce-array-to-the-half', () => {
  test.each`
    input                              | output
    ${[3, 3, 3, 3, 5, 5, 5, 2, 2, 7]}  | ${2}
    ${[7, 7, 7, 7, 7, 7]}              | ${1}
    ${[1, 9]}                          | ${1}
    ${[1000, 1000, 3, 7]}              | ${1}
    ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} | ${5}
  `('returns $output from $input', ({ input, output }) => {
    expect(minSetSize(input)).toBe(output);
  });
});
