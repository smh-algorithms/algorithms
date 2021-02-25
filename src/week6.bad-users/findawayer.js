// https://programmers.co.kr/learn/courses/30/lessons/64064

// 테스트 1 〉	통과 (0.36ms, 30MB)
// 테스트 2 〉	통과 (2.09ms, 30MB)
// 테스트 3 〉	통과 (0.51ms, 30.1MB)
// 테스트 4 〉	통과 (0.48ms, 30MB)
// 테스트 5 〉	통과 (28.56ms, 32.8MB)
// 테스트 6 〉	통과 (6.12ms, 32.1MB)
// 테스트 7 〉	통과 (0.47ms, 30MB)
// 테스트 8 〉	통과 (0.62ms, 30.1MB)
// 테스트 9 〉	통과 (0.58ms, 30.2MB)
// 테스트 10 〉	통과 (0.59ms, 30.2MB)
// 테스트 11 〉	통과 (0.59ms, 30.2MB)

// 발견한 조합의 기록
const cache = [];

// 불량 사용자들을 밴하는 조합의 갯수를 발견
function solution(user_ids, banned_ids) {
  const banned_length = banned_ids.length;
  const banned_patterns = banned_ids.map(regexify);
  const banned = new Array(banned_length).fill(null);

  return backtrack(user_ids, banned_patterns, 0, banned_length, banned);
}

// *로 마스킹된 문자열을 정규식으로 변환.
// fr*d* -> /^fr.d.$/
// ****** -> /^.{6}$/
function regexify(pattern) {
  return new RegExp(
    `^${pattern.replace(/\*+/g, match => (match.length > 1 ? `\.{${match.length}}` : '.'))}$`
  );
}

// 백트래킹: 불량 사용자를 밴하는 조합을 생성
function backtrack(ids, patterns, index, banned_length, banned) {
  // banned 배열을 모두 채웠다면
  if (index === banned_length) {
    // 순서에 상관없이 같은 원소로 된 조합이 이미 기록돼 있으면 0을 반환
    if (cache.some(set => banned.every(key => set.has(key)))) {
      return 0;
    }
    // 새로운 조합을 찾았으면 `cache`에 기록을 남기고 1을 반환
    // (Array.prototype.includes보다 Set.prototype.has가 빠르므로 Set을 사용.
    // 또한 이 과정에서 banned 배열의 스냅샷이 만들어짐)
    cache.push(new Set(banned));
    return 1;
  }

  const pattern = patterns[index];
  const id_length = ids.length;
  let count = 0;

  // 정규식으로 밴할 사용자를 banned 배열에 누적
  for (let i = 0; i < id_length; i += 1) {
    const id = ids[i];
    if (!banned.includes(i) && pattern.test(id)) {
      banned[index] = i;
      count += backtrack(ids, patterns, index + 1, banned_length, banned);
      banned[index] = null;
    }
  }

  return count;
}

describe('bad-users', () => {
  test.each`
    user_id                                            | banned_id                                 | output
    ${['frodo', 'fradi', 'crodo', 'abc123', 'frodoc']} | ${['fr*d*', 'abc1**']}                    | ${2}
    ${['frodo', 'fradi', 'crodo', 'abc123', 'frodoc']} | ${['*rodo', '*rodo', '******']}           | ${2}
    ${['frodo', 'fradi', 'crodo', 'abc123', 'frodoc']} | ${['fr*d*', '*rodo', '******', '******']} | ${3}
  `('returns $output from $input', ({ user_id, banned_id, output }) => {
    expect(solution(user_id, banned_id)).toBe(output);
  });
});
