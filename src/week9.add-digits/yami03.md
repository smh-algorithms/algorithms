# Add Digits

https://leetcode.com/problems/add-digits/

## 코드 구현

```js
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  if (num < 10) return num;
  const sumNum = String(num).split('').reduce((p, c) => Number(p) + Number(c));

  return addDigits(sumNum);
};
```



## 결과 분석

**1101 / 1101** test cases passed.           Status: Accepted 
Runtime: **96 ms**Memory Usage: **40.4 MB**                 

재귀 연습 문제였는데
재귀호출 하는 부분도 return을 해줘야 최종에서도 return 값이 나올 수 있는 거 같다. 🤔
값이 전달 되는 그런 것인가? 의문

## 두번째 코드 구현

수식을 검색해서 찾아봄 

```js
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  if (num < 10) return num;
  return num % 9 === 0 ? 9 : num % 9;
};
```



## 결과 분석

Runtime: **84 ms**Memory Usage: **40 MB**     

앞전보다 좀 더 빨라졌다. 



## 참고

* [Proof for sum of digits of a number until sum is a single number](https://math.stackexchange.com/a/3032159)
*  [How to prove the divisibility rule for 3 [casting out threes]](https://math.stackexchange.com/a/341213)

![설명 그림](/Users/seula/Documents/study/algorithms/src/week9.add-digits/assets/add-digits.png)

