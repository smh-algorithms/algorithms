// import { expect } from 'chai';
// import { Tree } from './treeCollect';

describe('treeCollect', function () {
  it('1. collect 메서드를 알맞게 구현하여야 한다.', function () {
    var root = new Tree(1);
    var filterHandler1 = function (value, depth) {
      return value;
    };
    var filterHandler2 = function (value, depth) {
      return depth === 2;
    };

    expect(root.collect(filterHandler1)).to.eql([1]);
    expect(root.collect(filterHandler2)).to.eql([]);
  });

  it('2. collect 메서드를 알맞게 구현하여야 한다.', function () {
    var root = new Tree(1);
    var branch1 = root.addChild(2);
    var branch2 = root.addChild(3);
    branch1.addChild(4);
    branch1.addChild(5);
    branch2.addChild(6);
    branch2.addChild(7);

    var filterHandler1 = function (value, depth) {
      return value % 2;
    };
    var filterHandler2 = function (value, depth) {
      return depth === 1;
    };

    expect(root.collect(filterHandler1)).to.eql([1, 5, 3, 7]);
    expect(root.collect(filterHandler2)).to.eql([2, 3]);
  });

  it('3. collect 메서드를 알맞게 구현하여야 한다.', function () {
    var root = new Tree(1);
    var branch1 = root.addChild(2);
    var branch2 = root.addChild(3);
    var leaf1 = branch1.addChild(4);
    var leaf2 = branch2.addChild(5);
    var leaf3 = branch2.addChild(6);
    branch1.removeChild(leaf1);
    branch2.removeChild(leaf2);

    var filterHandler1 = function (value, depth) {
      return value % 3;
    };
    var filterHandler2 = function (value, depth) {
      return depth === 2;
    };

    expect(root.collect(filterHandler1)).to.eql([1, 2]);
    expect(root.collect(filterHandler2)).to.eql([6]);
  });

  it('4. bfsCollect 메서드는 너비 우선 탐색 순서로 결과값이 리턴하여야 합니다.', function () {
    var root = new Tree(1);
    var branch1 = root.addChild(2);
    var branch2 = root.addChild(3);
    var branch3 = branch1.addChild(4);
    var branch4 = branch2.addChild(5);
    var branch5 = branch2.addChild(6);
    var leaf1 = branch3.addChild(7);
    var leaf2 = branch3.addChild(8);
    var leaf3 = branch4.addChild(9);
    var leaf4 = branch4.addChild(10);
    var leaf5 = branch5.addChild(11);


    var filterHandler1 = function (value, depth) {
      return typeof value === 'number';
    };
    var filterHandler2 = function (value, depth) {
      return depth === 2;
    };
    var filterHandler3 = function (value, depth) {
      return value % 2;
    };

    expect(root.bfsCollect(filterHandler1)).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    expect(root.bfsCollect(filterHandler3)).to.eql([1, 3, 5, 7, 9, 11]);
  });
});
