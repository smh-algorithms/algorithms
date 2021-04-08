// https://leetcode.com/problems/sort-the-matrix-diagonally/

// Runtime: 88 ms, faster than 96.65% of JavaScript online submissions for Sort the Matrix Diagonally.
// Memory Usage: 40.5 MB, less than 97.30% of JavaScript online submissions for Sort the Matrix Diagonally.

const diagonalSort = matrix => {
  const lastRow = matrix.length - 1;
  const lastCol = matrix[0].length - 1;

  if (!lastRow || !lastCol) return matrix;

  // (우측 상단) -> (좌측 하단), 아래에서 위로 탐색,
  // 정렬할 필요가 없는 꼭지점들은 제외
  let row = 1;
  let col = lastCol;

  while (col) {
    const offset = Math.min(row, col);
    // TypedArray를 써서 빠르게 숫자 정렬
    new Int8Array(offset + 1)
      .map((_, i) => matrix[row - i][col - i])
      .sort()
      .forEach((value, i) => {
        matrix[row - offset + i][col - offset + i] = value;
      });
    if (row !== lastRow) {
      row += 1; // (우측 상단) -> (우측 하단)
    } else {
      col -= 1; // (좌측 하단) -> (좌측 하단)
    }
  }

  return matrix;
};

describe('sort-the-matrix-diagonally', () => {
  it('should sort matrix diagonally', () => {
    const input1 = [
      [3, 3, 1, 1],
      [2, 2, 1, 2],
      [1, 1, 1, 2],
    ];
    const output1 = [
      [1, 1, 1, 1],
      [1, 2, 2, 2],
      [1, 2, 3, 3],
    ];
    expect(diagonalSort(input1)).toEqual(output1);

    const input2 = [
      [11, 25, 66, 1, 69, 7],
      [23, 55, 17, 45, 15, 52],
      [75, 31, 36, 44, 58, 8],
      [22, 27, 33, 25, 68, 4],
      [84, 28, 14, 11, 5, 50],
    ];
    const output2 = [
      [5, 17, 4, 1, 52, 7],
      [11, 11, 25, 45, 8, 69],
      [14, 23, 25, 44, 58, 15],
      [22, 27, 31, 36, 50, 66],
      [84, 28, 75, 33, 55, 68],
    ];
    expect(diagonalSort(input2)).toEqual(output2);

    const input3 = [[37, 98, 82, 45, 42]];
    expect(diagonalSort(input3)).toEqual(input3);

    const input4 = [
      [93, 49, 54, 89, 100, 90, 63, 28, 46, 67],
      [24, 97, 48, 73, 62, 32, 44, 100, 24, 79],
      [81, 65, 45, 14, 79, 86, 45, 53, 68, 83],
      [29, 83, 12, 90, 39, 37, 4, 91, 62, 43],
      [87, 19, 42, 54, 30, 31, 92, 24, 44, 43],
      [97, 63, 90, 89, 38, 73, 60, 31, 20, 91],
      [93, 36, 83, 50, 27, 89, 27, 47, 80, 5],
      [8, 99, 39, 62, 24, 25, 50, 58, 67, 20],
      [84, 42, 21, 55, 92, 48, 84, 6, 79, 11],
    ];
  });
});
