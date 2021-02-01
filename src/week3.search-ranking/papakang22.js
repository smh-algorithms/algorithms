
// 정확성  테스트
// 테스트 1 〉	통과 (0.68ms, 30.1MB)
// 테스트 2 〉	통과 (0.63ms, 30.1MB)
// 테스트 3 〉	통과 (2.44ms, 30.2MB)
// 테스트 4 〉	통과 (15.67ms, 34.4MB)
// 테스트 5 〉	통과 (93.17ms, 35.2MB)
// 테스트 6 〉	통과 (248.47ms, 34.5MB)
// 테스트 7 〉	통과 (64.00ms, 34.3MB)
// 테스트 8 〉	통과 (512.84ms, 35.8MB)
// 테스트 9 〉	통과 (527.56ms, 35.3MB)
// 테스트 10 〉	통과 (539.66ms, 36.3MB)
// 테스트 11 〉	통과 (102.17ms, 35.3MB)
// 테스트 12 〉	통과 (272.48ms, 34.3MB)
// 테스트 13 〉	통과 (68.66ms, 34.6MB)
// 테스트 14 〉	통과 (536.94ms, 36.1MB)
// 테스트 15 〉	통과 (535.98ms, 34.7MB)
// 테스트 16 〉	통과 (95.11ms, 34.9MB)
// 테스트 17 〉	통과 (275.13ms, 34.5MB)
// 테스트 18 〉	통과 (554.13ms, 34.7MB)
// 효율성  테스트
// 테스트 1 〉	실패 (시간 초과)
// 테스트 2 〉	실패 (시간 초과)
// 테스트 3 〉	실패 (시간 초과)
// 테스트 4 〉	실패 (시간 초과)

function solution(info, query) {
    let answer = [];
    
    query.forEach((q) => {
       const ansArr = info.filter((data) =>{ //info filter
           const dataArr = data.split(" ");
           const qArr = q.split(" ").filter((qry) =>{return qry != 'and'});
           
           if(comp(dataArr[0],qArr[0]) && comp(dataArr[1],qArr[1]) && comp(dataArr[2],qArr[2])
              && comp(dataArr[3],qArr[3]) && compNum(dataArr[4],qArr[4])){ //모든조건 만족시 return true;
               return true;
           }else{ //아니면 false
               return false;
           }
       }) 
       answer.push(ansArr.length);
    });
    
    return answer;
}

function compNum(num1,num2){
    if(Number(num1) >= Number(num2)){
        return true;
    }else{
        return false;
    }
}

function comp(str1,str2){
    if(str2 == '-'){
        return true;
    }else{
        return str1 == str2;
    }
}