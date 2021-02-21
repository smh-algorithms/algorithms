> 출처: https://www.codewars.com/kata/5897eebff3d21495a70000df (CodeWars, 5 kyu)

Consider a bishop, a knight and a rook on an `n × m` chessboard. They are said to form a triangle if each piece attacks exactly one other piece and is attacked by exactly one piece.

Calculate the number of ways to choose positions of the pieces to form a triangle.

Note that the bishop attacks pieces sharing the common diagonal with it; the rook attacks in horizontal and vertical directions; and, finally, the knight attacks squares which are two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from its position.

## Example

For `n = 2` and `m = 3`, the output should be `8`.

## Input/Output

- [input] integer n | Constraints: `1 ≤ n ≤ 40`.
- [input] integer m | Constraints: `1 ≤ m ≤ 40`, `3 ≤ n x m`.
- [output] an integer
