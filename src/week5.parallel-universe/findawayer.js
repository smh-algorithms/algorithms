// https://www.acmicpc.net/problem/17451

// 메모리 43856kb, 시간	332ms

// 백준 입출력
// const [line1, line2] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// const n = Number(line1);
// const gaps = line2.split(' ').map(Number);
// console.log(calculateSpeed(n, gaps));

function calculateSpeed(length, distances) {
  let speed = distances[length - 1];

  for (let i = length - 2; i >= 0; i -= 1) {
    const current = distances[i];
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
