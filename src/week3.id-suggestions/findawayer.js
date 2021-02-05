// https://programmers.co.kr/learn/courses/30/lessons/72410
// 테스트 1 〉	통과 (0.20ms, 30.3MB)
// 테스트 2 〉	통과 (0.20ms, 30.1MB)
// 테스트 3 〉	통과 (0.20ms, 29.9MB)
// 테스트 4 〉	통과 (0.21ms, 30.1MB)
// 테스트 5 〉	통과 (0.19ms, 29.9MB)
// 테스트 6 〉	통과 (0.20ms, 30.1MB)
// 테스트 7 〉	통과 (0.20ms, 29.9MB)
// 테스트 8 〉	통과 (0.19ms, 30.2MB)
// 테스트 9 〉	통과 (0.20ms, 29.9MB)
// 테스트 10 〉	통과 (0.41ms, 29.9MB)
// 테스트 11 〉	통과 (0.20ms, 30.1MB)
// 테스트 12 〉	통과 (0.24ms, 29.9MB)
// 테스트 13 〉	통과 (0.22ms, 30MB)
// 테스트 14 〉	통과 (0.21ms, 30.1MB)
// 테스트 15 〉	통과 (0.20ms, 30MB)
// 테스트 16 〉	통과 (0.29ms, 30MB)
// 테스트 17 〉	통과 (0.25ms, 30.1MB)
// 테스트 18 〉	통과 (0.27ms, 30MB)
// 테스트 19 〉	통과 (0.30ms, 30MB)
// 테스트 20 〉	통과 (0.35ms, 29.9MB)
// 테스트 21 〉	통과 (0.32ms, 30.2MB)
// 테스트 22 〉	통과 (0.31ms, 30.1MB)
// 테스트 23 〉	통과 (0.21ms, 29.9MB)
// 테스트 24 〉	통과 (0.24ms, 30.1MB)
// 테스트 25 〉	통과 (0.22ms, 30MB)
// 테스트 26 〉	통과 (0.21ms, 29.8MB)
function solution(new_id) {
  const $id = new_id
    .toLowerCase() // 1
    .replace(/[^\w-_.]/g, '') // 2
    .replace(/(?:^\.+|\.+(?=\.)|\.+$)/g, ''); // 3 + 4

  const { length } = $id;
  if (!length) return 'aaa'; // 5
  if (length > 15) return $id.slice(0, 15).replace(/\.$/, ''); // 6
  if (length < 3) return $id.padEnd(3, $id[length - 1]); // 7

  return $id;
}

describe('id-suggestions', () => {
  test.each`
    input                            | output
    ${'...!@BaT#*..y.abcdefghijklm'} | ${'bat.y.abcdefghi'}
    ${'z-+.^.'}                      | ${'z--'}
    ${'=.='}                         | ${'aaa'}
    ${'123_.def'}                    | ${'123_.def'}
    ${'abcdefghijklmn.p'}            | ${'abcdefghijklmn'}
  `('returns $output from $input', ({ input, output }) => {
    expect(solution(input)).toBe(output);
  });
});
