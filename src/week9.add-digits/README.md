> 출처: https://leetcode.com/problems/add-digits/ (LeetCode, 난이도 easy)

## Description

Given an integer `num`, repeatedly add all its digits until the result has only one digit, and return it.

## Examples

### Example 1

```
Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2
Since 2 has only one digit, return it.
```

### Example 2

```
Input: num = 0
Output: 0
```

## Constraints

- <code>0 <= num <= 2^31^ - 1</code>

**Follow up**: Could you do it without any loop/recursion in `O(1)` runtime?
