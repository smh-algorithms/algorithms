// https://leetcode.com/problems/search-a-2d-matrix-ii/

// v2

// Runtime: 336 ms, faster than 69.24% of JavaScript online submissions for Search a 2D Matrix II.
// Memory Usage: 41.8 MB, less than 77.50% of JavaScript online submissions for Search a 2D Matrix II.

const searchMatrix = (matrix, target) => {
  // 가로/세로축이 각각 오름차/내림차순으로 정렬된 꼭지점에서 시작
  let row = matrix.length - 1;
  let col = 0;
  const colSize = matrix[0].length;

  // 시작점에서 탐색을 개시
  while (row >= 0 && col < colSize) {
    // 매트릭스 범위를 벗어난 좌표일 경우 false 반환 (matrix가 빈 배열일 경우도 대응)
    if (!(row in matrix) || !(col in matrix[row])) return false;
    const current = matrix[row][col];
    // target 값을 찾았으면 true 반환
    if (current === target) return true;
    // target보다 작은 값이면 세로축을 무시 (세로축은 current 노드보다 더 작은 값)
    if (current < target) col += 1;
    // target보다 큰 값이면 가로축을 무시 (가로축은 current 노드보다 더 큰 값)
    else row -= 1;
  }

  // 꾀꼬리
  return false;
};

// v1: Time Limit Exceeded

// const searchMatrix = (matrix, target) => {
//   const queue = [[0, 0]];
//   const offsets = [[1, 0], [0, 1]];
//   let head = 0;

//   while (queue[head]) {
//     const [row, col] = queue[head++];
//     const current = matrix[row][col];

//     if (current === target) return true;

//     for (const [drow, dcol] of offsets) {
//       const $row = row + drow;
//       const $col = col + dcol;
//       if (!($row in matrix) || !($col in matrix[0])) continue;
//       if (matrix[$row][$col] > target) continue;
//       queue.push([row + drow, col + dcol]);
//     }
//   }

//   return false;
// };

describe('search-a-2d-matrix-ii', () => {
  test.each`
    matrix                                                                                                   | target | output
    ${[[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]]} | ${5}   | ${true}
  `('returns $output after searching for $target in $matrix', ({ matrix, target, output }) => {
    expect(searchMatrix(matrix, target)).toBe(output);
  });
});
