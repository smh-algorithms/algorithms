
// 테스트 1 〉	실패 (시간 초과)
// 테스트 2 〉	통과 (0.22ms, 30.1MB)
// 테스트 3 〉	통과 (0.18ms, 30.1MB)
// 테스트 4 〉	통과 (0.18ms, 30.1MB)
function solution(tickets) {
    let sortedTickets = sortTickets(tickets);
    return sortedTickets;
}

function sortTickets(tickets){
    let curr = "ICN"; //현재 출발지점
    let sortedTickets = []; //정렬된 티켓
    let answer = ["ICN"]; // result 
    let tickets_len = tickets.length; //기존 티켓 길이
    let rejectIdx = []; //반려된 인덱스 (다음 출발지가 없을때)
    let visitedIdx = []; //방문한 인덱스
    let org_tickets = tickets.slice(); //티켓 복사
    
    while(sortedTickets.length != tickets_len){
        
        let arr = [];
        let arrIdx = -1;
        for(let i = 0; i < tickets.length; i++){
            if(visitedIdx.indexOf(i) == -1){ //방문한적 없고
                if(tickets[i][0] == curr){ //출발지점이 같으면
                    if(arr.length == 0 && rejectIdx.indexOf(i) == -1){ //반려되지않은 idx이며 비교할 arr가없을때
                        arr = tickets[i];
                        arrIdx = i;
                    }else if(arr[1] > tickets[i][1]  && rejectIdx.indexOf(i) == -1){//반려되지않은 idx이며 arr보다 우선순위가 높을 때
                        arr = tickets[i];
                        arrIdx = i;
                    }else if(visitedIdx.length + 1 == tickets.length){ //마지막 종착지
                        arr = tickets[i];
                        arrIdx = i;
                    }
                }
            }
        }
        
        if(sortedTickets.length != tickets_len -1 && !isNext(tickets,arr[1])){ //선택된 arr가 다음 목적지가없을 때 마지막은 제외 
            //초기화
            sortedTickets = [];
            curr = "ICN";
            answer = ["ICN"];
            tickets = org_tickets;
            rejectIdx.push(arrIdx);
            visitedIdx = [];
        }else{
            visitedIdx.push(arrIdx);
            curr = arr[1];
            sortedTickets.push(arr);
            answer.push(arr[1]);
        }
    }
    
    return answer;
}


function isNext(tickets, airport){
    let result = false;
    for(let i = 0 ;i < tickets.length; i++){
        if(tickets[i][0] == airport){
            result = true;
            break;
        }
    }
    return result;
}