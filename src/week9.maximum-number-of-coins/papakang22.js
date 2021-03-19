// Runtime: 2064 ms, faster than 5.38% of JavaScript online submissions for Maximum Number of Coins You Can Get.
// Memory Usage: 49.6 MB, less than 69.89% of JavaScript online submissions for Maximum Number of Coins You Can Get.
/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    let answer = 0;
    
    piles.sort((a,b) =>{
        return b-a; 
    });
    
    while(piles.length > 0){
        piles.shift(); //엘리스 픽
        answer += piles.shift(); //나의 픽
        piles.pop(); //밥의 픽
    }
    
    return answer;
};