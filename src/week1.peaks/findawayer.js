function solution(array) {
  const { length } = array;

  // 너무 짧아서 픽이 만들어질 수 없음
  if (length <= 2) return 0;

  // 배열 안의 픽을 모두 찾음
  const peaks = [];
  let current = array[1];
  let previous = array[0];
  let next;

  for (let i = 1; i < length - 1; i += 1) {
    next = array[i + 1];

    if (previous < current && current > next) {
      peaks.push(i);
    }

    previous = current;
    current = next;
  }

  const { length: peaksLength } = peaks;

  // 픽이 없거나, 1픽만 있으면 나눌수가 없음
  if (peaksLength < 2) {
    return peaksLength;
  }

  // i -> 블럭의 갯수
  // 블럭의 갯수는 픽의 갯수보다 많을 수 없고,
  // 1블럭일 경우는 픽을 포함하는지 검증을 생략하는 게 효율적.
  // 블럭을 최대한 잘게 나누는 게 목표이므로, 가장 많은 블럭 갯수부터 검사함.
  for (let i = peaksLength; i > 1; i -= 1) {
    // 블럭을 동일한 길이로 나눌 수 없음
    if (length % i) continue;

    let blockSize = length / i;
    let blockIndex = 0;

    // 픽을 1차례 순회하면서 픽을 포함하는 블럭의 갯수를 검사
    for (const peak of peaks) {
      const blockStart = blockIndex * blockSize;
      const blockEnd = (blockIndex + 1) * blockSize;

      if (blockStart <= peak && peak < blockEnd) {
        blockIndex += 1;
      }
    }

    // 만들 수 있는 블럭이 기대값과 같으면 정답
    if (blockIndex === i) {
      return i;
    }
  }

  // 배열의 길이가 소수라 1블럭밖에 안 만들어짐
  return 1;
}

describe('peaks', () => {
  test.each`
    input                                   | output
    ${[1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]} | ${3}
    ${[0, 1, 0, 0, 1, 0, 0, 1, 0]}          | ${3}
  `('returns $output from $input', ({ input, output }) => {
    expect(solution(input)).toBe(output);
  });
});
