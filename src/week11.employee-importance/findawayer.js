// https://leetcode.com/problems/employee-importance/

// Runtime: 88 ms, faster than 81.34% of JavaScript online submissions for Employee Importance.
// Memory Usage: 42 MB, less than 78.36% of JavaScript online submissions for Employee Importance.

/**
 * @param {Employee[]} employees
 * @param {number} targetId
 * @return {number}
 */
const GetImportance = (employees, targetId) => {
  // for dumb cases
  if (employees.length === 1) return employees[0].importance;

  const graph = {};
  const visited = {};
  const stack = [targetId];
  let total = 0;
  // make unidirectional adjacency list
  for (const employee of employees) graph[employee.id] = employee;
  // DFS
  while (stack[0]) {
    const id = stack.pop();
    if (visited[id]) continue;
    const { importance, subordinates } = graph[id];
    visited[id] = true;
    total += importance;
    stack.push(...subordinates);
  }

  return total;
};

class Employee {
  constructor(id, importance, subordinates) {
    this.id = id;
    this.importance = importance;
    this.subordinates = subordinates;
  }
}

describe('employee-importance', () => {
  it('should return total importance of the selected employee', () => {
    const employees = [
      [1, 5, [2, 3]],
      [2, 3, []],
      [3, 3, []],
    ].map(info => new Employee(...info));
    const id = 1;
    const output = 11;
    expect(GetImportance(employees, id)).toBe(output);
  });
});
