// 육지를 나타내는 글자
const NODE_GROUND = '0';

function solve(mapString) {
  const table = mapString.split('\n');
  // 방문한 노드를 boolean으로 저장한 매트릭스
  const visited = table.map(row => new Array(row.length).fill(false));
  // 섬의 갯수
  let count = 0;

  // 모든 노드를 돌면서 DFS 검색
  for (let row = 0, rowsSize = table.length; row < rowsSize; row += 1) {
    const rowString = table[row];

    for (let col = 0, colsSize = rowString.length; col < colsSize; col += 1) {
      // 육지가 아닌 노드, 이미 방문한 노드는 제외
      if (rowString[col] === NODE_GROUND && !visited[row][col]) {
        dfs(table, row, col, visited);
        count += 1;
      }
    }
  }

  return count;
}

function dfs(table, row, col, visited) {
  // 현재 노드를 방문한 것으로 표시
  visited[row][col] = true;

  const neighbors = [];

  if (row) neighbors.push({ col, row: row - 1 }); // 위
  if (col) neighbors.push({ col: col - 1, row }); // 왼쪽
  if (row + 1 in visited) neighbors.push({ col, row: row + 1 }); // 아래
  if (col + 1 in visited[row]) neighbors.push({ col: col + 1, row }); // 오른쪽
  // console.log(`row: ${row}, col: ${col}`, neighbors);

  // 인접한 노드에 대해서도 같은 검색을 반복
  for (const neighbor of neighbors) {
    if (
      !visited[neighbor.row][neighbor.col] &&
      table[row][col] === NODE_GROUND
    ) {
      dfs(table, neighbor.row, neighbor.col, visited);
    }
  }
  // console.log(`row: ${row}, col: ${col}`, visited);
}

describe('islands', () => {
  const cases = [
    [
      `
      0...0
      0...0
      00000
      `,
      1,
    ],
    [
      `
      0...0
      ..0..
      0...0
      `,
      5,
    ],
    [
      `
      00000000000000000
      .....0..........0
      00..000.........0
      0...0...........0
      0...0...........0
      00000000000000000
      `,
      1,
    ],
    [
      `
      ..000.
      ..000.
      ..000.
      .0....
      ..000.
      `,
      3,
    ],
    [
      `
      ..000.0....0..00.
      ..000...0.000.0.0
      00.0.000.....000.
      .0.00.0.000.0....
      ..0000..0....000.
      `,
      11,
    ],
    [
      `
      ....0000000000000000
      ....000000..........
      ..0000...........0..
      ....000.........00..
      .0000...........0...
      ....................
      ..00000000000000....
      ....0000000.........
      ......00............
      .00000.......0......
      .0000........0......
      .000000...0000000...
      ...0000000......0000
      `,
      5,
    ],
    [
      `
      .0.0.000.
      .0.0.0...
      .000.000.
      .........
      .000.000.
      ...0.0.0.
      .000.0.0.
      .........
      `,
      4,
    ],
  ].map(([temp, output]) => [dedent(temp), output]);

  test.each(cases)('returns $output from $input', (input, output) => {
    expect(solve(input)).toBe(output);
  });
});

function dedent(template) {
  return template.trim().replace(/^\s+/gm, '');
}
