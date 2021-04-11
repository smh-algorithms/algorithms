// https://programmers.co.kr/learn/courses/30/lessons/64065

// 테스트 1 〉	통과 (0.24ms, 29.9MB)
// 테스트 2 〉	통과 (0.23ms, 30MB)
// 테스트 3 〉	통과 (0.24ms, 30.3MB)
// 테스트 4 〉	통과 (0.29ms, 30.1MB)
// 테스트 5 〉	통과 (0.46ms, 30.1MB)
// 테스트 6 〉	통과 (0.66ms, 30.2MB)
// 테스트 7 〉	통과 (7.23ms, 33.8MB)
// 테스트 8 〉	통과 (27.96ms, 35.4MB)
// 테스트 9 〉	통과 (6.74ms, 34.5MB)
// 테스트 10 〉	통과 (11.29ms, 35.4MB)
// 테스트 11 〉	통과 (14.19ms, 36.2MB)
// 테스트 12 〉	통과 (60.50ms, 37.1MB)
// 테스트 13 〉	통과 (92.54ms, 37.2MB)
// 테스트 14 〉	통과 (17.88ms, 37.5MB)
// 테스트 15 〉	통과 (0.21ms, 30.2MB)

function solution(s) {
  // '{{1,2,3},{2,1},{2}}' -> [[2],[2,1],[1,2,3]]
  const parsed = s
    .match(/[\d,]+(?=})/g) // {} 안의 문자열을 모두 선택
    .map(x => x.split(',').map(Number)) // 숫자를 담은 2차원 배열
    .sort((a, z) => a.length - z.length); // 부분배열을 길이에 따라 오름차순 정렬

  // 앞 배열과의 차이를 XOR 연산으로 찾아서 튜플에 순서대로 저장
  const tuple = new Array(parsed.length);
  let xor = 0; // 누적된 XOR 연산값

  for (let i = 0; i < parsed.length; i += 1) {
    let subset = parsed[i];
    let diff = xor;
    for (const item of subset) diff ^= item;
    tuple[i] = diff;
    xor ^= diff;
  }

  return tuple;
}

describe('tuple', () => {
  test.each`
    s                                  | output
    ${'{{2},{2,1},{2,1,3},{2,1,3,4}}'} | ${[2, 1, 3, 4]}
    ${'{{1,2,3},{2,1},{1,2,4,3},{2}}'} | ${[2, 1, 3, 4]}
    ${'{{20,111},{111}}'}              | ${[111, 20]}
    ${'{{123}}'}                       | ${[123]}
    ${'{{4,2,3},{3},{2,3,4,1},{2,3}}'} | ${[3, 2, 4, 1]}
  `('returns $output from $s', ({ s, output }) => {
    expect(solution(s)).toEqual(output);
  });
});
