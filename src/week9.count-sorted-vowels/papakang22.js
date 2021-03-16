/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    return recursive(1,new Array(5),n);
 };
 
 function recursive(i,arr,n){
     
     if(i == 1){
         arr.fill(1);
     }else{
         let temp = arr.slice();
         for(let n = temp.length - 1 ; n >= 0;n--){
             let num = 0;
             for(let m = n; m >= 0;m--){
                 num += temp[m];
             }
             temp[n] = num;
         }
         arr = temp;
     }
     
     if(i == n){
         return arr[0]+arr[1]+arr[2]+arr[3]+arr[4];
     }else{
         return recursive(i+1,arr,n);
     }
 }