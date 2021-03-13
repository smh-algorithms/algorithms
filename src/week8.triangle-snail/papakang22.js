// 테스트 1 〉	통과 (0.16ms, 30.1MB)
// 테스트 2 〉	통과 (0.18ms, 30.1MB)
// 테스트 3 〉	통과 (0.21ms, 30.2MB)
// 테스트 4 〉	통과 (7.71ms, 32.6MB)
// 테스트 5 〉	통과 (7.73ms, 32.6MB)
// 테스트 6 〉	통과 (8.35ms, 32.3MB)
// 테스트 7 〉	통과 (645.58ms, 79.2MB)
// 테스트 8 〉	통과 (654.09ms, 77.4MB)
// 테스트 9 〉	통과 (683.42ms, 77.7MB)

function solution(n) {
    var answer = [];
    let ansArr = new Array(n);
    let count = 0; //총 갯수 
    
    for(let i = n ;i > 0;i--){
        let arr = new Array(i);
        ansArr[i-1] = arr;
        count += i;
    }
    
    let lastNum = 0;
    
    //진행방향 변수
    const DOWN = 'D'; // 아래
    const UP = 'U'; //위
    const RIGHT = 'R'; //오른쪽
    
    let curr = DOWN; //현재 진행방향
    let floor = 1; //현재 층수
    
    for(let i = 1; i <= count; i++){
        const arrIdx = floor-1;
        if(curr == DOWN){
            ansArr[arrIdx] = shiftFill(ansArr[arrIdx],i);
            if(floor == n || isFull(ansArr[arrIdx+1])){ // 마지막층이거나 다음층수의 배열이 꽉 찼다면
                curr = RIGHT;
            }else{
                floor++;
            }
        }else if(curr == UP){
            ansArr[arrIdx] = pushFill(ansArr[arrIdx],i);
            if(floor == 1 || isFull(ansArr[arrIdx-1])){ // 처음층이거나 이전층수의 배열이 꽉 찼다면
                curr = DOWN;
                floor++;
            }else{
                floor--;
            }
        }else{
            ansArr[arrIdx] = shiftFill(ansArr[arrIdx],i);
            if(isFull(ansArr[arrIdx])){ // 현재 층수의 배열이 꽉 찼다면
                curr = UP;
                floor--;
            }
        }
    }
    
    for(let i = 0 ; i < ansArr.length;i++){
        for(let j = 0 ; j < ansArr[i].length;j++){
            answer.push(ansArr[i][j]);
        }
    }
    
    return answer;
}

function shiftFill(arr, num){
    for(let i = 0;i < arr.length; i++){
        if(!arr[i]){ // 비어있으면
            arr[i] = num;
            break;
        }
    }
    return arr;
}

function pushFill(arr, num){
    
    for(let i = arr.length - 1 ;i >= 0; i--){
        if(!arr[i]){ // 비어있으면
            arr[i] = num;
            break;
        }
    }
    return arr;
}


function isFull(arr){ // 꽉 채워져있는지 판별
    let result = true;
    for(let i = 0 ; i < arr.length;i++){
        if(!arr[i]){
            result = false;
            break;
        }
    }
    return result;
}