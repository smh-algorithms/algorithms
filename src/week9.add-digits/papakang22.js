// Runtime: 96 ms, faster than 77.23% of JavaScript online submissions for Add Digits.
// Memory Usage: 40.8 MB, less than 10.69% of JavaScript online submissions for Add Digits.

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while(num.toString().length > 1){
        let arr = num.toString().split("");
        let sum = 0;
        arr.forEach((i) =>{
            sum += Number(i);
        })
        num = sum;
    }
    
    return num;
};