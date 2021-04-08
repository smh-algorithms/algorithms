// https://programmers.co.kr/learn/courses/30/lessons/43163

// 테스트 1 〉	통과 (0.28ms, 29.9MB)
// 테스트 2 〉	통과 (0.74ms, 29.8MB)
// 테스트 3 〉	통과 (1.09ms, 30MB)
// 테스트 4 〉	통과 (0.34ms, 30.1MB)
// 테스트 5 〉	통과 (0.16ms, 29.9MB)

function solution(source, target, words) {
  if (!words.includes(target)) return 0;

  // 1. 단어 사이의 인접목록을 생성
  const graph = { [source]: new Set() };
  // 1-1. `source`와 `words` 사이에 단방향 엣지를 추가
  for (const word of words) {
    graph[word] = new Set();
    if (areAdjacent(source, word)) {
      graph[source].add(word);
    }
  }
  // 1-2. `words` 사이에 양방향 엣지를 추가
  for (const word of words) {
    for (const $word of words) {
      if (word === $word || graph[word].has($word)) continue;
      if (areAdjacent(word, $word)) {
        graph[word].add($word);
        graph[$word].add(word);
      }
    }
  }

  // 2. DFS를 이용해 가장 짧은 경로의 길이를 찾음
  const queue = [[source, 0]];
  const visited = {};
  let head = 0;
  let shortest = Infinity;

  while (queue[head]) {
    const [node, depth] = queue[head++];
    if (node === target) {
      shortest = Math.min(depth, shortest);
      continue;
    }
    if (!visited[node]) {
      visited[node] = true;
    }
    const neighbors = graph[node];
    for (const neighbor of neighbors) {
      if (visited[neighbor]) continue;
      queue.push([neighbor, depth + 1]);
    }
  }

  return shortest;
}

// 문자열 `a`와 `b`가 1글자를 제외하고 모든 글자가 겹치는지 여부를 반환
function areAdjacent(a, b) {
  let threshold = 0;
  let i = 0;
  while (a[i]) {
    if (a[i] !== b[i]) threshold += 1;
    if (threshold > 1) return false;
    i += 1;
  }
  return threshold === 1;
}

describe('convert-words', () => {
  test.each`
    begin    | target   | words                                         | output
    ${'hit'} | ${'cog'} | ${['hot', 'dot', 'dog', 'lot', 'log', 'cog']} | ${4}
    ${'hit'} | ${'cog'} | ${['hot', 'dot', 'dog', 'lot', 'log']}        | ${0}
  `('returns $output from $input', ({ begin, target, words, output }) => {
    expect(solution(begin, target, words)).toBe(output);
  });
});
