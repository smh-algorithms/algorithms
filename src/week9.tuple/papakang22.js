/* 테스트 1 〉	통과 (0.22ms, 30.1MB)
테스트 2 〉	통과 (0.20ms, 30MB)
테스트 3 〉	통과 (0.16ms, 30.1MB)
테스트 4 〉	통과 (0.26ms, 30.1MB)
테스트 5 〉	통과 (0.64ms, 30.2MB)
테스트 6 〉	통과 (0.71ms, 30.1MB)
테스트 7 〉	통과 (8.45ms, 33.5MB)
테스트 8 〉	통과 (22.67ms, 35.2MB)
테스트 9 〉	통과 (11.48ms, 34MB)
테스트 10 〉	통과 (39.77ms, 34.8MB)
테스트 11 〉	통과 (32.41ms, 35.2MB)
테스트 12 〉	통과 (44.43ms, 35.7MB)
테스트 13 〉	통과 (44.47ms, 36MB)
테스트 14 〉	통과 (45.29ms, 35.9MB)
테스트 15 〉	통과 (0.10ms, 30.1MB) */

function solution(s) {
    var answer = [];
    
    let sArr = s.substring(2,s.length - 2).split("},{");
    sArr.sort((a,b) =>{
        return a.length - b.length;
    })
    
    sArr.forEach((str)=>{
        let arr = str.split(",").map(i => Number(i));
        answer.push(dupDel(answer,arr));
    })

    return answer;
}

function dupDel(arr1, arr2){ //중복숫자 제거
    
    arr1.forEach((str) =>{
        let idx = arr2.indexOf(str);
        if(idx != -1){
            arr2.splice(idx, 1);
        }
    })
    
    return Number(arr2.join(""))
}