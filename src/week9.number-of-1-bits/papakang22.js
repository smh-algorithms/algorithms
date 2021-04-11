/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// Runtime: 80 ms, faster than 97.20% of JavaScript online submissions for Number of 1 Bits.
// Memory Usage: 40.5 MB, less than 13.86% of JavaScript online submissions for Number of 1 Bits.
var hammingWeight = function(n) {
    return n.toString(2).split("0").join("").split("").length;
};