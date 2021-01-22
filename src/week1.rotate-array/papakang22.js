var rotate = function(nums, k) {
    for(let i = 0;i<k;i++){
        nums.unshift(nums.pop());    
    }
    return nums;
};