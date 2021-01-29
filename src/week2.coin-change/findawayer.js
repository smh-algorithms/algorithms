// 테스트 1 〉	통과 (3.93ms, 33MB)
// 테스트 2 〉	통과 (3.66ms, 32.7MB)
// 테스트 3 〉	통과 (3.66ms, 32.8MB)
// 테스트 4 〉	통과 (3.82ms, 32.5MB)
// 테스트 5 〉	통과 (1.20ms, 30.3MB)
// 테스트 6 〉	통과 (0.56ms, 30.1MB)
// 테스트 7 〉	통과 (3.93ms, 32.7MB)
// 테스트 8 〉	통과 (3.97ms, 32.9MB)
// 테스트 9 〉	통과 (3.61ms, 32.9MB)
// 테스트 10 〉	통과 (0.92ms, 30.1MB)
// 테스트 11 〉	통과 (3.75ms, 32.8MB)
// 테스트 12 〉	통과 (3.71ms, 32.7MB)
// 테스트 13 〉	통과 (0.83ms, 30.1MB)
// 테스트 14 〉	통과 (4.03ms, 32.8MB)
// 테스트 1 〉	통과 (15.16ms, 33.2MB)
// 테스트 2 〉	통과 (17.63ms, 33.5MB)
// 테스트 3 〉	통과 (14.90ms, 33.4MB)
// 테스트 4 〉	통과 (14.94ms, 33.4MB)
// 테스트 5 〉	통과 (21.17ms, 33.6MB)
// 테스트 6 〉	통과 (18.06ms, 33.6MB)
function solve(n, units) {
  if (n === 0) return 1;

  const stop = n + 1; // 0인덱스 -> 1인덱스로 1칸 쉬프트
  const table = new Array(stop).fill(0); // DP 테이블

  // 최초 경우의 수: 0원일 때는 1가지 방법 (0개의 코인)
  table[0] = 1;

  // 코인을 루프하면서 총액 n을 만드는 조합을 합산
  for (const unit of units) {
    // 코인이 총액보다 크면 조합 불가능
    if (unit > n) continue;
    for (let i = unit; i < stop; i += 1) {
      table[i] += table[i - unit] % 1000000007; // int 오버플로우 가드
    }
  }

  return table[n];
}

describe('coin-change', () => {
  test.each`
    n    | units        | result
    ${5} | ${[1, 2, 5]} | ${4}
  `('returns $output from $input', ({ n, units, result }) => {
    expect(solve(n, units)).toBe(result);
  });
});
