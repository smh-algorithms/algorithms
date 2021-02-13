// https://leetcode.com/problems/predict-the-winner/
// Runtime: 312 ms, faster than 15.00% of JavaScript online submissions for Predict the Winner.
// Memory Usage: 44.1 MB, less than 15.00% of JavaScript online submissions for Predict the Winner.

const PredictTheWinner = numbers => {
  if (numbers.length <= 2) return true;

  return takeMax(0, numbers.length - 1) >= 0;

  function takeMax(left, right, turn = 1) {
    if (left === right) return turn * numbers[left];

    const nextTurn = turn * -1;
    const alpha = turn * numbers[left] + takeMax(left + 1, right, nextTurn);
    const beta = turn * numbers[right] + takeMax(left, right - 1, nextTurn);

    return turn === 1 ? Math.max(alpha, beta) : Math.min(alpha, beta);
  }
};

describe('predict-the-winner', () => {
  test.each`
    numbers           | output
    ${[1, 5, 2]}      | ${false}
    ${[1, 5, 233, 7]} | ${true}
  `('returns $output from $input', ({ numbers, output }) => {
    expect(PredictTheWinner(numbers)).toBe(output);
  });
});
