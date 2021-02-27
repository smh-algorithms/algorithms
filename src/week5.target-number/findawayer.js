// https://programmers.co.kr/learn/courses/30/lessons/43165

// 테스트 1 〉	통과 (35.33ms, 32.4MB)
// 테스트 2 〉	통과 (19.31ms, 32.6MB)
// 테스트 3 〉	통과 (0.37ms, 30MB)
// 테스트 4 〉	통과 (16.15ms, 32.2MB)
// 테스트 5 〉	통과 (2.97ms, 32.3MB)
// 테스트 6 〉	통과 (0.65ms, 29.8MB)
// 테스트 7 〉	통과 (0.37ms, 30.2MB)
// 테스트 8 〉	통과 (2.66ms, 31.7MB)

function solution(numbers, target) {
  const dfs = (index, length, sum) => {
    if (index === length) return sum === target;

    let count = 0;
    count += dfs(index + 1, length, sum + numbers[index]);
    count += dfs(index + 1, length, sum - numbers[index]);
    return count;
  };

  return dfs(0, numbers.length, 0);
}

describe('target-number', () => {
  test.each`
    numbers            | target | output
    ${[1, 1, 1, 1, 1]} | ${3}   | ${5}
  `('returns $output from $input', ({ numbers, target, output }) => {
    expect(solution(numbers, target)).toBe(output);
  });
});
