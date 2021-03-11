// https://programmers.co.kr/learn/courses/30/lessons/68645

// 테스트 1 〉	통과 (0.08ms, 30.2MB)
// 테스트 2 〉	통과 (0.08ms, 30.1MB)
// 테스트 3 〉	통과 (0.08ms, 30MB)
// 테스트 4 〉	통과 (0.65ms, 33.1MB)
// 테스트 5 〉	통과 (0.69ms, 33.1MB)
// 테스트 6 〉	통과 (0.69ms, 33.4MB)
// 테스트 7 〉	통과 (29.36ms, 84MB)
// 테스트 8 〉	통과 (20.87ms, 84.4MB)
// 테스트 9 〉	통과 (10.33ms, 84.3MB)

function solution(n) {
  const length = (n * (n + 1)) / 2;
  const array = new Array(length);
  let [node, i, h] = [1, 0, 0]; // node, index, height

  while (node <= length) {
    // go down
    while (i + h < length && !array[i + h]) {
      i += h++;
      array[i] = node++;
    }
    // go right
    while (i + 1 < length && !array[i + 1]) {
      array[++i] = node++;
    }
    // go up
    while (i > h && !array[i - h]) {
      i -= h--;
      array[i] = node++;
    }
  }

  return array;
}

describe('triangle-snail', () => {
  test.each`
    n    | output
    ${4} | ${[1, 2, 9, 3, 10, 8, 4, 5, 6, 7]}
    ${5} | ${[1, 2, 12, 3, 13, 11, 4, 14, 15, 10, 5, 6, 7, 8, 9]}
    ${6} | ${[1, 2, 15, 3, 16, 14, 4, 17, 21, 13, 5, 18, 19, 20, 12, 6, 7, 8, 9, 10, 11]}
  `('returns $output from $n', ({ n, output }) => {
    expect(solution(n)).toEqual(output);
  });
});
