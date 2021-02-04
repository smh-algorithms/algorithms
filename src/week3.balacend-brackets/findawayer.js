// 정확성  테스트
// 테스트 1 〉	통과 (0.07ms, 29.9MB)
// 테스트 2 〉	통과 (0.09ms, 30MB)
// 테스트 3 〉	통과 (0.07ms, 30.2MB)
// 테스트 4 〉	통과 (0.08ms, 30.2MB)
// 테스트 5 〉	통과 (0.08ms, 30MB)
// 테스트 6 〉	통과 (0.07ms, 30.1MB)
// 테스트 7 〉	통과 (0.09ms, 30.1MB)
// 테스트 8 〉	통과 (0.09ms, 30MB)
// 테스트 9 〉	통과 (0.09ms, 30.1MB)
// 테스트 10 〉	통과 (0.09ms, 29.9MB)
// 테스트 11 〉	통과 (0.08ms, 29.7MB)
// 테스트 12 〉	통과 (0.12ms, 30.1MB)
// 테스트 13 〉	통과 (0.07ms, 30MB)
// 테스트 14 〉	통과 (0.11ms, 30.1MB)
// 테스트 15 〉	통과 (0.11ms, 29.9MB)
// 테스트 16 〉	통과 (0.12ms, 29.8MB)
// 테스트 17 〉	통과 (0.07ms, 30MB)
// 테스트 18 〉	통과 (0.11ms, 30.1MB)

// 효율성  테스트
// 테스트 1 〉	통과 (8.22ms, 35.4MB)
// 테스트 2 〉	통과 (12.88ms, 35.5MB)

function areBalanced(s) {
  const BRACKET_CLOSE = ')';

  if (s.length % 2 || s[0] === BRACKET_CLOSE) return false;

  const stack = [];

  for (const token of s) {
    if (token === BRACKET_CLOSE && stack[stack.length - 1] !== token)
      stack.pop();
    else stack.push(token);
  }

  return !stack.length;
}

describe('balacend-brackets', () => {
  test.each`
    input       | output
    ${'()()'}   | ${true}
    ${'(())()'} | ${true}
    ${')()('}   | ${false}
    ${'(()('}   | ${false}
  `('returns $output from $input', ({ input, output }) => {
    expect(areBalanced(input)).toBe(output);
  });
});

// 정확성  테스트
// 테스트 1 〉	통과 (0.12ms, 30.1MB)
// 테스트 2 〉	통과 (0.11ms, 30.1MB)
// 테스트 3 〉	통과 (0.11ms, 30.1MB)
// 테스트 4 〉	통과 (0.11ms, 30.1MB)
// 테스트 5 〉	통과 (0.11ms, 30.2MB)
// 테스트 6 〉	통과 (0.10ms, 30MB)
// 테스트 7 〉	통과 (0.08ms, 30.2MB)
// 테스트 8 〉	통과 (0.08ms, 30MB)
// 테스트 9 〉	통과 (0.09ms, 30MB)
// 테스트 10 〉	통과 (0.09ms, 30.1MB)
// 테스트 11 〉	통과 (0.12ms, 29.9MB)
// 테스트 12 〉	통과 (0.11ms, 30.2MB)
// 테스트 13 〉	통과 (0.11ms, 30.2MB)
// 테스트 14 〉	통과 (0.10ms, 30MB)
// 테스트 15 〉	통과 (0.11ms, 30.1MB)
// 테스트 16 〉	통과 (0.12ms, 30.2MB)
// 테스트 17 〉	통과 (0.24ms, 30MB)
// 테스트 18 〉	통과 (0.13ms, 29.9MB)
// 효율성  테스트
// 테스트 1 〉	실패 (7.18ms, 33.4MB)
// 테스트 2 〉	통과 (7.14ms, 33.3MB)
function areBalancedEval(s) {
  try {
    eval(s.replace(/\(\)/g, '(0)').replace(/\)\(/g, '),('));
    return true;
  } catch (e) {
    return false;
  }
}

describe('balacend-brackets-eval', () => {
  test.each`
    input       | output
    ${'()()'}   | ${true}
    ${'(())()'} | ${true}
    ${')()('}   | ${false}
    ${'(()('}   | ${false}
  `('returns $output from $input', ({ input, output }) => {
    expect(areBalancedEval(input)).toBe(output);
  });
});
