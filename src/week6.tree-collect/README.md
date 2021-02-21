깊이 우선 탐색과 너비 우선 탐색 두가지 방법으로 풀 수 있도록 문제를 변형해 보았습니다. :)

이 문제는 javascript로 되어 있습니다.

## Description

Implement a `collect` method on this binary Tree class.

Collect accepts a filter function, calls that function on each of the nodes in turn,
and returns a flat array of node values of the tree for which the filter returns true.

Example:

```js
var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);
root1.collect(function (value, depth) {
  return value % 2;
});
// [1, 5, 3, 7]

root1.collect(function (value, depth) {
  return depth === 1;
});
// [2, 3]
```

Extra credit: Does your method return nodes in a breadth-first or a depth-first order?
How would you alter it to return in a different order?

Basic binary tree that stores a value.
You shouldn't need to change anything below here, but feel free to look.

## Problem

```js
export var Tree = function (value) {
  this.value = value;
  this.children = [];
};

/* 깊이 우선 탐색 */
Tree.prototype.collect = function (filter) {
  /**
   * return an array of values for which the function filter(value, depth) returns true
   *
   *  TODO: implement me!
   */
};

/* 너비 우선 탐색 */
Tree.prototype.bfsCollect = function (filter) {
  /**
   * return an array of values for which the function filter(value, depth) returns true
   *
   *  TODO: implement me!
   */
};

/**
 * add an immediate child
 * (wrap values in Tree nodes if they're not already)
 */
Tree.prototype.addChild = function (child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }

  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

/**
 * check to see if the provided tree is already a child of this
 * tree __or any of its sub trees__
 */
Tree.prototype.isDescendant = function (child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
 * remove an immediate child
 */
Tree.prototype.removeChild = function (child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error("That node is not an immediate child of this tree");
  }
};
```

## Test

[test.js](./test.js)를 참고해 주세요.
