# Greatest Common Divisor

> 출처: https://www.hackerearth.com/practice/data-structures/advanced-data-structures/segment-trees/practice-problems/algorithm/cool-gcd-789acd8e/ (Hackerearth, 난이도 medium)

## Description

You are given array A. There are 4 types of operations associated with it:

- 1 l r x, for each i ∈ [l, r] replace ai with the value of x.
- 2 l r x, for each i ∈ [l, r] replace ai with the value of the gcd(ai, x) function.
- 3 l r, print the value of max ai, l ≤ i ≤ r.
- 4 l r, print the value of al + al+1 + ... + ar.

A greatest common divisor (gcd(a, b)) of two positive integers a and b is equal to the biggest integer d such that both integers a and b are divisible by d.

## Input format

The first line contains two integers n, m (1 ≤ n, m ≤ 105) - the number of array elements and the number of queries.
The second line contains n positive integers a1, a2, ..., an - initial state of the array.(1 ≤ max Ai ≤ 109, 1 ≤ i ≤ n)
Next m lines contain the description of the queries, one per line. Queries are formatted the same way as in the problem statement above.
It is guaranteed that 1 ≤ l ≤ r ≤ n and 1 ≤ x ≤ 109.

## Output format

For each third and fourth query type, print the answer for this query in a separate line.

| SAMPLE INPUT | SAMPLE OUTPUT |
| ------------ | ------------- |
| 4 6          | 12            |
| 10 12 6 8    | 36            |
| 3 1 4        | 4             |
| 4 1 4        | 8             |
| 2 2 4 4      |
| 3 2 4        |
| 1 1 4 2      |
| 4 1 4        |

## Explanation

Array before queries is [10,12,6,8]

Answer for queries 3 1 4 = 12, because max(10,12,6,8) = 12

Answer for queries 4 1 4 = 36, because 10 + 12 + 6 + 8 = 36

After queries-update 2 2 4 4 array is [10, 4, 2, 4]

Answer for queries 3 2 4 = 4, because max(4,2,4) = 4

After queries-update 1 1 4 2 array is [2, 2, 2, 2]

Answer for queries 4 1 4 = 36, because 2 + 2 + 2 + 2 = 8
