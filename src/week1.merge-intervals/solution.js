var merge = function(intervals) {
    
    intervals.sort((a,b)=>{
        if(a[0] == b[0]){
            return a[1] - b[1]
        }else{
            return a[0]-b[0]
        }
    })

    
    let number = new Array();
    number.push([intervals[0][0],intervals[0][1]]);
    for(let i = 1 ; i < intervals.length;i++){
        for(let k = number.length-1 ; k < number.length;k++){
            if(intervals[i][0] <= number[k][1]){
                if(number[k][1] < intervals[i][1]){
                    number[k][1] = intervals[i][1]
                }
                break;
            }else{
                number.push([intervals[i][0],intervals[i][1]]);
                break;
            }
        }
    }
    
    return number;
};

