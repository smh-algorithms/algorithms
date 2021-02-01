/**
 * @param {number[][]} grid
 * @return {number}
 */
// Runtime: 160 ms, faster than 6.84% of JavaScript online submissions for Rotting Oranges.
// Memory Usage: 40.9 MB, less than 65.23% of JavaScript online submissions for Rotting Oranges.
var orangesRotting = function(grid) {
    let min = 0;
    
    while(!distinction(grid)){ // 싱싱한 오렌지가 남아있는지 판별
        min++;
        grid = infection(grid); //상한 오렌지 주변 감염

        if(grid == null) { //불가능일 경우
            min = -1;
            break;
        }
        
    }
    
    return min;
};

function infection(grid){ // 감염 함수
    
    const orgGrid = new Array();
    
    for(let i = 0 ; i < grid.length;i++){ //배열 복사
        const copy = grid[i].slice(0);
        orgGrid.push(copy);
    }
    
    //복사한 grid로 for문을 돌림 그냥 grid로 하면 값이 변하여 계속 감염 시킬 수 있음
    for(let i = 0; i < orgGrid.length;i++){
        for(let j = 0 ; j < orgGrid[i].length; j++){
            let orange = orgGrid[i][j];
            if(orange == 2){ // 상한 오렌지일 경우 상하좌우 감염

                if(i > 0){ //상단 감영 첫번째 줄 제외 
                  if(grid[i-1][j] != 0) grid[i-1][j] = 2;
                }
                if(i < orgGrid.length - 1){//하단 감염 마지막 줄 제외
                   if(grid[i+1][j] != 0) grid[i+1][j] = 2; 
                }
                if(j > 0){ //좌측 감염 제일 우측 제외 
                   if(grid[i][j-1] != 0) grid[i][j-1] = 2; 
                }
                if(j < orgGrid[i].length - 1){ //우측 감염 제일 좌측 제외
                    if(grid[i][j+1] != 0) grid[i][j+1] = 2;
                }

            }
        }
    }

     //기존과 변화가 없을 경우 모든 오렌지를 감염시킬수 없다.
    if(orgGrid.toString() == grid.toString()) return null;
    else return grid;
}

function distinction(grid){ //오렌지 판별
    let bool = true; //싱싱한 오렌지가 없을 경우 true
    for(let i = 0 ; i < grid.length;i++){
        if(grid[i].indexOf(1) != -1){
            bool = false;
            break;
        }
    }
    
    return bool
}