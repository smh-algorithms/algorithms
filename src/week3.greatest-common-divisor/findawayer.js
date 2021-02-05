// https://www.hackerearth.com/practice/data-structures/advanced-data-structures/segment-trees/practice-problems/algorithm/cool-gcd-789acd8e/

// HackerEarth를 위한 I/O 코드

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// var stdin_input = '';

// process.stdin.on('data', function (input) {
//   stdin_input += input;
// });

// process.stdin.on('end', function () {
//   main(stdin_input);
// });

// function main(input) {
//   const output = solve(input);
//   process.stdout.write(output);
// }

function solve(input) {
  const actions = {
    1: replaceWith,
    2: replaceWithGCD,
    3: printMaxValue,
    4: printSum,
  };
  const [, elements, ...queries] = input.split('\n');
  const array = parseQuery(elements);
  const output = [];

  for (const query of queries) {
    const [type, ...args] = parseQuery(query);
    const action = actions[type];
    const result = action(array, ...args);
    if (result) output.push(result);
  }

  return output.join('\n');
}

function parseQuery(query) {
  return query.split(' ').map(Number);
}

function replaceWith(array, left, right, value) {
  for (let i = left - 1; i < right; i += 1) array[i] = value;
}

function replaceWithGCD(array, left, right, value) {
  for (let i = left - 1; i < right; i += 1) array[i] = gcd(array[i], value);
}

function printMaxValue(array, left, right) {
  let max = 0; // n >= 0
  for (let i = left - 1; i < right; i += 1) if (array[i] > max) max = array[i];
  return max;
}

function printSum(array, left, right) {
  let sum = 0;
  for (let i = left - 1; i < right; i += 1) sum += array[i];
  return sum;
}

function gcd(a, b) {
  if (!a) return b;
  if (!b) return a;
  if (a === b) return a;

  while (b) {
    if (a > b) a -= b;
    else b -= a;
  }

  return a;
}

describe('greatest-common-divisor', () => {
  const input = dedent(`
    4 6
    10 12 6 8
    3 1 4
    4 1 4
    2 2 4 4
    3 2 4
    1 1 4 2
    4 1 4
  `);
  const output = [12, 36, 4, 8];
  it('returns', () => {
    expect(solve(input)).toEqual(output);
  });
});

function dedent(string) {
  return string.trim().replace(/^\s+/gm, '');
}
