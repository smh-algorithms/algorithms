const HANGUL_TABLE = [
  'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ',
  'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ',
  '​ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ',
];

function unicodeFromJamo(arr) {
  let str = '';
  for (let i = 0; i < arr.length; i += 3) {
    const [initial, medial, final] = arr
      .slice(i, i + 3)
      .map(dec => String.fromCharCode(dec.slice(2, -1)))
      .map((char, index) => HANGUL_TABLE[index].indexOf(char));
    str += `&#${initial * 588 + medial * 28 + final + 44032};`;
  }
  return str;
}

describe('hangul-unicode-from-jamo', () => {
  test.each`
    input                                                                                                          | output
    ${['&#12622;', '&#12623;', '&#12596;', '&#12593;', '&#12636;', '&#12593;', '&#12615;', '&#12627;', '&#8203;']} | ${'&#54620;&#44397;&#50612;'}
    ${['&#12610;', '&#12623;', '&#8203;', '&#12596;', '&#12623;', '&#8203;', '&#12596;', '&#12623;', '&#8203;']}   | ${'&#48148;&#45208;&#45208;'}
  `('returns $output from $input', ({ input, output }) => {
    expect(unicodeFromJamo(input)).toBe(output);
  });
});
