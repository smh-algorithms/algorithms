// https://www.codewars.com/kata/52742f58faf5485cae000b9a

function formatDuration(seconds) {
  if (!seconds) return 'now';

  const second = 1;
  const minute = 60 * second;
  const hour = 60 * minute;
  const day = 24 * hour;
  const year = 365 * day;
  const units = ['year', 'day', 'hour', 'minute', 'second'];

  return [year, day, hour, minute, second]
    .map((factor, index, factors) => {
      return ((index ? seconds % factors[index - 1] : seconds) / factor) | 0;
    })
    .reduceRight((string, value, index) => {
      return value
        ? `${value} ${units[index]}${value > 1 ? 's' : ''}${string ? ', ' : ''}${string}`
        : string;
    }, '')
    .replace(/,(?=[^,]+$)/, ' and');
}

describe('human-readable-duration', () => {
  test.each`
    input        | output
    ${0}         | ${'now'}
    ${1}         | ${'1 second'}
    ${62}        | ${'1 minute and 2 seconds'}
    ${120}       | ${'2 minutes'}
    ${3600}      | ${'1 hour'}
    ${3662}      | ${'1 hour, 1 minute and 2 seconds'}
    ${132030240} | ${'4 years, 68 days, 3 hours and 4 minutes'}
  `('returns $output from $input', ({ input, output }) => {
    expect(formatDuration(input)).toBe(output);
  });
});
