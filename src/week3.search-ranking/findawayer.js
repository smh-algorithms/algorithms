// 정확성  테스트
// 테스트 1 〉	통과 (0.90ms, 29.8MB)
// 테스트 2 〉	통과 (0.64ms, 30.1MB)
// 테스트 3 〉	통과 (1.06ms, 30.1MB)
// 테스트 4 〉	통과 (7.12ms, 34.1MB)
// 테스트 5 〉	통과 (15.17ms, 35.6MB)
// 테스트 6 〉	통과 (21.29ms, 34.5MB)
// 테스트 7 〉	통과 (17.73ms, 35.7MB)
// 테스트 8 〉	통과 (21.34ms, 35.4MB)
// 테스트 9 〉	통과 (34.46ms, 36.8MB)
// 테스트 10 〉	통과 (41.08ms, 36.7MB)
// 테스트 11 〉	통과 (14.40ms, 33.8MB)
// 테스트 12 〉	통과 (17.02ms, 33.5MB)
// 테스트 13 〉	통과 (16.26ms, 34MB)
// 테스트 14 〉	통과 (32.19ms, 35.1MB)
// 테스트 15 〉	통과 (28.18ms, 34.7MB)
// 테스트 16 〉	통과 (14.58ms, 35.1MB)
// 테스트 17 〉	통과 (16.97ms, 34MB)
// 테스트 18 〉	통과 (28.41ms, 34.8MB)
// 효율성  테스트
// 테스트 1 〉	실패 (시간 초과)
// 테스트 2 〉	실패 (시간 초과)
// 테스트 3 〉	실패 (시간 초과)
// 테스트 4 〉	실패 (시간 초과)
function solution(entries, queries) {
  const trie = entries.reduce((node, entry) => {
    let current = node;
    entry.split(' ').forEach(value => {
      if (!(value in current)) {
        current[value] = createNode();
      } else {
        current[value].__size__ += 1;
      }
      current = current[value];
    });
    return node;
  }, {});

  return queries.map(query => match(trie, parseQuery(query)));
}

function createNode() {
  const object = Object.create(null);
  Object.defineProperty(object, '__size__', {
    value: 1,
    writable: true,
  });
  return object;
}

function parseQuery(query) {
  return query.match(/(-|\b(?!and)\w+\b)/g);
}

function match(node, queryList, queryIndex = 0, found = 0) {
  if (!node) return 0;
  if (!(queryIndex in queryList)) return node.__size__;

  const queryItem = queryList[queryIndex];

  if (queryItem === '-') {
    for (const key in node) {
      found += match(node[key], queryList, queryIndex + 1);
    }
  } else if (!isNaN(queryItem)) {
    for (const key in node) {
      if (Number(key) >= Number(queryItem)) {
        found += match(node[key], queryList, queryIndex + 1);
      }
    }
  } else if (queryItem in node) {
    found += match(node[queryItem], queryList, queryIndex + 1);
  }

  return found;
}

describe('search-ranking', () => {
  const input = [
    'java backend junior pizza 150',
    'python frontend senior chicken 210',
    'python frontend senior chicken 150',
    'cpp backend senior pizza 260',
    'java backend junior chicken 80',
    'python backend senior chicken 50',
  ];
  const query = [
    'java and backend and junior and pizza 100',
    'python and frontend and senior and chicken 200',
    'cpp and - and senior and pizza 250',
    '- and backend and senior and - 150',
    '- and - and - and chicken 100',
    '- and - and - and - 150',
  ];
  const output = [1, 1, 1, 1, 2, 4];

  it('should return', () => {
    expect(solution(input, query)).toEqual(output);
  });
});
