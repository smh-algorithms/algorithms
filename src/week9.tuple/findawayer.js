// https://programmers.co.kr/learn/courses/30/lessons/64065

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
