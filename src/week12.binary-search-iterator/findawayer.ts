// https://leetcode.com/problems/binary-search-tree-iterator/
// Runtime: 140 ms, faster than 81.82% of TypeScript online submissions for Binary Search Tree Iterator.
// Memory Usage: 51.1 MB, less than 21.21% of TypeScript online submissions for Binary Search Tree Iterator.

class BSTIterator {
  private generator: Generator<number>;
  private nextResult: IteratorResult<number>;

  constructor(root: TreeNode | null) {
    this.generator = BSTIterator.generateNext(root);
    this.nextResult = this.generator.next();
  }

  public next(): number {
    const { value } = this.nextResult;
    this.nextResult = this.generator.next();
    return value;
  }

  public hasNext(): boolean {
    return !this.nextResult.done;
  }

  public static *generateNext(root: TreeNode | null): Generator<number> {
    const stack: TreeNode[] = [];
    let current = root;

    while (current || stack.length) {
      while (current) {
        stack.push(current);
        current = current.left;
      }
      current = stack.pop();
      yield current.val;
      current = current.right;
    }
  }
}

class TreeNode {
  constructor(
    public readonly val = 0,
    public readonly left: TreeNode | null = null,
    public readonly right: TreeNode | null = null
  ) {}
}

describe('binary-search-iterator', () => {
  const rightLeft = new TreeNode(9);
  const rightRight = new TreeNode(20);
  const right = new TreeNode(15, rightLeft, rightRight);
  const left = new TreeNode(3);
  const tree = new TreeNode(7, left, right);

  it('should search item in the tree', () => {
    const bstIterator = new BSTIterator(tree);
    expect(bstIterator.next()).toBe(3);
    expect(bstIterator.next()).toBe(7);
    expect(bstIterator.hasNext()).toBe(true);
    expect(bstIterator.next()).toBe(9);
    expect(bstIterator.hasNext()).toBe(true);
    expect(bstIterator.next()).toBe(15);
    expect(bstIterator.hasNext()).toBe(true);
    expect(bstIterator.next()).toBe(20);
    expect(bstIterator.hasNext()).toBe(false);
  });
});
