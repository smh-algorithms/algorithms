// https://programmers.co.kr/learn/courses/30/lessons/12913

// 정확성  테스트
// 테스트 1 〉	통과 (2.57ms, 32.6MB)
// 테스트 2 〉	통과 (2.69ms, 32.1MB)
// 테스트 3 〉	통과 (5.46ms, 32.2MB)
// 테스트 4 〉	통과 (17.13ms, 32MB)
// 테스트 5 〉	통과 (2.63ms, 32MB)
// 테스트 6 〉	통과 (2.66ms, 32.9MB)
// 테스트 7 〉	통과 (2.72ms, 32MB)
// 테스트 8 〉	통과 (4.83ms, 32.8MB)
// 테스트 9 〉	통과 (2.47ms, 32MB)
// 테스트 10 〉	통과 (2.59ms, 32MB)
// 테스트 11 〉	통과 (2.69ms, 32.8MB)
// 테스트 12 〉	통과 (2.58ms, 32MB)
// 테스트 13 〉	통과 (2.67ms, 32.6MB)
// 테스트 14 〉	통과 (6.94ms, 32.2MB)
// 테스트 15 〉	통과 (2.62ms, 32MB)
// 테스트 16 〉	통과 (4.95ms, 32MB)
// 테스트 17 〉	통과 (2.60ms, 31.9MB)
// 테스트 18 〉	통과 (2.47ms, 32.1MB)
// 효율성  테스트
// 테스트 1 〉	통과 (21.78ms, 69.9MB)
// 테스트 2 〉	통과 (21.50ms, 68.5MB)
// 테스트 3 〉	통과 (19.90ms, 68.4MB)
// 테스트 4 〉	통과 (21.35ms, 68.9MB)

function solution(land) {
  let table = land[0].slice();
  for (let i = 1, { length } = land; i < length; i += 1) {
    const temp = land[i].slice();
    for (let j = 0; j < 4; j += 1) {
      const max = getMaxExcept(table, j);
      temp[j] += max;
    }
    table = temp;
  }
  return Math.max(...table);
}

function getMaxExcept(array, exception) {
  let max = 0;
  for (let i = 0; i < 4; i += 1) {
    if (i !== exception) max = Math.max(max, array[i]);
  }
  return max;
}

describe('hopscotch', () => {
  test.each`
    land                                                                                                                       | output
    ${[[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]]}                                                                              | ${16}
    ${[[4, 3, 2, 1], [2, 2, 2, 1], [6, 6, 6, 4], [8, 7, 6, 5]]}                                                                | ${20}
    ${[[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1], [100, 0, 9, 8]]}                                                              | ${115}
    ${[[1, 2, 3, 5], [10, 11, 12, 11], [16, 15, 13, 13]]}                                                                      | ${33}
    ${[[1, 100, 15, 3], [1, 2, 3, 4], [100, 99, 98, 97], [97, 98, 99, 100], [4, 3, 2, 1], [100, 100, 100, 100], [1, 1, 1, 1]]} | ${409}
  `('returns $output from $land', ({ land, output }) => {
    expect(solution(land)).toBe(output);
  });
});
