// https://programmers.co.kr/learn/courses/30/lessons/42628
// 테스트 1 〉	통과 (0.09ms, 30.1MB)
// 테스트 2 〉	통과 (0.14ms, 30MB)
// 테스트 3 〉	통과 (0.16ms, 30MB)
// 테스트 4 〉	통과 (0.12ms, 30MB)
// 테스트 5 〉	통과 (0.14ms, 29.8MB)
// 테스트 6 〉	통과 (0.15ms, 29.7MB)

function solution(operations) {
  // 입력된 값의 모음
  const memory = [];
  // 최대값 X, 최소값, Y로 이뤄진 배열 [X, Y]
  // 어떤 값을 넣어도 갱신되는 플레이스홀더 사용
  const output = [-Infinity, Infinity];
  const INSERT_COMMAND = 'I';
  const DELETE_MINIMUM_COMMAND = 'D -1';

  for (const operation of operations) {
    // I: 원소를 추가
    if (operation.startsWith(INSERT_COMMAND)) {
      const value = Number(operation.slice(2));
      memory.push(value);
      output[0] = Math.max(output[0], value);
      output[1] = Math.min(output[1], value);
    }
    // D: 제거할 원소가 있는지 체크
    else if (memory.length) {
      // D -1
      if (operation === DELETE_MINIMUM_COMMAND) {
        memory.splice(memory.indexOf(output[1]), 1);
        output[1] = Math.min(...memory);
      }
      // D 1
      else {
        memory.splice(memory.indexOf(output[0]), 1);
        output[0] = Math.max(...memory);
      }
    }
  }

  // 남아있는 원소가 없으면 [0, 0] 반환
  return memory.length ? output : [0, 0];
}

describe('dual-priority-queue', () => {
  test.each`
    input                             | output
    ${['I 16', 'D 1']}                | ${[0, 0]}
    ${['I 7', 'I 5', 'I -5', 'D -1']} | ${[7, 5]}
  `('returns $output from $input', ({ input, output }) => {
    expect(solution(input)).toEqual(output);
  });
});
