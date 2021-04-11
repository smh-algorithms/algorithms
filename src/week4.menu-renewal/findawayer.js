// https://programmers.co.kr/learn/courses/30/lessons/72411

// 테스트 1 〉	통과 (0.66ms, 30.2MB)
// 테스트 2 〉	통과 (0.57ms, 30MB)
// 테스트 3 〉	통과 (0.68ms, 30MB)
// 테스트 4 〉	통과 (0.71ms, 30.1MB)
// 테스트 5 〉	통과 (0.70ms, 30.1MB)
// 테스트 6 〉	통과 (0.99ms, 30.1MB)
// 테스트 7 〉	통과 (1.06ms, 30MB)
// 테스트 8 〉	통과 (9.39ms, 33.2MB)
// 테스트 9 〉	통과 (31.51ms, 33.2MB)
// 테스트 10 〉	통과 (18.34ms, 32.8MB)
// 테스트 11 〉	통과 (4.08ms, 33MB)
// 테스트 12 〉	통과 (5.14ms, 33.2MB)
// 테스트 13 〉	통과 (12.67ms, 33.2MB)
// 테스트 14 〉	통과 (9.67ms, 33.3MB)
// 테스트 15 〉	통과 (10.26ms, 33.1MB)
// 테스트 16 〉	통과 (12.15ms, 33.4MB)
// 테스트 17 〉	통과 (9.16ms, 32.6MB)
// 테스트 18 〉	통과 (10.64ms, 33.2MB)
// 테스트 19 〉	통과 (5.34ms, 32.6MB)
// 테스트 20 〉	통과 (14.76ms, 33MB)

function solution(orders, course) {
  // key: 조합, value: 조합의 주문횟수
  let candidates;
  // 방문한 노드
  const seen = {};
  // 생성된 후보들
  const answer = new Set();

  // 주어진 주문으로 만들 수 있는 모든 조합의 주문횟수를 계산 (백트래킹)
  const countOrder = (order, courseSize, index = 0, candidate = '') => {
    if (candidate.length === courseSize) {
      candidates[candidate] = candidates[candidate] + 1 || 1;
      return;
    }

    for (let i = index, { length } = order; i < length; i += 1) {
      if (seen[i]) continue;
      seen[i] = true;
      countOrder(order, courseSize, i + 1, candidate + order[i]);
      seen[i] = false;
    }
  };

  // 주문을 모두 사전순으로 정렬
  orders = orders.map(order => order.split('').sort().join(''));

  for (const size of course) {
    // 조합 리셋
    candidates = {};

    // 조합이 주문된 횟수를 계산
    for (const order of orders) countOrder(order, size);

    // 특정 길이를 가진 조합 중 주문횟수의 최대값을 찾음
    const maxCount = Object.keys(candidates).reduce((max, candidate) => {
      return Math.max(max, candidates[candidate]);
    }, 0);

    // 2회 이상 주문된 후보 중 주문횟수가 가장 많은 것들을 `answer` Set에 추가
    if (maxCount > 1)
      for (const candidate in candidates)
        if (candidates[candidate] === maxCount) answer.add(candidate);
  }

  // 배열로 전환하고 사전순 정렬
  return [...answer].sort();
}

describe('menu-renewal', () => {
  test.each`
    orders                                               | course       | results
    ${['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH']}   | ${[2, 3, 4]} | ${['AC', 'ACDE', 'BCFG', 'CDE']}
    ${['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD']} | ${[2, 3, 5]} | ${['ACD', 'AD', 'ADE', 'CD', 'XYZ']}
    ${['XYZ', 'XWY', 'WXA']}                             | ${[2, 3, 4]} | ${['WX', 'XY']}
  `('returns $results from $orders and $course', ({ orders, course, results }) => {
    expect(solution(orders, course)).toEqual(results);
  });
});
