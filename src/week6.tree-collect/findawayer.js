class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  /* DFS: return an array of values for which the function filter(value, depth) returns true */
  collect(filter) {
    const stack = [{ node: this, depth: 0 }];
    const output = [];

    while (stack.length) {
      const { node, depth } = stack.pop();
      if (filter(node.value, depth)) output.push(node.value);
      // append children from right to left, in order to visit them
      // left-to-right, as we iterate backwards.
      for (let i = node.children.length - 1; i >= 0; i -= 1)
        stack.push({ node: node.children[i], depth: depth + 1 });
    }

    return output;
  }

  /* BFS: return an array of values for which the function filter(value, depth) returns true */
  bfsCollect(filter) {
    const queue = [{ node: this, depth: 0 }];
    const output = [];

    while (queue.length) {
      const { node, depth } = queue.shift();
      if (filter(node.value, depth)) output.push(node.value);
      for (const child of node.children) queue.push({ node: child, depth: depth + 1 });
    }

    return output;
  }

  /**
   * add an immediate child
   * (wrap values in Tree nodes if they're not already)
   */
  addChild(child) {
    if (!child || !(child instanceof Tree)) child = new Tree(child);
    if (this.isDescendant(child)) throw new Error('That child is already a child of this tree');
    this.children.push(child);
    // return the new child node for convenience
    return child;
  }

  /**
   * check to see if the provided tree is already a child of this
   * tree __or any of its sub trees__
   */
  isDescendant(child) {
    // `child` is an immediate child of this tree
    if (this.children.indexOf(child) !== -1) return true;
    // `child` is descendant of this tree
    return this.children.some(node => node.isDescendant(child));
  }

  /**
   * remove an immediate child
   */
  removeChild(child) {
    const index = this.children.indexOf(child);
    if (index === -1) throw new Error('That node is not an immediate child of this tree');
    // remove the child
    this.children.splice(index, 1);
  }
}

describe('treeCollect', () => {
  it('1. collect 메서드를 알맞게 구현하여야 한다.', () => {
    const root = new Tree(1);
    const filterHandler1 = value => value;
    const filterHandler2 = (_value, depth) => depth === 2;

    expect(root.collect(filterHandler1)).toEqual([1]);
    expect(root.collect(filterHandler2)).toEqual([]);
  });

  it('2. collect 메서드를 알맞게 구현하여야 한다.', () => {
    const root = new Tree(1);
    const branch1 = root.addChild(2);
    const branch2 = root.addChild(3);
    branch1.addChild(4);
    branch1.addChild(5);
    branch2.addChild(6);
    branch2.addChild(7);

    const filterHandler1 = value => value % 2;
    const filterHandler2 = (_value, depth) => depth === 1;

    expect(root.collect(filterHandler1)).toEqual([1, 5, 3, 7]);
    expect(root.collect(filterHandler2)).toEqual([2, 3]);
  });

  it('3. collect 메서드를 알맞게 구현하여야 한다.', () => {
    const root = new Tree(1);
    const branch1 = root.addChild(2);
    const branch2 = root.addChild(3);
    const leaf1 = branch1.addChild(4);
    const leaf2 = branch2.addChild(5);
    const leaf3 = branch2.addChild(6);
    branch1.removeChild(leaf1);
    branch2.removeChild(leaf2);

    const filterHandler1 = value => value % 3;
    const filterHandler2 = (_value, depth) => depth === 2;

    expect(root.collect(filterHandler1)).toEqual([1, 2]);
    expect(root.collect(filterHandler2)).toEqual([6]);
  });

  it('4. bfsCollect 메서드는 너비 우선 탐색 순서로 결과값이 리턴하여야 합니다.', () => {
    const root = new Tree(1);
    const branch1 = root.addChild(2);
    const branch2 = root.addChild(3);
    const branch3 = branch1.addChild(4);
    const branch4 = branch2.addChild(5);
    const branch5 = branch2.addChild(6);
    const leaf1 = branch3.addChild(7);
    const leaf2 = branch3.addChild(8);
    const leaf3 = branch4.addChild(9);
    const leaf4 = branch4.addChild(10);
    const leaf5 = branch5.addChild(11);

    const filterHandler1 = value => typeof value === 'number';
    const filterHandler2 = (_value, depth) => depth === 2;
    const filterHandler3 = value => value % 2;

    expect(root.bfsCollect(filterHandler1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    expect(root.bfsCollect(filterHandler2)).toEqual([4, 5, 6]);
    expect(root.bfsCollect(filterHandler3)).toEqual([1, 3, 5, 7, 9, 11]);
  });
});
