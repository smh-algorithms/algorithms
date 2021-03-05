# Speed cameras

https://programmers.co.kr/learn/courses/30/lessons/42884

## 구현 방법

1. start 지점(`routes[i][0]`) 을 기준으로 정렬한다.
2. 카메라값의 초기값은 1
3. 최소나간시점값 (가장 작은 나간 시점 값)
   1. 초기값은 `routes[0][1]` 값이 된다.
   2. 최소 나간 시점값과 다음 차량의 시작지점값을 비교
      1. 최소 나간 시점값 보다 다음 차량 시작 값이 더 클 경우 겹치지 않는다 -> 최소 나간 시점 값을 다음 차량 나간 시점값으로 할당한다. 카메라 값을 업데이트 한다.
      2. 최소 나간 시점값이 다음 차량시작 값보다 작을 경우 겹친다 -> 현재 최소 나간 시점값과 다음 차량 나간 시점값중 작은 값을 최소 나간 시점값으로 업데이트 한다.

## 코드 구현

```js
function solution(routes) {
  let count = 1;
  
  routes.sort((a, b) => a[0] - b[0]);
  let minEndPoint = routes[0][1];
  
  for (let i = 1; i < routes.length; i++) {
    if (minEndPoint < routes[i][0]) {
      count++;
      minEndPoint = routes[i][1]
    } else {
      minEndPoint = Math.min(minEndPoint, routes[i][1])
    }
  }

  return count;
}
```

## 결과 분석

```
테스트 1 〉통과 (0.09ms, 30MB)
테스트 2 〉통과 (0.14ms, 29.7MB)
테스트 3 〉통과 (0.14ms, 30.1MB)
테스트 4 〉통과 (0.15ms, 30.2MB)
테스트 5 〉통과 (0.15ms, 29.7MB)
테스트 1 〉통과 (1.39ms, 30.4MB)
테스트 2 〉통과 (0.87ms, 30.1MB)
테스트 3 〉통과 (2.85ms, 31.8MB)
테스트 4 〉통과 (0.23ms, 30.1MB)
테스트 5 〉통과 (3.39ms, 32MB)
```

😄