function bubbleSort(array) {
  let { length } = array;

  if (length < 2) return array;

  let unsorted;
  let temp;

  do {
    unsorted = false;

    for (let i = 1; i < length; i += 1) {
      if (array[i - 1] > array[i]) {
        temp = array[i];
        array[i] = array[i - 1];
        array[i - 1] = temp;
        unsorted = true;
      }
    }

    length -= 1;
  } while (unsorted);

  return array;
}

describe('sorting-bubble-sort', () => {
  test.each`
    input                  | output
    ${[6, 5, 3, 1, 4, 8]}  | ${[1, 3, 4, 5, 6, 8]}
    ${[-2, 45, 0, 11, -9]} | ${[-9, -2, 0, 11, 45]}
  `('returns $output from $input', ({ input, output }) => {
    expect(bubbleSort(input)).toEqual(output);
  });
});
