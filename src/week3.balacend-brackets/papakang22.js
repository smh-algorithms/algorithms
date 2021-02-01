
// 정확성  테스트
// 테스트 1 〉	통과 (0.07ms, 30.1MB)
// 테스트 2 〉	통과 (0.06ms, 30.1MB)
// 테스트 3 〉	통과 (0.07ms, 30MB)
// 테스트 4 〉	통과 (0.06ms, 29.9MB)
// 테스트 5 〉	통과 (0.07ms, 30MB)
// 테스트 6 〉	통과 (0.07ms, 30.1MB)
// 테스트 7 〉	통과 (0.07ms, 30MB)
// 테스트 8 〉	통과 (0.08ms, 29.4MB)
// 테스트 9 〉	통과 (0.08ms, 30.2MB)
// 테스트 10 〉	통과 (0.07ms, 30MB)
// 테스트 11 〉	통과 (0.07ms, 30MB)
// 테스트 12 〉	통과 (0.08ms, 29.9MB)
// 테스트 13 〉	통과 (0.09ms, 30MB)
// 테스트 14 〉	통과 (0.06ms, 29.9MB)
// 테스트 15 〉	통과 (0.08ms, 30MB)
// 테스트 16 〉	통과 (0.37ms, 30.1MB)
// 테스트 17 〉	통과 (0.08ms, 30.2MB)
// 테스트 18 〉	통과 (0.09ms, 30MB)
// 효율성  테스트
// 테스트 1 〉	통과 (3.55ms, 32.9MB)
// 테스트 2 〉	통과 (3.55ms, 33MB)

function solution(s){
    let answer = true;
    let open = 0;
    let close = 0;
    
    for(let i = 0 ; i < s.length;i++){
        const str = s[i];
        if(str === '('){
            open++;
        }else{
            close++;
            if(open < close){//열려있는 괄호보다 닫는 괄호가 많을 시
                answer = false;
                break;
            }
        }
    }
    
    if(answer) answer = open != close ? false : true;
    
    return answer;
}