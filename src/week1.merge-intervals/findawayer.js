// https://leetcode.com/problems/merge-intervals/
// Runtime: 84 ms, faster than 95.30% of JavaScript online submissions for Merge Intervals.
// Memory Usage: 39.8 MB, less than 99.08% of JavaScript online submissions for Merge Intervals.
function solution(intervals) {
  const { length } = intervals;

  // 시작점 순서대로 정렬
  intervals.sort(([aStart], [bStart]) => aStart - bStart);

  // 가장 작은 시작값을 가진 범위를 기준으로 스택을 만들고
  let [top] = intervals;
  const merged = [top];
  let current;

  // 다른 범위를 비교해서
  for (let i = 1; i < length; i += 1) {
    current = intervals[i];

    // 범위 I의 시작점이 현재 범위 안에 포함될 경우 두 범위를 병합
    if (current[0] <= top[1]) {
      top[1] = Math.max(current[1], top[1]);
    }
    // 포함되지 않을 경우 스택을 갱신
    else {
      merged.push(current);
      top = current;
    }
  }

  return merged;
}

describe('merge-intervals', () => {
  test.each`
    input                                  | output
    ${[[1, 3], [2, 6], [8, 10], [15, 18]]} | ${[[1, 6], [8, 10], [15, 18]]}
    ${[[1, 4], [4, 5]]}                    | ${[[1, 5]]}
  `('returns $output from $input', ({ input, output }) => {
    expect(solution(input)).toEqual(output);
  });
});
