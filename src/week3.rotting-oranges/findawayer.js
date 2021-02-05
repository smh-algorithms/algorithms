// v1: https://leetcode.com/submissions/detail/451888091/
// Runtime: 116 ms, faster than 21.98% of JavaScript online submissions for Rotting Oranges.
// Memory Usage: 45.4 MB, less than 7.39% of JavaScript online submissions for Rotting Oranges.

// v2: https://leetcode.com/submissions/detail/451896272/
// Runtime: 124 ms.
// Memory Usage: 44.8 MB.

// v3: https://leetcode.com/submissions/detail/451898826/
// Runtime: 96 ms, faster than 57.59% of JavaScript online submissions for Rotting Oranges.
// Memory Usage: 41.3 MB, less than 34.63% of JavaScript online submissions for Rotting Oranges.

// v4: https://leetcode.com/submissions/detail/452313850/
// Runtime: 88 ms, faster than 88.61% of JavaScript online submissions for Rotting Oranges.
// Memory Usage: 41 MB, less than 57.53% of JavaScript online submissions for Rotting Oranges.

function orangesRotting(grid) {
  // BFS 검색 큐
  const queue = [];
  // 위 큐의 현재 노드를 가리키는 포인터
  let tail = 0;
  // 신선한 오렌지
  let fresh = 0;
  // 전염에 걸린 시간
  let time = 0;
  // BFS 검색 깊이
  let depth = 0;
  // 인접한 셀을 구하는 데 필요한 오프셋 값
  const offsets = [
    { dx: -1, dy: 0 },
    { dx: 0, dy: -1 },
    { dx: 1, dy: 0 },
    { dx: 0, dy: 1 },
  ];

  grid.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell === 2) queue.push({ x, y, time });
      else if (cell === 1) fresh += 1;
    });
  });

  while (tail < queue.length) {
    const { x, y, time } = queue[tail];

    for (const { dx, dy } of offsets) {
      const tx = x + dx;
      const ty = y + dy;
      // 유효하지 않은 셀, 빈 셀, 이미 썩은 오렌지 셀은 스킵
      if (!grid[ty] || grid[ty][tx] !== 1) continue;

      queue.push({ x: tx, y: ty, time: time + 1 });
      grid[ty][tx] = 2;
      fresh -= 1;
    }

    depth = time;
    tail += 1;
  }

  return fresh ? -1 : depth;
}

describe('rotting-oranges', () => {
  test.each`
    grid                                 | minutes
    ${[[2, 1, 1], [1, 1, 0], [0, 1, 1]]} | ${4}
    ${[[2, 1, 1], [0, 1, 1], [1, 0, 1]]} | ${-1}
    ${[[0, 2]]}                          | ${0}
  `('returns $minutes from $grid', ({ grid, minutes }) => {
    expect(orangesRotting(grid)).toBe(minutes);
  });
});
