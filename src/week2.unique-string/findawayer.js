function findUniq(strings) {
  const { length } = strings;
  const seen = {};

  // 첫 번째 문자열을 기준으로 구성하는 글자들의 맵을 만듦
  for (const char of strings[0].toUpperCase()) {
    seen[char] = true;
  }

  // A[0]과 A[1]이 상이하다면
  if (!hasSameCharacters(strings[1], seen))
    // A[0]과 A[2]가 같을 경우 A[1]이 범인, 다를 경우 A[0]이 범인.
    return hasSameCharacters(strings[2], seen) ? strings[1] : strings[0];

  // A[0]과 A[1]은 닮은 문자열이기 때문에 이레귤러가 아님.
  // A[0]과 비교했을 때 상이점이 존재하면 그 원소가 범인.
  for (let i = 2; i < length; i += 1)
    if (!hasSameCharacters(strings[i], seen)) return strings[i];

  return null;
}

// 문자열 string이 대소문자 관계없이 seen에 저장된 문자들로 이뤄져 있는지 확인
// (1개 원소 외에는 모두 유사하다는 조건이 있으므로 빠진 문자가 있는지 검사는 불필요)
function hasSameCharacters(string, seen) {
  for (const char of string.toUpperCase()) {
    if (!(char in seen)) return false;
  }
  return true;
}

describe('unique-string', () => {
  test.each`
    input                                                            | output
    ${['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']}         | ${'BbBb'}
    ${['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba']}             | ${'foo'}
    ${['silvia', 'vasili', 'victor']}                                | ${'victor'}
    ${['Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter']} | ${'Harry Potter'}
    ${['    ', 'a', ' ']}                                            | ${'a'}
  `('returns $output from $input', ({ input, output }) => {
    expect(findUniq(input)).toBe(output);
  });
});
