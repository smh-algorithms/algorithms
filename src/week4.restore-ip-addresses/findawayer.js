// https://leetcode.com/problems/restore-ip-addresses/
// Runtime: 76 ms, faster than 95.73% of JavaScript online submissions for Restore IP Addresses.
// Memory Usage: 39.6 MB, less than 56.87% of JavaScript online submissions for Restore IP Addresses.

const restoreIpAddresses = string => {
  const { length } = string;
  const found = [];

  find();

  return found;

  // DFS
  function find(start = 0, count = 0, address = '') {
    // 탐색이 완료됨
    if (start === length) {
      // 유효한 4조각의 문자열이 완성되었다면 found 배열에 추가
      if (count === 4) found.push(address);
      return;
    }

    // 남은 문자열 길이가 부족하거나 남을 경우 스킵
    if (length - start > 3 * (4 - count)) return; // 3글자 * 남은 카운트보다 많음
    if (length - start < 4 - count) return; // 1글자 * 남은 카운트보다 적음

    // 1~3자리 숫자를 조각내, 재귀하면서 모든 경우의 수를 탐색
    let i = 1;

    while (i <= 3 && start + i <= length) {
      const segment = string.slice(start, start + i);
      if (isValidSegment(segment))
        find(start + i, count + 1, address ? `${address}.${segment}` : segment);
      i += 1;
    }
  }

  // 0으로 시작하는 두 자리 이상의 숫자가 아니며, 최대값 255 이하의 숫자
  // 인풋 문자열 `string`은 숫자들로만 이뤄져 있으므로 최소값 0은 검사할 필요가 없음
  function isValidSegment(segment) {
    return segment[0] === '0' ? segment.length === 1 : +segment <= 255;
  }
};

describe('restore-ip-addresses', () => {
  test.each`
    input            | output
    ${'25525511135'} | ${['255.255.11.135', '255.255.111.35']}
    ${'0000'}        | ${['0.0.0.0']}
    ${'1111'}        | ${['1.1.1.1']}
    ${'010010'}      | ${['0.10.0.10', '0.100.1.0']}
    ${'101023'}      | ${['1.0.10.23', '1.0.102.3', '10.1.0.23', '10.10.2.3', '101.0.2.3']}
  `('returns $output from $input', ({ input, output }) => {
    expect(restoreIpAddresses(input)).toIncludeSameMembers(output);
  });
});
