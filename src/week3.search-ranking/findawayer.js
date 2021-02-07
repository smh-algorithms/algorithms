// https://programmers.co.kr/learn/courses/30/lessons/72412

// v2
// 정확성  테스트
// 테스트 1 〉	통과 (0.92ms, 29.9MB)
// 테스트 2 〉	통과 (0.98ms, 30.1MB)
// 테스트 3 〉	통과 (1.09ms, 30MB)
// 테스트 4 〉	통과 (3.56ms, 32MB)
// 테스트 5 〉	통과 (18.21ms, 34MB)
// 테스트 6 〉	통과 (49.91ms, 35.4MB)
// 테스트 7 〉	통과 (7.41ms, 34.1MB)
// 테스트 8 〉	통과 (64.87ms, 36.3MB)
// 테스트 9 〉	통과 (62.38ms, 38.3MB)
// 테스트 10 〉	통과 (52.72ms, 37.8MB)
// 테스트 11 〉	통과 (7.01ms, 32.6MB)
// 테스트 12 〉	통과 (13.52ms, 35.2MB)
// 테스트 13 〉	통과 (7.41ms, 34MB)
// 테스트 14 〉	통과 (27.04ms, 35.7MB)
// 테스트 15 〉	통과 (42.86ms, 36.7MB)
// 테스트 16 〉	통과 (4.75ms, 33.8MB)
// 테스트 17 〉	통과 (13.34ms, 34.8MB)
// 테스트 18 〉	통과 (26.54ms, 35.6MB)
// 효율성  테스트
// 테스트 1 〉	통과 (479.03ms, 103MB)
// 테스트 2 〉	통과 (454.52ms, 103MB)
// 테스트 3 〉	통과 (450.36ms, 96.8MB)
// 테스트 4 〉	통과 (433.40ms, 96MB)

// 가능한 모든 쿼리 값의 칼럼별 모음
const columns = [
  ['-', 'cpp', 'java', 'python'],
  ['-', 'backend', 'frontend'],
  ['-', 'junior', 'senior'],
  ['-', 'chicken', 'pizza'],
];

function solution(entries, queries) {
  // 모든 종류의 쿼리에 대응하는 점수들의 배열
  const db = new Array(108);

  // 엔트리 값에 대응하는 칼럼 그리고 -에 점수를 중복 삽입
  entries.forEach(entry => {
    const chunks = entry.split(' ');
    const [a, b, c, d] = toColumnIndice(chunks);
    const score = +chunks[4];

    for (const $a of [0, a])
      for (const $b of [0, b])
        for (const $c of [0, c])
          for (const $d of [0, d]) {
            const key = 27 * $a + 9 * $b + 3 * $c + $d;
            if (!(key in db)) db[key] = [];
            db[key].push(score);
          }
  });

  // 점수들을 오름차순으로 정렬
  db.forEach(scores => scores.sort((a, z) => a - z));

  // 쿼리
  return queries.map(query => {
    const chunks = query.match(/(-|\b(?!and)\w+\b)/g); // words or -
    const [a, b, c, d] = toColumnIndice(chunks);
    const score = +chunks[4];
    const key = 27 * a + 9 * b + 3 * c + d;
    const scores = db[key];
    return key in db ? scores.length - closestIndex(scores, score) : 0;
  });
}

// 데이터 모음을 DB의 각 칼럼 내의 index로 변환
function toColumnIndice(values) {
  const { length } = columns;
  const output = [];
  for (let i = 0; i < length; i += 1) {
    output.push(columns[i].indexOf(values[i]));
  }
  return output;
}

// 오름차순으로 정렬된 배열에서 selector보다 크거나 같은 원소의 갯수를 반환
function closestIndex(array, selector) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const middle = ((left + right) / 2) | 0;
    if (array[middle] < selector) left = middle + 1;
    else right = middle - 1;
  }

  return left;
}

// v1
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

// function solution(entries, queries) {
//   const trie = entries.reduce((node, entry) => {
//     let current = node;
//     entry.split(' ').forEach(value => {
//       if (!(value in current)) {
//         current[value] = createNode();
//       } else {
//         current[value].__size__ += 1;
//       }
//       current = current[value];
//     });
//     return node;
//   }, {});

//   return queries.map(query => match(trie, parseQuery(query)));
// }

// function createNode() {
//   const object = Object.create(null);
//   Object.defineProperty(object, '__size__', {
//     value: 1,
//     writable: true,
//   });
//   return object;
// }

// function parseQuery(query) {
//   return query.match(/(-|\b(?!and)\w+\b)/g);
// }

// function match(node, queryList, queryIndex = 0, found = 0) {
//   if (!node) return 0;
//   if (!(queryIndex in queryList)) return node.__size__;

//   const queryItem = queryList[queryIndex];

//   if (queryItem === '-') {
//     for (const key in node) {
//       found += match(node[key], queryList, queryIndex + 1);
//     }
//   } else if (!isNaN(queryItem)) {
//     for (const key in node) {
//       if (Number(key) >= Number(queryItem)) {
//         found += match(node[key], queryList, queryIndex + 1);
//       }
//     }
//   } else if (queryItem in node) {
//     found += match(node[queryItem], queryList, queryIndex + 1);
//   }

//   return found;
// }

describe('search-ranking', () => {
  const info = [
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
    expect(solution(info, query)).toEqual(output);
  });
});
