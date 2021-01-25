// https://programmers.co.kr/learn/courses/30/lessons/12945

// 반복문
// 테스트 1 〉	통과 (0.05ms, 29.9MB)
// 테스트 2 〉	통과 (0.05ms, 30.1MB)
// 테스트 3 〉	통과 (0.05ms, 29.9MB)
// 테스트 4 〉	통과 (0.03ms, 30MB)
// 테스트 5 〉	통과 (0.05ms, 30.1MB)
// 테스트 6 〉	통과 (0.05ms, 30.1MB)
// 테스트 7 〉	통과 (0.11ms, 30MB)
// 테스트 8 〉	통과 (0.08ms, 30MB)
// 테스트 9 〉	통과 (0.07ms, 30MB)
// 테스트 10 〉	통과 (0.12ms, 29.9MB)
// 테스트 11 〉	통과 (0.07ms, 30.1MB)
// 테스트 12 〉	통과 (0.08ms, 30MB)
// 테스트 13 〉	통과 (2.73ms, 32.4MB)
// 테스트 14 〉	통과 (3.92ms, 32.7MB)
function iteration(n) {
  // if (n < 0) return -1;
  if (n <= 1) return n;
  let x = 0;
  let y = 1;
  let temp;

  while (n) {
    temp = y % 1234567;
    y = x + y;
    x = temp;
    n -= 1;
  }

  return x;
}

describe('fibonacci with iteration', () => {
  test.each`
    input     | output
    ${0}      | ${0}
    ${1}      | ${1}
    ${3}      | ${2}
    ${5}      | ${5}
    ${20}     | ${6765}
    ${40}     | ${1099661}
    ${100000} | ${1168141}
  `('receives $input then returns $output', ({ input, output }) => {
    expect(iteration(input)).toEqual(output);
  });
});

// 반복문 + 메모이제이션
// 테스트 1 〉	통과 (0.05ms, 29.8MB)
// 테스트 2 〉	통과 (0.06ms, 29.8MB)
// 테스트 3 〉	통과 (0.06ms, 29.9MB)
// 테스트 4 〉	통과 (0.06ms, 30MB)
// 테스트 5 〉	통과 (0.06ms, 30MB)
// 테스트 6 〉	통과 (0.06ms, 30.1MB)
// 테스트 7 〉	통과 (0.27ms, 29.7MB)
// 테스트 8 〉	통과 (0.20ms, 30MB)
// 테스트 9 〉	통과 (0.12ms, 30MB)
// 테스트 10 〉	통과 (0.30ms, 30MB)
// 테스트 11 〉	통과 (0.13ms, 29.9MB)
// 테스트 12 〉	통과 (0.16ms, 30.2MB)
// 테스트 13 〉	통과 (5.78ms, 34.3MB)
// 테스트 14 〉	통과 (5.03ms, 34.2MB)
function memoizedIteration(n) {
  const _cache = [0, 1];

  for (let i = _cache.length; i <= n; i += 1) {
    _cache[i] = (_cache[i - 1] + _cache[i - 2]) % 1234567;
  }

  return _cache[n];
}

describe('fibonacci with memoized iteration', () => {
  test.each`
    input     | output
    ${0}      | ${0}
    ${1}      | ${1}
    ${3}      | ${2}
    ${5}      | ${5}
    ${20}     | ${6765}
    ${40}     | ${1099661}
    ${100000} | ${1168141}
  `('receives $input then returns $output', ({ input, output }) => {
    expect(memoizedIteration(input)).toEqual(output);
  });
});

// 재귀문
// -> 콜 스택 한계점(65535?)을 넘는 재귀 연산이 불가능함
// 테스트 1 〉	통과 (0.05ms, 30.1MB)
// 테스트 2 〉	통과 (0.05ms, 30.1MB)
// 테스트 3 〉	통과 (0.05ms, 30MB)
// 테스트 4 〉	통과 (0.05ms, 30MB)
// 테스트 5 〉	통과 (0.04ms, 29.9MB)
// 테스트 6 〉	통과 (0.05ms, 30.1MB)
// 테스트 7 〉	통과 (0.30ms, 30.3MB)
// 테스트 8 〉	통과 (0.20ms, 30.1MB)
// 테스트 9 〉	통과 (0.10ms, 30.1MB)
// 테스트 10 〉	통과 (0.33ms, 30.2MB)
// 테스트 11 〉	통과 (0.09ms, 30MB)
// 테스트 12 〉	통과 (0.15ms, 29.8MB)
// 테스트 13 〉	실패 (런타임 에러)
// 테스트 14 〉	실패 (런타임 에러)
function recursion(n, x = 0, y = 1) {
  if (!n) return x;
  return recursion(n - 1, y, (x + y) % 1234567);
}

describe('fibonacci with recursion', () => {
  test.each`
    input | output
    ${0}  | ${0}
    ${1}  | ${1}
    ${3}  | ${2}
    ${5}  | ${5}
    ${20} | ${6765}
    ${40} | ${1099661}
  `('receives $input then returns $output', ({ input, output }) => {
    expect(recursion(input)).toEqual(output);
  });
});
