// 백준 웹사이트용 입출력 처리
// 메모리 49012kb, 시간 376ms, 코드 552b
// const input = require('fs').readFileSync('/dev/stdin').toString();
// console.log(main(input));

function main(log) {
  const ENTER = 'enter';
  const SPACE = ' ';

  const lines = log.split('\n');
  const staying = {};

  lines.shift();

  for (const line of lines) {
    const name = line.slice(0, line.indexOf(SPACE));

    if (line.endsWith(ENTER)) {
      staying[name] = true;
    } else if (name in staying) {
      delete staying[name];
    }
  }

  return Object.keys(staying)
    .sort((a, z) => (a < z ? 1 : a > z ? -1 : 0))
    .join('\n');
}

describe('entry-logs', () => {
  const input = dedent(`
    4
    Baha enter
    Askar enter
    Baha leave
    Artem enter
  `);
  const output = dedent(`
    Askar
    Artem
  `);

  it('should return', () => {
    expect(main(input)).toEqual(output);
  });
});

function dedent(template) {
  return template.trim().replace(/^\s+/gm, '');
}
