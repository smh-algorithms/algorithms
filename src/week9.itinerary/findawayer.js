// https://programmers.co.kr/learn/courses/30/lessons/43164

// 테스트 1 〉	통과 (0.26ms, 30.1MB)
// 테스트 2 〉	통과 (0.19ms, 30.2MB)
// 테스트 3 〉	통과 (0.18ms, 29.8MB)
// 테스트 4 〉	통과 (0.19ms, 30MB)

function solution(tickets) {
  // 단방향 인접목록을 구성
  const graph = {};
  for (const [departure, destination] of tickets) {
    if (!graph[departure]) graph[departure] = [];
    graph[departure].push(destination);
  }
  // 목적지를 오름차순 정렬
  for (const departure in graph) graph[departure].sort();
  // ICN부터 시작해서 조건에 맞는 루트를 백트래킹
  const route = new Array(tickets.length + 1);
  route[0] = 'ICN';
  return findRoute('ICN', 1, route, graph);
}

function findRoute(departure, index, route, graph) {
  // 루트 완성
  if (index === route.length) return route;
  // 현재 지점에서 출발하는 티켓이 없어 루트 완성 불가
  if (!(departure in graph) || !graph[departure].length) return null;
  // 갈 수 있는 모든 목적지를 탐색
  const allDestinations = graph[departure];
  for (let i = 0; i < allDestinations.length; i += 1) {
    const destination = allDestinations[i];
    // 현재 티켓을 사용한 것으로 표시
    allDestinations.splice(i, 1);
    route[index] = destination;
    // 현재 브랜치에서 루트가 완성됐다면 그 루트 반환
    const $route = findRoute(destination, index + 1, route, graph);
    if ($route) return $route;
    // 티켓을 원위치
    allDestinations.splice(i, 0, destination);
  }
  // 모든 도시를 거칠 수 없는 문제는 존재하지 않음
}

describe('itinerary', () => {
  test.each`
    tickets                                                                             | output
    ${[['ICN', 'JFK'], ['HND', 'IAD'], ['JFK', 'HND']]}                                 | ${['ICN', 'JFK', 'HND', 'IAD']}
    ${[['ICN', 'SFO'], ['ICN', 'ATL'], ['SFO', 'ATL'], ['ATL', 'ICN'], ['ATL', 'SFO']]} | ${['ICN', 'ATL', 'ICN', 'SFO', 'ATL', 'SFO']}
  `('returns $output from $input', ({ tickets, output }) => {
    expect(solution(tickets)).toEqual(output);
  });
});
