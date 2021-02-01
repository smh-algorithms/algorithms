# 이중우선순위큐
https://programmers.co.kr/learn/courses/30/lessons/42628

## 코드 구현

```js
function solution(operations) {
  const list = [];
  operations.forEach((el) => {
    if (el === "D 1" && list.length) {
      list.splice(list.indexOf(Math.max(...list)), 1)
    } else if (el === "D -1" && list.length) {
      list.splice(list.indexOf(Math.min(...list)), 1)
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

## 실험 

1차 개선

```js
if (el === "D 1") {
  list.length && list.splice(list.indexOf(Math.max(...list)), 1)
} else if (el === "D -1") {
  list.length && list.splice(list.indexOf(Math.min(...list)), 1)
} else {
  list.push(Number(el.slice(2)));
}
```

```
테스트 1 〉	통과 (0.12ms, 30.1MB)
테스트 2 〉	통과 (0.11ms, 30MB)
테스트 3 〉	통과 (0.12ms, 30MB)
테스트 4 〉	통과 (0.11ms, 30.1MB)
테스트 5 〉	통과 (0.11ms, 30.1MB)
테스트 6 〉	통과 (0.12ms, 30.1MB)
```

2차 개선

```js
function solution(operations) {
  const list = [];
  const DELETE_MAXIMUM = "D 1";
  const DELETE_MINIMUM = "D -1";

  operations.forEach((el) => {
    switch (el) {
      case DELETE_MAXIMUM:
        list.length && list.splice(list.indexOf(Math.max(...list)), 1)
        break;
      
      case DELETE_MINIMUM:
        list.length && list.splice(list.indexOf(Math.min(...list)), 1)
        break;
      
      default:
        list.push(Number(el.slice(2)));
        break;
    }
  });

  return list.length ? [Math.max(...list), Math.min(...list)] : [0,0]
}
```

```
테스트 1 〉	통과 (0.12ms, 30.2MB)
테스트 2 〉	통과 (0.12ms, 29.9MB)
테스트 3 〉	통과 (0.13ms, 30MB)
테스트 4 〉	통과 (0.11ms, 30.1MB)
테스트 5 〉	통과 (0.12ms, 30.2MB)
테스트 6 〉	통과 (0.12ms, 30.2MB)
```

3차 개선

```js
function solution(operations) {
  const list = [];

  operations.forEach((el) => {
    switch (el) {
      case 'D 1':
        list.length && list.splice(list.indexOf(Math.max(...list)), 1)
        break;
      
      case 'D -1':
        list.length && list.splice(list.indexOf(Math.min(...list)), 1)
        break;
      
      default:
        list.push(Number(el.slice(2)));
        break;
    }
  });

  return list.length ? [Math.max(...list), Math.min(...list)] : [0,0]
}
```

```
테스트 1 〉	통과 (0.12ms, 30.1MB)
테스트 2 〉	통과 (0.12ms, 30.2MB)
테스트 3 〉	통과 (0.15ms, 29.9MB)
테스트 4 〉	통과 (0.10ms, 30.3MB)
테스트 5 〉	통과 (0.11ms, 30.1MB)
테스트 6 〉	통과 (0.12ms, 30MB)
```
