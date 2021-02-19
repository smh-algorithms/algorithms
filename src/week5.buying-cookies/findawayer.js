// https://programmers.co.kr/learn/courses/30/lessons/49995

// 정확성  테스트
// 테스트 1 〉	통과 (0.08ms, 29.8MB)
// 테스트 2 〉	통과 (0.14ms, 30.3MB)
// 테스트 3 〉	통과 (0.21ms, 29.9MB)
// 테스트 4 〉	통과 (0.21ms, 29.9MB)
// 테스트 5 〉	통과 (0.41ms, 30.2MB)
// 테스트 6 〉	통과 (7.06ms, 32.5MB)
// 테스트 7 〉	통과 (7.34ms, 32.7MB)
// 테스트 8 〉	통과 (8.56ms, 32.8MB)
// 테스트 9 〉	통과 (11.95ms, 32.7MB)
// 테스트 10 〉	통과 (0.09ms, 30.2MB)
// 테스트 11 〉	통과 (0.10ms, 30MB)
// 테스트 12 〉	통과 (0.09ms, 30.1MB)
// 테스트 13 〉	통과 (0.10ms, 29.9MB)
// 테스트 14 〉	통과 (0.70ms, 30.1MB)
// 테스트 15 〉	통과 (0.65ms, 30.2MB)
// 테스트 16 〉	통과 (0.68ms, 30MB)
// 테스트 17 〉	통과 (0.67ms, 30MB)
// 테스트 18 〉	통과 (0.69ms, 29.9MB)
// 테스트 19 〉	통과 (0.62ms, 30.1MB)
// 테스트 20 〉	통과 (0.64ms, 30MB)
// 테스트 21 〉	통과 (0.72ms, 30MB)
// 테스트 22 〉	통과 (0.25ms, 30.1MB)
// 테스트 23 〉	통과 (10.42ms, 32.7MB)
// 테스트 24 〉	통과 (0.37ms, 30.2MB)
// 테스트 25 〉	통과 (0.42ms, 29.8MB)
// 테스트 26 〉	통과 (10.40ms, 32.9MB)
// 효율성  테스트
// 테스트 1 〉	통과 (10.42ms, 32.8MB)
// 테스트 2 〉	통과 (10.50ms, 32.5MB)
// 테스트 3 〉	통과 (12.92ms, 32.7MB)
// 테스트 4 〉	통과 (12.56ms, 32.9MB)
// 테스트 5 〉	통과 (12.60ms, 32.8MB)
// 테스트 6 〉	통과 (23.37ms, 33MB)
// 테스트 7 〉	통과 (24.07ms, 32.8MB)
// 테스트 8 〉	통과 (24.69ms, 32.8MB)

function solution(cookies) {
  const { length } = cookies;

  if (length < 2) return 0;
  if (length === 2) return Number(cookies[0] === cookies[1]);

  let max = 0;

  // 모든 지점 i에서 시작해 양쪽으로 확산하면서 조건에 맞는 범위를 찾음
  for (let i = 0, stop = length - 1; i < stop; i += 1) {
    let left = i;
    let right = i + 1;
    let leftSum = cookies[left];
    let rightSum = cookies[right];

    // 배열의 양 끄트머리를 벗어나지 않는 한계 내에서
    while (0 <= left && right < length) {
      // 새로운 최대값을 찾을 때마다 max를 갱신
      if (leftSum === rightSum && leftSum > max) max = leftSum;
      // 쿠키를 덜 가진 쪽에게 쿠키를 더 배분
      if (leftSum >= rightSum && 0 <= left) rightSum += cookies[++right];
      else if (rightSum >= leftSum && right < length) leftSum += cookies[--left];
    }
  }

  return max;
}

describe('buying-cookies', () => {
  test.each`
    input           | output
    ${[1, 1, 2, 3]} | ${3}
    ${[1, 2, 4, 5]} | ${0}
  `('returns $output from $input', ({ input, output }) => {
    expect(solution(input)).toBe(output);
  });
});
