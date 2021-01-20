function solution(operations) {
    var answer = [];
    let queue = [];
    
    operations.forEach((oper)=>{
       let operArray = oper.split(" ");
       if(operArray[0] == "I"){ //INSERT
        queue.push(Number(operArray[1])); 
       }else{ // DELETE
         if(queue.length > 0){
             arraySort(queue);
             if(operArray[1] == "1"){ //최댓값 삭제
                queue.shift();
             }else{ //최솟값 삭제
                queue.pop();
             }
         }
       }
    });
    
    arraySort(queue);
    if(queue.length > 0){
        answer[0] = queue[0];
        answer[1] = queue[queue.length - 1];
    }else{
        answer = [0,0];
    }
    
    
    return answer;
}

function arraySort(array){
    array.sort((a,b)=>{
        return b-a;
    })    
    return array;
}