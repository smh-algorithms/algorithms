// https://www.acmicpc.net/problem/17451

// 메모리 43856kb, 시간	332ms

// 백준 입출력
// const [line1, line2] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// const n = Number(line1);
// const gaps = line2.split(' ').map(Number);
// console.log(calculateSpeed(n, gaps));

function calculateSpeed(length, distances) {
  let speed = distances[length - 1];

  // 최초 속도를 역산하기 위해 도착 지점에서부터 거꾸로 루프
  for (let i = length - 2; i >= 0; i -= 1) {
    const current = distances[i];
    // 기존 속도를 x, 현재 검색하는 속도를 y라 할 때
    // x보다 크거나 같으면서 y로 나눌 수 있는 숫자를 찾음
    const remains = (speed + current) % current;
    if (remains) speed = speed + current - remains;
  }

  return speed;
}

describe('parallel-universe', () => {
  test.each`
    n    | distances                    | output
    ${5} | ${[300, 400, 500, 400, 300]} | ${900}
  `('returns $output from $input', ({ n, distances, output }) => {
    expect(calculateSpeed(n, distances)).toBe(output);
  });
});
