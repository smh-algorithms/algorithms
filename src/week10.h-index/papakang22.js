// 테스트 1 〉	통과 (0.36ms, 30.1MB)
// 테스트 2 〉	통과 (0.29ms, 29.9MB)
// 테스트 3 〉	통과 (0.47ms, 30.1MB)
// 테스트 4 〉	통과 (0.43ms, 30.1MB)
// 테스트 5 〉	통과 (0.52ms, 29.7MB)
// 테스트 6 〉	통과 (0.57ms, 30.1MB)
// 테스트 7 〉	통과 (0.28ms, 30.3MB)
// 테스트 8 〉	통과 (0.11ms, 30.1MB)
// 테스트 9 〉	통과 (0.13ms, 30MB)
// 테스트 10 〉	통과 (0.31ms, 30.1MB)
// 테스트 11 〉	통과 (0.64ms, 30.1MB)
// 테스트 12 〉	통과 (0.14ms, 30MB)
// 테스트 13 〉	통과 (0.59ms, 30MB)
// 테스트 14 〉	통과 (0.54ms, 30.1MB)
// 테스트 15 〉	통과 (0.56ms, 30MB)
// 테스트 16 〉	통과 (0.09ms, 30.1MB)
function solution(citations) {
    var answer = -1;
    citations.sort((a,b) =>{
        return b-a;
    });
    
    for(let i = 0 ; i < citations.length; i++){
        if(citations[i] < i + 1){
            answer = i;
            break;
        }
    }
    
    return answer > -1 ? answer : citations.length;
}