// https://www.codewars.com/kata/5897eebff3d21495a70000df

// Passed: 52 Failed: 0 Exit Code: 1
// Execution Timed Out (12000 ms)

const OFFSETS = {
  // Offset to squares that the knight on given rank/file can attack.
  N: [
    [-2, -1],
    [-1, -2],
    [-2, 1],
    [-1, 2],
    [1, -2],
    [2, -1],
    [1, 2],
    [2, 1],
  ],
  // Offset to squares that the bishop on given rank/file can attack.
  // Note that because of knight's range, a valid target square
  // should be no more than 2 squares away from the bishop.
  B: [
    [-2, -2],
    [-1, -1],
    [-2, 2],
    [-1, 1],
    [1, -1],
    [2, -2],
    [1, 1],
    [2, 2],
  ],
  // Offset to squares that the rook on given rank/file can attack.
  // Note that because of knight's range, a valid target square
  // should be no more than 3 squares away from the rook.
  R: [
    [-3, 0],
    [-2, 0],
    [-1, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [0, -3],
    [0, -2],
    [0, -1],
    [0, 1],
    [0, 2],
    [0, 3],
  ],
};

function chessTriangle(rankSize, fileSize) {
  // Cannot form a triangle without at least 2 squares in each axis.
  if (rankSize < 2 || fileSize < 2) return 0;
  // Chess board matrix.
  const board = new Array(rankSize).fill().map(() => new Array(fileSize).fill(false));
  // Found combinations
  const cache = new Set();
  // Find all combinations by backtracking.
  return ['BNR', 'BRN', 'NBR', 'NRB', 'RBN', 'RNB'].reduce((count, pieces) => {
    for (let file = 0; file < fileSize; file += 1)
      for (let rank = 0; rank < rankSize; rank += 1)
        count += backtrack(rank, file, 0, pieces, board, cache);
    return count;
  }, 0);
}

function backtrack(rank, file, index, pieces, board, cache, path = []) {
  // A cycle has been made. (A triangle is naturally made because of the knight's attack range.)
  if (index === 3) {
    if (rank !== path[0][0] || file !== path[0][1]) return 0;
    const snapshot = formatCache(pieces, path);
    if (cache.has(snapshot)) return 0;
    cache.add(snapshot);
    return 1;
  }

  const piece = pieces[index];
  let count = 0;

  board[rank][file] = piece;
  path[index] = [rank, file];

  for (const [deltaRank, deltaFile] of OFFSETS[piece]) {
    const $rank = rank + deltaRank;
    const $file = file + deltaFile;
    // Skip invalid squares
    if (!($rank in board) || !($file in board[$rank])) continue;
    // Skip used squares, unless current piece is the last piece (should be a cycle)
    if (index !== 2 && board[$rank][$file]) continue;
    // Continue tracking until all 3 pieces gets placed.
    count += backtrack($rank, $file, index + 1, pieces, board, cache, path);
  }

  board[rank][file] = false;
  path[index] = null;

  return count;
}

function formatCache(pieces, path) {
  return path
    .map(([rank, file], index) => `${pieces[index]}_${rank}:${file}`)
    .sort()
    .join(',');
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
