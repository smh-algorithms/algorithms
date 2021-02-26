/**
 * @param {string} s
 * @return {string}
 */
// Runtime: 80 ms, faster than 49.37% of JavaScript online submissions for Decode String.
// Memory Usage: 38.3 MB, less than 86.73% of JavaScript online submissions for Decode String.
var decodeString = function(s) {
    let answer = "";
    
    let roopnum = new Array(); // 루프돌릴 숫자 배열
    let numstr = ""; // 1자리 수 이상일 경우
    let roopidx = -1; // 배열 인덱스
    let rooptxt = new Array(); // 루프돌릴 텍스트 배열
    
    for(let i = 0 ; i < s.length; i++){
        const str = s[i];
        if(!isNaN(str)){
           numstr += str;          
        }else{
            if(str == "[" && numstr != ""){ // 루프시작시 numstr을 추가시켜줌
                 roopnum.push(Number(numstr));
                 rooptxt.push("");
                 roopidx++;
                 numstr = "";
            }
            
            if(roopidx > -1){
                if(str == "]"){
                    if(roopidx > 0){ //중첩된 roop 일경우
                        rooptxt[roopidx-1] += multipleStr(rooptxt.pop(),roopnum.pop());
                    }else{
                        answer += multipleStr(rooptxt.pop(),roopnum.pop());
                    }
                    roopidx--;
                }else if(str != "["){
                    rooptxt[roopidx] += str;
                }
            }else{
                answer += str;
            }
        }
    }
    
    return answer;
};
    
var multipleStr = function(str,num){ // 문자루프
    let result = "";
    for(let i = 0 ; i < num; i++){
        result += str;
    }
    return result;
}