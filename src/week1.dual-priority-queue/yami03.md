# 이중우선순위큐
https://programmers.co.kr/learn/courses/30/lessons/42628

## 코드 구현

```js
function solution(operations) {
  const list = [];
  operations.forEach((el) => {
    if (el === "D 1" && list.length) {
      list.splice(list.indexOf(Math.max(...list)))
    } else if (el === "D -1" && list.length) {
      list.splice(list.indexOf(Math.min(...list)))
    } else {
      list.push(Number(el.slice(2)));
    }
  });
  return list.length ? [Math.max(...list), Math.min(...list)] : [0,0]
}
```

## 결과 분석

```
테스트 1 〉	통과 (0.11ms, 30.1MB)
테스트 2 〉	통과 (0.12ms, 30.1MB)
테스트 3 〉	통과 (0.12ms, 29.8MB)
테스트 4 〉	통과 (0.12ms, 30.1MB)
테스트 5 〉	통과 (0.12ms, 29.9MB)
테스트 6 〉	통과 (0.12ms, 29.9MB)
```

**삽질 원인**

* 문제를 잘못 이해하여 숫자부분 따로 / pop 횟수 / shift 횟수 부분을 따로 객체에 정렬하여 구현했음
```
const data = {
  list: [],
  maxValueDeleteCount: 0,
  minValueDeleteCount: 0,
};
```

* splice의 두번째 인자인 deleteCount를 지정하지 않으면 slice처럼 실행됨
