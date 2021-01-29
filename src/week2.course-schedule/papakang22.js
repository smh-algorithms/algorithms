/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
//Runtime: 4308 ms, faster than 5.03% of JavaScript online submissions for Course Schedule.
//Memory Usage: 45 MB, less than 34.90% of JavaScript online submissions for Course Schedule.

var visited; // 방문된 수 array

var canFinish = function(numCourses, prerequisites) {
    let bool = true;
    
    prerequisites.sort((a,b)=>{ //array[i][0]에 대한 내림차순 정렬 
        if(a[0] == b[0]){
            return b[1] - a[1];
        }else{
            return b[0] - a[0];
        }
    });
    
    for(let i = 0 ; i < prerequisites.length;i++){
      const item = prerequisites[i];
      visited = new Array();
        
      bool = recursive(item,prerequisites);
      if(!bool) break;
    }
    
    return bool;
};

var recursive = function(courseArr,prerequisites){
    if(visited.indexOf(courseArr[1]) != -1){ // 수강해야할 코스가 이미 방문되었으면 (무한루프시)
        return false;
    }else{
        visited.push(courseArr[0]);
        const idx = findIdx(courseArr[1],prerequisites);
        if(idx == -1){ //수강해야할 과목이 전제조건이 없다면 return true;
            return true;
        }else{
            return recursive(prerequisites[idx],prerequisites);
        }
    }
}

var findIdx = function(num,prerequisites){ //2차원배열 indexOf
    let idx = -1;
    for(let i = 0 ; i < prerequisites.length; i++){
        if(prerequisites[i][0] == num){
            idx = i;
            break;
        }
    }
    
    return idx;
}
