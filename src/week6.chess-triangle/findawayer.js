// https://www.codewars.com/kata/5897eebff3d21495a70000df

// Time: 2840ms, Passed: 106, Failed: 0

const PIECES = 'BNR';

// 메인 함수. 비숍, 나이트, 룩을 `n x m` 크기의 보드 위에 순환적으로 공격하도록
// 배치하는 경우의 수를 찾습니다. (삼각형은 나이트의 공격권에 의해 자연스럽게 만들어집니다.)
function chessTriangle(n, m) {
  // 한 축이 최소 2칸이 되지 않는다면 삼각형을 만들 수 없음
  if (n < 2 || m < 2) return 0;
  // 체스 보드를 나타내는 매트릭스
  const board = new Array(n).fill().map(() => new Array(m).fill(false));
  // 모든 경우의 수를 백트래킹해 찾음
  let count = 0;
  for (let rank = 0; rank < n; rank += 1)
    for (let file = 0; file < m; file += 1) count += backtrack(rank, file, 0, board, rank, file);
  // 선대칭의 경우의 수를 포함
  return count * 2;
}

// 3개의 기물을 조건에 맞게 배치해 보는 함수.
function backtrack(rank, file, index, board, origRank, origFile) {
  // 모든 기물이 배치되면, 해당 브랜치의 연산을 완료하고
  // 기물들이 사이클을 형성하는지 여부를 반환 (마지막 기물이 첫째 기물을 공격)
  if (index === 3) return rank === origRank && file === origFile;

  const piece = PIECES[index];
  let count = 0;

  // 칸을 배치한 것으로 표시
  board[rank][file] = true;
  // 기물이 공격할 수 있는 모든 칸을 돌면서
  for (const [$rank, $file] of getMoves(piece, rank, file)) {
    // 보드를 벗어난 칸 스킵
    if (!($rank in board) || !($file in board[$rank])) continue;
    // 이미 기물이 있는 칸 스킵, 단, 이 기물이 마지막 기물이라면 사이클을 확인하기 위해 연산 속행
    if (index !== 2 && board[$rank][$file]) continue;
    // 모든 기물이 배치될 때까지 트래킹을 계속함
    count += backtrack($rank, $file, index + 1, board, origRank, origFile);
  }
  // 표시를 제거
  board[rank][file] = false;

  return count;
}

// 주어진 칸에 있는 기물이 공격할 수 있는 칸들의 배열을 반환하는 함수
// (이 함수는 해당 칸들이 보드 안에 있는 유효한 칸인지를 검사하지 않습니다.)
function getMoves(piece, rank, file) {
  switch (piece) {
    case 'B':
      return getBishopMoves(rank, file);
    case 'N':
      return getKnightMoves(rank, file);
    case 'R':
      return getRookMoves(rank, file);
    default:
      throw new Error('Invalid piece');
  }
}

// 비숍의 공격권에 있는 칸들을 반환합니다. 나이트의 공격권에 맞게 삼각형을
// 만들어야 하기 때문에, 비숍의 위치에서 2칸 떨어진 범위까지만 계산합니다.
function getBishopMoves(rank, file) {
  return [
    [rank - 2, file - 2],
    [rank - 1, file - 1],
    [rank - 2, file + 2],
    [rank - 1, file + 1],
    [rank + 1, file - 1],
    [rank + 2, file - 2],
    [rank + 1, file + 1],
    [rank + 2, file + 2],
  ];
}

// 나이트의 공격권에 있는 칸들을 반환합니다.
function getKnightMoves(rank, file) {
  return [
    [rank - 2, file - 1],
    [rank - 1, file - 2],
    [rank - 2, file + 1],
    [rank - 1, file + 2],
    [rank + 1, file - 2],
    [rank + 2, file - 1],
    [rank + 1, file + 2],
    [rank + 2, file + 1],
  ];
}

// 룩의 공격권에 있는 칸들을 반환합니다. 나이트의 공격권에 맞게 삼각형을
// 만들어야 하기 때문에, 룩의 위치에서 3칸 떨어진 범위까지만 계산합니다.
function getRookMoves(rank, file) {
  return [
    [rank - 3, file],
    [rank - 2, file],
    [rank - 1, file],
    [rank + 1, file],
    [rank + 2, file],
    [rank + 3, file],
    [rank, file - 3],
    [rank, file - 2],
    [rank, file - 1],
    [rank, file + 1],
    [rank, file + 2],
    [rank, file + 3],
  ];
}

describe('chess-triangle', () => {
  test.each`
    n     | m     | output
    ${2}  | ${3}  | ${8}
    ${1}  | ${30} | ${0}
    ${3}  | ${3}  | ${48}
    ${2}  | ${2}  | ${0}
    ${5}  | ${2}  | ${40}
    ${40} | ${40} | ${92400}
  `('returns $output from $input', ({ input, output }) => {
    expect(chessTriangle(input)).toBe(output);
  });
});
