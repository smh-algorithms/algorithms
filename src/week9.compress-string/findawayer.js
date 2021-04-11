// https://programmers.co.kr/learn/courses/30/lessons/60057

// 테스트 1 〉	통과 (0.22ms, 30.1MB)
// 테스트 2 〉	통과 (0.72ms, 30.2MB)
// 테스트 3 〉	통과 (0.45ms, 29.9MB)
// 테스트 4 〉	통과 (0.22ms, 30.1MB)
// 테스트 5 〉	통과 (0.11ms, 30MB)
// 테스트 6 〉	통과 (0.24ms, 30.1MB)
// 테스트 7 〉	통과 (0.75ms, 30.1MB)
// 테스트 8 〉	통과 (0.53ms, 30.1MB)
// 테스트 9 〉	통과 (0.96ms, 30.2MB)
// 테스트 10 〉	통과 (2.45ms, 30.6MB)
// 테스트 11 〉	통과 (0.33ms, 30MB)
// 테스트 12 〉	통과 (0.32ms, 30.2MB)
// 테스트 13 〉	통과 (0.35ms, 30.1MB)
// 테스트 14 〉	통과 (0.99ms, 29.8MB)
// 테스트 15 〉	통과 (0.22ms, 30.1MB)
// 테스트 16 〉	통과 (0.21ms, 30MB)
// 테스트 17 〉	통과 (1.40ms, 30.2MB)
// 테스트 18 〉	통과 (1.13ms, 30.2MB)
// 테스트 19 〉	통과 (1.39ms, 30.3MB)
// 테스트 20 〉	통과 (2.88ms, 30.8MB)
// 테스트 21 〉	통과 (2.94ms, 30.8MB)
// 테스트 22 〉	통과 (2.97ms, 30.9MB)
// 테스트 23 〉	통과 (2.89ms, 30.7MB)
// 테스트 24 〉	통과 (2.67ms, 30.7MB)
// 테스트 25 〉	통과 (2.68ms, 30.9MB)
// 테스트 26 〉	통과 (2.86ms, 30.9MB)
// 테스트 27 〉	통과 (2.89ms, 30.9MB)
// 테스트 28 〉	통과 (0.19ms, 30.1MB)

function solution(s) {
  const { length } = s;
  let minLength = length;

  // 문자열 길이 절반 크기부터 분할 시작 (절반을 넘으면 반복이 불가능)
  for (let size = length >> 1; size; size -= 1) {
    let [template, repetitions, currentLength] = [s.substr(0, size), 0, 0];

    for (let i = size; i < length; i += size) {
      const text = s.substr(i, size);
      // 템플릿과 같은 문자열이 반복될 경우 그 횟수를 누적
      if (text === template) repetitions += 1;
      // 다른 문자열일 경우 누적된 반복횟수를 이용해 압축 문자열의 길이를 계산하고, 변수 리셋
      else {
        currentLength += calcCompressedLength(template, repetitions);
        [template, repetitions] = [text, 0];
      }
    }
    // 마지막 열 처리
    currentLength += calcCompressedLength(template, repetitions);
    // 최소 길이를 갱신
    minLength = Math.min(currentLength, minLength);
  }

  return minLength;
}

function calcCompressedLength(template, repetitions) {
  if (!repetitions) return template.length;
  // (숫자의 자릿수) + (반복된 문자열의 길이)
  return ((Math.log(repetitions + 1) * Math.LOG10E + 1) | 0) + template.length;
}

describe('compress-string', () => {
  test.each`
    s                                                                                                          | output
    ${'aabbaccc'}                                                                                              | ${7}
    ${'ababcdcdababcdcd'}                                                                                      | ${9}
    ${'abcabcdede'}                                                                                            | ${8}
    ${'abcabcabcabcdededededede'}                                                                              | ${14}
    ${'xababcdcdababcdcd'}                                                                                     | ${17}
    ${'aababa'}                                                                                                | ${5}
    ${'aaaaaaaaaab'}                                                                                           | ${4}
    ${'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab'} | ${5}
  `('returns $output from $s', ({ s, output }) => {
    expect(solution(s)).toBe(output);
  });
});
