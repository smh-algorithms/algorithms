// https://leetcode.com/problems/finding-the-users-active-minutes/

// Runtime: 296 ms, faster than 76.36% of JavaScript online submissions for Finding the Users Active Minutes.
// Memory Usage: 58.7 MB, less than 78.79% of JavaScript online submissions for Finding the Users Active Minutes.

function findingUsersActiveMinutes(logs, k) {
  const map = {};
  const result = new Array(k).fill(0);
  // create hash map
  for (const [id, time] of logs) {
    if (!(id in map)) map[id] = new Set();
    map[id].add(time);
  }
  // calculate UAMs
  for (const id in map) {
    const uam = map[id].size;
    result[uam - 1] += 1;
  }
  return result;
}

describe('user-active-minutes', () => {
  test.each`
    logs                                        | k    | output
    ${[[0, 5], [1, 2], [0, 2], [0, 5], [1, 3]]} | ${5} | ${[0, 2, 0, 0, 0]}
    ${[[1, 1], [2, 2], [2, 3]]}                 | ${4} | ${[1, 1, 0, 0]}
  `('returns $output from $logs and $k', ({ logs, k, output }) => {
    expect(findingUsersActiveMinutes(logs, k)).toEqual(output);
  });
});
