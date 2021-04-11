// Runtime: 80 ms, faster than 96.14% of JavaScript online submissions for Shuffle the Array.
// Memory Usage: 40.8 MB, less than 17.91% of JavaScript online submissions for Shuffle the Array.
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
    let answer = [];
    for(let i = 0 ; i < nums.length / 2 ; i++){
        answer.push(nums[i]);
        answer.push(nums[i+n]);
    }
    return answer;
};