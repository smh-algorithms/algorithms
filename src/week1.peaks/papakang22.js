function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A.length < 3){ //3 이하는 될수 없음.
        return 0;
    }
    
    let answer = 0;
    let idxArr = new Array();
    
    for(let i = 1;i < A.length - 1;i++){ // peak수의 idx배열 추가
        if(A[i-1] < A[i] && A[i] > A[i+1]){
            idxArr.push(i+1)        
        }
    }
    
    const divisor = getDivisor(A.length); //약수 구하기
    
    for(let i = 0 ; i < divisor.length; i++){
        const div = divisor[i];
        let subArr = new Array();
        let flag = false;
        for(let j =1; j <= A.length;j++){
            if(j % div == 0){ // 약수의 개수로 떨어지는 배열 생성
                subArr.push(j);
                for(let z = 0; z < idxArr.length;z++){ //만들어진 배열에 peak이 있나 확인
                    if(subArr.indexOf(idxArr[z]) != -1){
                        flag = true;
                        break;
                    }
                }
                subArr = new Array();
                if(!flag) { //peak이 없으면 break; 
                    break;
                }
            }else{
               subArr.push(j); 
            }
        }
        
        if(flag){ //모든 배열에 peak이 존재할때
            answer = A.length / div;
            break;
        }
    }
   
    return answer;    
}

function getDivisor(num){ //약수 구하기 
    let result = new Array();
    for(let i = 1 ; i <= num/2; i++){
        if(num%i == 0 && i > 2){
            result.push(i);
        }
    }
    
    result.push(num);
    
    return result;
}