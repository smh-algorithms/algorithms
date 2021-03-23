// https://programmers.co.kr/learn/courses/30/lessons/49993

// 테스트 1 〉	통과 (0.12ms, 30.2MB)
// 테스트 2 〉	통과 (0.12ms, 30.1MB)
// 테스트 3 〉	통과 (0.13ms, 30.3MB)
// 테스트 4 〉	통과 (0.13ms, 30.1MB)
// 테스트 5 〉	통과 (0.13ms, 30.2MB)
// 테스트 6 〉	통과 (0.13ms, 30MB)
// 테스트 7 〉	통과 (0.13ms, 30MB)
// 테스트 8 〉	통과 (0.12ms, 30.2MB)
// 테스트 9 〉	통과 (0.13ms, 30.1MB)
// 테스트 10 〉	통과 (0.13ms, 30.1MB)
// 테스트 11 〉	통과 (0.09ms, 30.2MB)
// 테스트 12 〉	통과 (0.13ms, 30.2MB)
// 테스트 13 〉	통과 (0.11ms, 30.2MB)
// 테스트 14 〉	통과 (0.12ms, 30.1MB)

function solution(skill_order, skill_trees) {
  return skill_trees.reduce((count, skill_tree) => {
    return count + is_valid_tree(skill_tree, skill_order);
  }, 0);
}

function is_valid_tree(skill_tree, skill_order) {
  if (skill_tree === skill_order) return 1;
  let prev_index = Infinity;
  let has_match = false;
  for (let i = skill_order.length - 1; i >= 0; i -= 1) {
    let skill = skill_order[i];
    let index = skill_tree.indexOf(skill);
    if (index === -1) {
      if (has_match) return 0;
    } else {
      if (index > prev_index) return 0;
      prev_index = index;
    }
    has_match = has_match || index !== -1;
  }
  return 1;
}

describe('skill-tree', () => {
  test.each`
    skill     | skill_trees                                                                  | output
    ${'CBD'}  | ${['BACDE', 'CBADF', 'AECB', 'BDA']}                                         | ${2}
    ${'CBD'}  | ${['CAD']}                                                                   | ${0}
    ${'CBD'}  | ${['AEF', 'ZJW']}                                                            | ${2}
    ${'REA'}  | ${['REA', 'POA']}                                                            | ${1}
    ${'CBDK'} | ${['CB', 'CXYB', 'BD', 'AECD', 'ABC', 'AEX', 'CDB', 'CBKD', 'IJCB', 'LMDK']} | ${4}
    ${'BDC'}  | ${['AAAABACA']}                                                              | ${0}
    ${'CBD'}  | ${['C', 'D', 'CB', 'BDA']}                                                   | ${2}
  `('returns $output from $skill and $skill_trees', ({ skill, skill_trees, output }) => {
    expect(solution(skill, skill_trees)).toBe(output);
  });
});
