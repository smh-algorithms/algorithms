// https://programmers.co.kr/learn/courses/30/lessons/17685

// 테스트 1 〉	통과 (0.17ms, 30.1MB)
// 테스트 2 〉	통과 (0.21ms, 30.1MB)
// 테스트 3 〉	통과 (0.20ms, 30MB)
// 테스트 4 〉	통과 (0.21ms, 29.9MB)
// 테스트 5 〉	통과 (0.22ms, 30.1MB)
// 테스트 6 〉	통과 (578.76ms, 120MB)
// 테스트 7 〉	통과 (0.30ms, 30.1MB)
// 테스트 8 〉	통과 (609.84ms, 117MB)
// 테스트 9 〉	통과 (0.19ms, 30.1MB)
// 테스트 10 〉	통과 (0.23ms, 30MB)
// 테스트 11 〉	통과 (0.23ms, 29.8MB)
// 테스트 12 〉	통과 (595.14ms, 120MB)
// 테스트 13 〉	통과 (562.49ms, 119MB)
// 테스트 14 〉	통과 (387.59ms, 116MB)
// 테스트 15 〉	통과 (0.21ms, 30.1MB)
// 테스트 16 〉	통과 (650.37ms, 120MB)
// 테스트 17 〉	통과 (629.04ms, 119MB)
// 테스트 18 〉	통과 (0.23ms, 30.2MB)
// 테스트 19 〉	통과 (372.41ms, 118MB)
// 테스트 20 〉	통과 (575.62ms, 118MB)
// 테스트 21 〉	통과 (425.56ms, 117MB)
// 테스트 22 〉	통과 (515.41ms, 119MB)
function solution(words) {
  const data = {};
  let count = 0;

  // ['go', 'gone', 'guild']
  // -> { g: { count: 3, o: { count: 2, ... }, u: { count: 1 ... } } }
  for (const word of words) {
    let current = data;

    for (const char of word) {
      if (!(char in current)) {
        current[char] = { count: 1 };
      } else {
        current[char].count += 1;
      }
      current = current[char];
    }
  }

  // data 트리를 검색하면서 현재 단어가 유니크해지는 지점(count = 1이 되는 노드)을 찾음
  // (트리의 깊이) = (필요한 타이핑 횟수)
  for (const word of words) {
    let current = data;

    for (const char of word) {
      count += 1;
      if (current[char].count === 1) {
        break;
      }
      current = current[char];
    }
  }

  return count;
}

describe('autocompletion', () => {
  test.each`
    input                                  | output
    ${['go', 'gone', 'guild']}             | ${7}
    ${['abc', 'def', 'ghi', 'jklm']}       | ${4}
    ${['word', 'war', 'warrior', 'world']} | ${15}
  `('returns $output from $input', ({ input, output }) => {
    expect(solution(input)).toBe(output);
  });
});
