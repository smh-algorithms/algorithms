> 출처: https://leetcode.com/problems/word-search/ (LeetCode, 난이도 medium)

## Description

Given an m x n `board` and a `word`, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

## Examples

```
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
```

```
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
```

```
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
```

## Constraints

- `m == board.length`
- `n = board[i].length`
- `1 <= m, n <= 200`
- <code>1 <= word.length <= 10<sup>3</sup></code>
- `board` and `word` consists only of lowercase and uppercase English letters.
