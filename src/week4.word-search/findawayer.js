// https://leetcode.com/problems/word-search/
// Runtime: 108 ms, faster than 55.72% of JavaScript online submissions for Word Search.
// Memory Usage: 41.7 MB, less than 73.42% of JavaScript online submissions for Word Search.

const exist = (board, word) => {
  const { length: wordLength } = word;
  const {
    length: rowLength,
    0: { length: colLength },
  } = board;

  // DFS: 수평 혹은 수직 이동으로 `word`를 만들 수 있는지 탐색
  const searchNext = (row, col, index) => {
    // 재귀 중단 조건식: `word`와 같은 길이만큼 검색함
    if (index === wordLength) return true;
    // `board` 그리드를 벗어난 좌표, 혹은 이미 방문한 좌표
    if (!(row in board) || !(col in board[row])) return false;
    // `word`에 일치하지 않는 노드
    if (board[row][col] !== word[index]) return false;
    // 현재 노드를 방문한 것으로 마킹
    board[row][col] = null;
    // 인접한 4방향으로 검색 (top right bottom left)
    const matches =
      searchNext(row - 1, col, index + 1) ||
      searchNext(row, col + 1, index + 1) ||
      searchNext(row + 1, col, index + 1) ||
      searchNext(row, col - 1, index + 1);
    // 방문 마킹을 릴리즈
    board[row][col] = word[index];
    // 끝까지 찾아내지 못했을 경우 false 반환
    return matches;
  };

  for (let row = 0; row < rowLength; row += 1)
    for (let col = 0; col < colLength; col += 1) if (searchNext(row, col, 0)) return true;

  return false;
};

// v1
// Runtime: 128 ms, faster than 34.11% of JavaScript online submissions for Word Search.
// Memory Usage: 44.3 MB, less than 37.23% of JavaScript online submissions for Word Search.

/*
const exist = (board, word) => {
  const { length } = word;
  const [firstChar] = word;
  const rowLength = board.length;
  const colLength = board[0].length;
  const visited = [...new Array(rowLength)].map(() => new Array(colLength));
  const offsetRow = [-1, 0, 1, 0];
  const offsetCol = [0, 1, 0, -1];

  for (let m = 0; m < rowLength; m += 1) {
    for (let n = 0; n < colLength; n += 1) {
      // `word`의 첫 글자와 일치하는 노드에서 DFS 수행, 값을 찾았다면 반복문을 중단하고 true 반환
      const char = board[m][n];
      if (char === firstChar && containsWord(m, n, firstChar)) return true;
    }
  }

  return false;

  // DFS: 수평 혹은 수직 이동으로 `word`를 만들 수 있는지 탐색
  function containsWord(row, col, match) {
    // 재귀 중단 조건식: `word`와 같은 길이만큼 검색함
    if (match.length === length) return true;
    let found = false;

    // 현재 노드를 방문한 것으로 마킹
    visited[row][col] = true;

    // 인접한 4방향으로 검색 (top right bottom left)
    for (let i = 0; i < 4; i += 1) {
      const $row = row + offsetRow[i];
      const $col = col + offsetCol[i];

      // `board` 그리드를 벗어난 좌표, 혹은 이미 방문한 좌표 스킵
      if (!isValidNode($row, $col) || visited[$row][$col]) continue;

      // 노드 값이 `word`의 대응하는 글자와 일치하지 않을 경우 스킵
      const expected = word[match.length];
      const nextChar = board[$row][$col];
      if (nextChar !== expected) continue;

      // 이미 조건에 일치하는 값을 찾았다면 탐색을 중단
      if (containsWord($row, $col, match + nextChar)) {
        found = true;
        break;
      }
    }

    // 방문 마킹을 릴리즈
    visited[row][col] = false;

    return found;
  }

  // 그리드 범위 안에 있는 `row` `col` 좌표인지 검사
  function isValidNode(row, col) {
    return row in board && col in board[row];
  }
};
*/

describe('word-search', () => {
  test.each`
    board                                                                 | word              | output
    ${[['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']]} | ${'ABCCED'}       | ${true}
    ${[['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']]} | ${'SEE'}          | ${true}
    ${[['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']]} | ${'ABCB'}         | ${false}
    ${[['A', 'B', 'C', 'E'], ['S', 'F', 'E', 'S'], ['A', 'D', 'E', 'E']]} | ${'ABCESEEEFS'}   | ${true}
    ${[['A', 'B', 'C', 'E'], ['S', 'F', 'E', 'S'], ['A', 'D', 'E', 'E']]} | ${'ABCEFSADEESE'} | ${true}
  `('returns $output if $board contains $word', ({ board, word, output }) => {
    expect(exist(board, word)).toBe(output);
  });
});
