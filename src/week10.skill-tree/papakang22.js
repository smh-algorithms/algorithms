// 테스트 1 〉	통과 (0.10ms, 30MB)
// 테스트 2 〉	통과 (0.11ms, 30MB)
// 테스트 3 〉	통과 (0.12ms, 30.2MB)
// 테스트 4 〉	통과 (0.10ms, 30.2MB)
// 테스트 5 〉	통과 (0.11ms, 30.1MB)
// 테스트 6 〉	통과 (0.11ms, 30.2MB)
// 테스트 7 〉	통과 (0.11ms, 30.3MB)
// 테스트 8 〉	통과 (0.12ms, 30.1MB)
// 테스트 9 〉	통과 (0.12ms, 30MB)
// 테스트 10 〉	통과 (0.13ms, 30.1MB)
// 테스트 11 〉	통과 (0.11ms, 30.2MB)
// 테스트 12 〉	통과 (0.12ms, 30.1MB)
// 테스트 13 〉	통과 (0.13ms, 30.1MB)
// 테스트 14 〉	통과 (0.12ms, 30.2MB)
function solution(skill, skill_trees) {
    var answer = 0;
    let skillArr = skill.split("");
    for(let i = 0 ; i < skill_trees.length; i++){
        let index = -1; // 이전 스킬의 index값
        let notIndex = skillArr.length; // 배우지않을 스킬 인덱스값 
        let bool = true;
        for(let j = 0 ; j < skillArr.length; j++){
            let sk = skillArr[j];
            let position = skill_trees[i].indexOf(sk);
            if(position >= index || position == -1){
                if(position == -1) notIndex = j; // 배우지않을 스킬이면 notIndex에 j 대입
                if(position != -1 && j > notIndex){ // 이전스킬중 배우지않을 스킬이 있을 시 false
                    bool = false;
                    break;
                }
                index = position;
            }else{ // 스킬순서대로 안배웠을 시
                bool = false;
                break;
            }
        }
        if(bool) answer++;
    }
    
    return answer;
}