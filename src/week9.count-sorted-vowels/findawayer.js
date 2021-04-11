// https://leetcode.com/problems/count-sorted-vowel-strings/

// Runtime: 68 ms, faster than 98.40% of JavaScript online submissions for Count Sorted Vowel Strings.
// Memory Usage: 38.5 MB, less than 53.79% of JavaScript online submissions for Count Sorted Vowel Strings.

// WHEN n = 2
// a + (a, e, i, o, u) -> (aa ae ai ao au)
// e + (e, i, o, u)    -> (ee ei eo eu)
// i + (i, o, u)       -> (ii io iu)
// o + (o, u)          -> (oo ou)
// u + (u)             -> (uu)

// WHEN n = 3
// a + (aa ae ai ao au, ee ei eo eu, ii io iu, oo ou, uu) -> (aaa aae aai aao aau, aee aei aeo aeu, aii aio aiu, aoo aou, auu)
// e + (ee ei eo eu, ii io iu, oo ou, uu)                 -> (eee eei eeo eeu, eii eio eiu, eoo eou, euu)
// i + (ii io iu, oo ou, uu)                              -> (iii iio iiu, ioo iou, iuu)
// o + (ou, uu)                                           -> (oou, ouu)
// u + (uu)                                               -> (uuu)

// REPEAT UNTIL n = n
const countVowelStrings = n => {
  let [a, e, i, o, u] = [1, 1, 1, 1, 1];
  while (n--) {
    a += e + i + o + u;
    e += i + o + u;
    i += o + u;
    o += u;
  }
  return a;
};

describe('count-sorted-vowels', () => {
  test.each`
    n     | output
    ${1}  | ${5}
    ${2}  | ${15}
    ${33} | ${66045}
  `('returns $output from $n', ({ n, output }) => {
    expect(countVowelStrings(n)).toBe(output);
  });
});
