// https://leetcode.com/problems/merge-two-binary-trees/

// Runtime: 112 ms, faster than 81.63% of JavaScript online submissions for Merge Two Binary Trees.
// Memory Usage: 46.7 MB, less than 10.38% of JavaScript online submissions for Merge Two Binary Trees.

var mergeTrees = function (root1, root2) {
  if (!root1) return root2;
  if (!root2) return root1;
  root1.val += root2.val;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);
  return root1;
};

describe('merge-trees', () => {
  it('should return [3,4,5,5,4,null,7]', () => {
    const tree1 = {
      val: 1,
      left: { val: 3, left: 5, right: null },
      right: { val: 2, left: null, right: null },
    };
    const tree2 = {
      val: 2,
      left: { val: 1, left: null, right: 4 },
      right: { val: 3, left: null, right: 7 },
    };
    const output = {
      val: 3,
      left: { val: 4, left: 5, right: 4 },
      right: { val: 5, left: null, right: 7 },
    };
    expect(mergeTrees(tree1, tree2)).toEqual(output);
  });

  it('should return [2,2]', () => {
    const tree1 = {
      val: 1,
      left: null,
      right: null,
    };
    const tree2 = {
      val: 1,
      left: { val: 2, left: null, right: null },
      right: null,
    };
    const output = {
      val: 2,
      left: { val: 2, left: null, right: null },
      right: null,
    };
    expect(mergeTrees(tree1, tree2)).toEqual(output);
  });
});
