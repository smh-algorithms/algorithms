// https://programmers.co.kr/learn/courses/30/lessons/43165

// 테스트 1 〉	통과 (16.79ms, 31.8MB)
// 테스트 2 〉	통과 (16.35ms, 31.8MB)
// 테스트 3 〉	통과 (0.37ms, 29.9MB)
// 테스트 4 〉	통과 (1.68ms, 31.7MB)
// 테스트 5 〉	통과 (2.84ms, 31.6MB)
// 테스트 6 〉	통과 (0.63ms, 30MB)
// 테스트 7 〉	통과 (0.36ms, 30.1MB)
// 테스트 8 〉	통과 (2.73ms, 31.8MB)

function solution(numbers, target) {
  const { length } = numbers;
  let count = 0;

  const search = (index = 0, sum = 0) => {
    if (index === length) {
      if (sum === target) count += 1;
      return;
    }
    search(index + 1, sum + numbers[index]);
    search(index + 1, sum - numbers[index]);
  };

  search();

  return count;
}

describe('target-number', () => {
  test.each`
    numbers            | target | output
    ${[1, 1, 1, 1, 1]} | ${3}   | ${5}
  `('returns $output from $input', ({ numbers, target, output }) => {
    expect(solution(numbers, target)).toBe(output);
  });
});
