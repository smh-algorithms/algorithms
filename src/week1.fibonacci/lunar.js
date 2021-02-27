// > 출처: https://programmers.co.kr/learn/courses/30/lessons/12945 (프로그래머스, 난이도 2/5)

function solution(n) {
  if (n < 2) return;

  return getRemainderByLoop(n);
}

function getRemainderByLoop(n) {
  let prev1 = 1;
  let prev2 = 0;

  let result = 0;
  for (let i = 2; i <= n; i++) {
    result = (prev1 + prev2) % 1234567;
    prev2 = prev1;
    prev1 = result;
  }

  return result;
}

// 테스트 1 〉	통과 (0.07ms, 29.9MB)
// 테스트 2 〉	통과 (0.06ms, 30MB)
// 테스트 3 〉	통과 (0.06ms, 29.9MB)
// 테스트 4 〉	통과 (0.06ms, 30.1MB)
// 테스트 5 〉	통과 (0.07ms, 30.1MB)
// 테스트 6 〉	통과 (0.07ms, 30MB)
// 테스트 7 〉	통과 (0.13ms, 30.1MB)
// 테스트 8 〉	통과 (0.11ms, 30MB)
// 테스트 9 〉	통과 (0.08ms, 30MB)
// 테스트 10 〉	통과 (0.14ms, 30MB)
// 테스트 11 〉	통과 (0.09ms, 30MB)
// 테스트 12 〉	통과 (0.09ms, 29.9MB)
// 테스트 13 〉	통과 (2.14ms, 32.4MB)
// 테스트 14 〉	통과 (2.10ms, 32.2MB)




// 아래는 그냥 피보나치 수를 구하려고 애썼던 흔적.

function getFibonacciByRecursion(n) {
  if (n <= 1) {
    return n;
  }
  return getFibonacci(n - 2) + getFibonacci(n - 1);
}

// 일정 수 이상의 n이 입력되면 RangeError [Error]: Maximum call stack size exceeded 오류 발생

// 테스트 1 〉	통과 (0.09ms, 30.1MB)
// 테스트 2 〉	통과 (0.08ms, 29.9MB)
// 테스트 3 〉	통과 (0.11ms, 30MB)
// 테스트 4 〉	통과 (0.10ms, 29.9MB)
// 테스트 5 〉	통과 (0.14ms, 30.1MB)
// 테스트 6 〉	통과 (0.15ms, 29.8MB)
// 테스트 7 〉	실패 (시간 초과)
// 테스트 8 〉	실패 (시간 초과)
// 테스트 9 〉	실패 (시간 초과)
// 테스트 10 〉	실패 (시간 초과)
// 테스트 11 〉	실패 (시간 초과)
// 테스트 12 〉	실패 (시간 초과)
// 테스트 13 〉	실패 (런타임 에러)
// 테스트 14 〉	실패 (런타임 에러)


function getFibonacciByLoop(n) {
  let prev1 = 1;
  let prev2 = 0;

  let result = 0;
  for (let i = 2; i <= n; i++) {
    result = prev1 + prev2;
    prev2 = prev1;
    prev1 = result;
  }

  return result;
}

// n의 범위가 100,000 까지이고, 일정 수를 넘어가면 js 에서 처리하는 number 자료형 범위보다 큰 수가 나와 오류가 생기는 듯

// 테스트 1 〉	통과 (0.09ms, 29.7MB)
// 테스트 2 〉	통과 (0.09ms, 29.8MB)
// 테스트 3 〉	통과 (0.09ms, 30MB)
// 테스트 4 〉	통과 (0.09ms, 29.9MB)
// 테스트 5 〉	통과 (0.11ms, 30MB)
// 테스트 6 〉	통과 (0.09ms, 29.9MB)
// 테스트 7 〉	실패 (0.15ms, 29.9MB)
// 테스트 8 〉	실패 (0.13ms, 30MB)
// 테스트 9 〉	실패 (0.10ms, 29.9MB)
// 테스트 10 〉	실패 (0.15ms, 29.9MB)
// 테스트 11 〉	실패 (0.11ms, 29.7MB)
// 테스트 12 〉	실패 (0.13ms, 29.8MB)
// 테스트 13 〉	실패 (2.61ms, 33.2MB)
// 테스트 14 〉	실패 (2.65ms, 33.2MB)