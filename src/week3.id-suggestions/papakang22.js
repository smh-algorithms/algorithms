// 정확성  테스트
// 테스트 1 〉	통과 (0.23ms, 30.1MB)
// 테스트 2 〉	통과 (0.31ms, 30.3MB)
// 테스트 3 〉	통과 (0.25ms, 30.2MB)
// 테스트 4 〉	통과 (1.51ms, 30.3MB)
// 테스트 5 〉	통과 (0.24ms, 30.2MB)
// 테스트 6 〉	통과 (0.24ms, 30.1MB)
// 테스트 7 〉	통과 (0.24ms, 30MB)
// 테스트 8 〉	통과 (0.25ms, 30.2MB)
// 테스트 9 〉	통과 (0.23ms, 30.2MB)
// 테스트 10 〉	통과 (0.26ms, 30.3MB)
// 테스트 11 〉	통과 (0.23ms, 30.1MB)
// 테스트 12 〉	통과 (0.27ms, 30.1MB)
// 테스트 13 〉	통과 (0.25ms, 30.2MB)
// 테스트 14 〉	통과 (0.26ms, 30.1MB)
// 테스트 15 〉	통과 (0.27ms, 30.2MB)
// 테스트 16 〉	통과 (0.30ms, 30.1MB)
// 테스트 17 〉	통과 (0.36ms, 30.1MB)
// 테스트 18 〉	통과 (0.47ms, 30.2MB)
// 테스트 19 〉	통과 (0.97ms, 30.2MB)
// 테스트 20 〉	통과 (0.40ms, 30.2MB)
// 테스트 21 〉	통과 (0.67ms, 30.2MB)
// 테스트 22 〉	통과 (0.73ms, 30.2MB)
// 테스트 23 〉	통과 (0.76ms, 30.2MB)
// 테스트 24 〉	통과 (0.24ms, 30.3MB)
// 테스트 25 〉	통과 (0.79ms, 30.3MB)
// 테스트 26 〉	통과 (0.67ms, 30.2MB)
function solution(new_id) {
    var answer = '';
    
    //1단계
    new_id = new_id.toLowerCase(); //소문자 변경
    //2단계
    const regex = /[^a-z0-9-_.]/gi
    new_id = new_id.replace(regex,''); //영어 소문자, 숫자, -,_,. 제외한 나머지 문자 제거
    //3단계
    while(new_id.indexOf('..') != -1){ // ..이 없을때 까지 replace
        new_id = new_id.replace('..','.');
    }
    //4단계
    new_id = step4(new_id);
    //5단계
    new_id = new_id == '' ? 'a': new_id;
    //6단계
    if(new_id.length >= 16){
        new_id = new_id.substr(0,15); //15글자로 줄임
        new_id = step4(new_id); //4단계 재실행
    }
    //7단계
    while(new_id.length < 3){ //2글자 이하일때 마지막 문자 붙힘
        new_id += new_id.charAt(new_id.length -1);
    }
    
    
    return new_id;
}

function step4(new_id){
    if(new_id != ''){
        //첫번째 문자가 .일시 삭제
        new_id = new_id.startsWith('.')?new_id.substr(1,new_id.length) : new_id;
        //마지막 문자가 .일시 삭제
        new_id = new_id.endsWith('.')?new_id.substr(0,new_id.length - 1) : new_id;
    }
    return new_id;
}