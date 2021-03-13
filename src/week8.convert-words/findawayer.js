// https://programmers.co.kr/learn/courses/30/lessons/43163

// 테스트 1 〉	통과 (0.28ms, 29.9MB)
// 테스트 2 〉	통과 (0.74ms, 29.8MB)
// 테스트 3 〉	통과 (1.09ms, 30MB)
// 테스트 4 〉	통과 (0.34ms, 30.1MB)
// 테스트 5 〉	통과 (0.16ms, 29.9MB)

function solution(source, target, words) {
  if (!words.includes(target)) return 0;

  // 1. build adjacency list of the words
  const graph = { [source]: new Set() };
  // 1-1. add uni-directional edges from source to target
  for (const word of words) {
    graph[word] = new Set();
    if (areAdjacent(source, word)) {
      graph[source].add(word);
    }
  }
  // 1-2. add bi-direcetional edges between words
  for (const word of words) {
    for (const $word of words) {
      if (word === $word && graph[word].has($word)) continue;
      if (areAdjacent(word, $word)) {
        graph[word].add($word);
        graph[$word].add(word);
      }
    }
  }

  // 2. find shortest route using DFS
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

// test if two given words consist of same characters except one.
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
