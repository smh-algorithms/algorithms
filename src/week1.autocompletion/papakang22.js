function solution(words) {
    var answer = 0;
    words.sort();
    
    let array = new Array(words.length);
    array.fill(0);
 
    words.forEach((word,idx) =>{
       let flag;
       for(let i = 0 ; i < word.length;i++){
           answer++
           if(i == word.length - 1) break;
           if(!schStartWithWord(word.substr(0,i+1),words,idx)){
               break;
           }
       }
    })
    
    return answer;
}

function schStartWithWord(word,words,idx){
    let flag = false;
    
    for(let i = 0 ; i < words.length; i++){
      let data = words[i];
      if(idx != i){  //자기자신 제외
          if(data.startsWith(word)){
             flag = true;
             break; 
          }
          if(i > idx){
              break;
          }
      }
    }
    
    return flag;
}