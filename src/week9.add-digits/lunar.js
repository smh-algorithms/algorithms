// 출처: https://leetcode.com/problems/add-digits/ (LeetCode, 난이도 easy)

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.

// 0 <= num <= 2^31 - 1

function addDigits(num) {
  const digitArray = Array.from(num + "", (x) => x * 1);
  let result = 0;
  digitArray.forEach((item) => (result = item + result));

  return result;
}

function checkLength(num) {
  return (num + "").length === 1;
}

function solution(num) {
  if (num < 10) {
    return num;
  }

  let result = addDigits(num);
  let length = checkLength(result);

  while (!length) {
    result = addDigits(result);
    length = checkLength(result);
  }

  console.log("result1 : ", result);
  return result;
}

function solution2(num) {
  if (num < 10) {
    return num;
  }

  const remainder = num % 9;
  let result = remainder === 0 ? 9 : remainder;

  console.log("result2 : ", result);
  return result;
}
