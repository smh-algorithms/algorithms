// https://leetcode.com/problems/minimum-time-visiting-all-points/

// Runtime: 76 ms, faster than 94.18% of JavaScript online submissions for Minimum Time Visiting All Points.
// Memory Usage: 40.9 MB, less than 12.72% of JavaScript online submissions for Minimum Time Visiting All Points.

const minTimeToVisitAllPoints = points => {
  let [[x1, y1]] = points;
  let time = 0;
  for (let i = 1, { length } = points; i < length; i += 1) {
    const [x2, y2] = points[i];
    const deltaX = Math.abs(x2 - x1);
    const deltaY = Math.abs(y2 - y1);
    time += deltaX + deltaY - Math.min(deltaX, deltaY);
    [x1, y1] = [x2, y2];
  }
  return time;
};

describe('minimum-time-visiting', () => {
  test.each`
    points                       | output
    ${[[1, 1], [3, 4], [-1, 0]]} | ${7}
    ${[[3, 2], [-2, 2]]}         | ${5}
  `('returns $output from $points', ({ points, output }) => {
    expect(minTimeToVisitAllPoints(points)).toBe(output);
  });
});
