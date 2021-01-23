# Merge Intervals
https://leetcode.com/problems/merge-intervals/

## 코드 구현 
```js
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  const queue = [];

  intervals.sort(function (a, b) {
    return a[0] - b[0];
  });

  for (let i = 0; i < intervals.length; i++) {
    if (i === 0) {
      queue.push(intervals[i]);
      continue;
    }

    const canMerge =
      queue[queue.length - 1][1] >= intervals[i][0] &&
      queue[queue.length - 1][0] <= intervals[i][1];

    if (canMerge) {
      const start = Math.min(queue[queue.length - 1][0], intervals[i][0]);
      const end = Math.max(queue[queue.length - 1][1], intervals[i][1]);
      queue.pop();
      queue.push([start, end]);
    } else {
      queue.push(intervals[i]);
    }
  }

  return queue;
};
```

## 결과 분석
```
Runtime: 108 ms, faster than 20.53% of JavaScript online submissions for Merge Intervals.
Memory Usage: 41.6 MB, less than 27.10% of JavaScript online submissions for Merge Intervals.
```

다른 답을 보고 😭

```js
if (i === 0) {
  queue.push(intervals[i]);
  continue;
}
```
for문안에 이 부분을 삭제하고 

```js
const queue = [];

intervals.sort(function (a, b) {
  return a[0] - b[0];
});

queue.push(intervals[0]);
```
intervals의 index 0을 바로 할당해줬을 때 엄청난 속도 개선이.. 😂😂😂

```
Runtime: 84 ms, faster than 95.26% of JavaScript online submissions for Merge Intervals.
Memory Usage: 41.7 MB, less than 24.99% of JavaScript online submissions for Merge Intervals.
```
