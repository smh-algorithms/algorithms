// https://leetcode.com/problems/maximum-number-of-coins-you-can-get/

// Runtime: 112 ms, faster than 100.00% of JavaScript online submissions for Maximum Number of Coins You Can Get.
// Memory Usage: 48.8 MB, less than 98.92% of JavaScript online submissions for Maximum Number of Coins You Can Get.

const maxCoins = piles => {
  // 오름차순 정렬
  const sorted = new Uint16Array(piles).sort();
  // 앞쪽 1/3 찌끄레기는 Bob에게 주고, 나머지를 1개 걸러 먹기
  // 1, 2, 2, 4, 7, 8 -> (Bob, Bob) me, Alice, me, Alice
  const { length } = piles;
  let sum = 0;
  for (let i = length / 3; i < length; i += 2) sum += sorted[i];
  return sum;
};

describe('maximum-number-of-coins', () => {
  test.each`
    piles                          | output
    ${[2, 4, 1, 2, 7, 8]}          | ${9}
    ${[2, 4, 5]}                   | ${4}
    ${[9, 8, 7, 6, 5, 1, 2, 3, 4]} | ${18}
  `('returns $output from $piles', ({ piles, output }) => {
    expect(maxCoins(piles)).toBe(output);
  });
});
