// 테스트 1 〉	통과 (0.16ms, 30.3MB)
// 테스트 2 〉	통과 (0.18ms, 30.1MB)
// 테스트 3 〉	통과 (0.18ms, 30.1MB)
// 테스트 4 〉	통과 (0.16ms, 30.1MB)
// 테스트 5 〉	통과 (0.17ms, 30.1MB)
// 테스트 6 〉	통과 (0.18ms, 30.2MB)

function solution(operations) {
  // 입력된 값의 모음
  const memory = [];
  // 최대값 X, 최소값, Y로 이뤄진 배열 [X, Y]
  // 어떤 값을 넣어도 갱신되는 플레이스홀더 사용
  const output = [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY];

  for (const operation of operations) {
    const [type, value] = operation.split(' ');
    const valueAsNumber = Number(value);

    // I N
    if (type === 'I') {
      memory.push(valueAsNumber);
      output[0] = Math.max(output[0], valueAsNumber);
      output[1] = Math.min(output[1], valueAsNumber);
    }
    // D, 제거할 원소가 없음
    else if (!memory.length) {
      continue;
    }
    // D 1
    else if (valueAsNumber === 1) {
      memory.splice(memory.indexOf(output[0]), 1);
      output[0] = Math.max(...memory);
    }
    // D -1
    else {
      memory.splice(memory.indexOf(output[1]), 1);
      output[1] = Math.min(...memory);
    }
  }

  // 남아있는 원소가 없으면 [0, 0] 반환
  if (!memory.length) {
    return [0, 0];
  }

  return output;
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
