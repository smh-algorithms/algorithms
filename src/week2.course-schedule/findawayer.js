// Runtime: 104 ms, faster than 55.62% of JavaScript online submissions for Course Schedule.
// Memory Usage: 44 MB, less than 57.51% of JavaScript online submissions for Course Schedule.
function canFinish(numCourses, prerequisites) {
  const graph = {};
  // 엣지 추가
  for (const [course, prerequisite] of prerequisites) {
    if (!(course in graph)) graph[course] = [];
    graph[course].push(prerequisite);
  }
  // 방문중인 노드
  const visiting = {};
  // 방문한 노드
  const visited = {};
  // 사이클이 없는지 확인
  for (let course = 0; course < numCourses; course += 1)
    if (!dfs(course, graph, visiting, visited)) return false;
  // 사이클 없음
  return true;
}

function dfs(node, graph, visiting, visited) {
  // 방문중인 노드로 마킹
  visiting[node] = true;
  // 인접한 노드 (사전수강조건) 검사
  if (node in graph) {
    for (const neighbor of graph[node]) {
      // 이미 방문한 노드
      if (neighbor in visited) continue;
      // 사이클 발견
      if (neighbor in visiting) return false;
      // 연결된 노드를 계속해서 탐색
      if (!dfs(neighbor, graph, visiting, visited)) return false;
    }
  }
  // 방문중 -> 방문함
  delete visiting[node];
  visited[node] = true;

  return true;
}

describe('course-schedule', () => {
  test.each`
    courses | prerequisites               | output
    ${2}    | ${[[0, 1]]}                 | ${true}
    ${2}    | ${[[1, 0], [0, 1]]}         | ${false}
    ${3}    | ${[[1, 0], [1, 2], [0, 1]]} | ${false}
  `('returns $output from $input', ({ courses, prerequisites, output }) => {
    expect(canFinish(courses, prerequisites)).toBe(output);
  });
});
