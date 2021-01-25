// Runtime: 84 ms, faster than 88.15% of JavaScript online submissions for Simplify Path.
// Memory Usage: 41.2 MB, less than 12.96% of JavaScript online submissions for Simplify Path.
function solution(path) {
  const resolver = [];

  for (const token of path.split('/')) {
    // 스택 맨 위에 있는 경로를 거슬러 올라감
    if (token === '..') {
      resolver.pop();
    }
    // 주어진 경로를 자식으로 추가
    // 겹친 슬래시(//) 또는 현재 위치(.)는 무시
    else if (token && token !== '.') {
      resolver.push(token);
    }
  }

  return `/${resolver.join('/')}`;
}

describe('simplify-path with .split()', () => {
  test.each`
    input                      | output
    ${'/home/'}                | ${'/home'}
    ${'/../'}                  | ${'/'}
    ${'/home//foo/'}           | ${'/home/foo'}
    ${'/a/./b/../../c/'}       | ${'/c'}
    ${'/a//b////c/d//././/..'} | ${'/a/b/c'}
    ${'/.../'}                 | ${'/...'}
  `('returns $output from $input', ({ input, output }) => {
    expect(solution(input)).toBe(output);
  });
});
