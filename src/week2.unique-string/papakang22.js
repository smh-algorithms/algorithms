
//Completed in 568ms
function findUniq(arr) {
    // do magic
    let answer;
    for(let i = 1; i < arr.length -1 ; i++){
      
      const strSet = new Set(arr[i].toLowerCase().split("")); //소문자로 변경 후 배열만든다음 중복을 제거
      const nextSet = new Set(arr[i+1].toLowerCase().split("")); //소문자로 변경 후 배열만든다음 중복을 제거
      const prevSet = new Set(arr[i-1].toLowerCase().split("")); //소문자로 변경 후 배열만든다음 중복을 제거
      
      const uniqStrArr = [...strSet]; //중복을 제거된 배열 생성
      const uniqNextStrArr = [...nextSet]; //중복을 제거된 배열 생성
      const uniqPrevStrArr = [...prevSet]; //중복을 제거된 배열 생성
      
      const str = uniqStrArr.sort().join("").trim(); //정렬후 문자열로 변환 및 공백제거
      const nextStr = uniqNextStrArr.sort().join("").trim(); //정렬후 문자열로 변환 및 공백제거
      const prevStr = uniqPrevStrArr.sort().join("").trim(); //정렬후 문자열로 변환 및 공백제거
      
      if(str != nextStr && str != prevStr){ // 양옆과 다르면 현재 순번인 문자열이 유니크값
        answer = arr[i];
        break;
      }else if(str != nextStr && str == prevStr){ // 다음 문자열만 다르면 다음 순번인 문자열이 유니크값
        answer = arr[i+1];
        break;
      }else if(str == nextStr && str != prevStr){ // 이전 문자열만 다르다면 이전 순번인 문자열이 유니크값
        answer = arr[i-1];
        break;
      }
    }
    
    return answer;
  }
  