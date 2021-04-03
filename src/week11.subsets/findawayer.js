function createSubsets(n) {
  const sample = Array.from({ length: n }, (_, index) => index + 1);
  return fillSubsets(sample, [], 0, n, []);
}

function fillSubsets(baseArray, subset, start, end, result) {
  for (let i = start; i < end; i++) {
    fillSubsets(baseArray, [...subset, baseArray[i]], i + 1, end, result);
  }
  if (subset.length) result.push(subset);
  return result;
}

describe('subsets', () => {
  it('should create subset of n size', () => {
    expect(createSubsets(3)).toEqual([[1, 2, 3], [1, 2], [1, 3], [1], [2, 3], [2], [3]]);
  });
});
