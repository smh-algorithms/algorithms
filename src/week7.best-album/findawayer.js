// https://programmers.co.kr/learn/courses/30/lessons/42579

// 테스트 1 〉	통과 (0.25ms, 30.1MB)
// 테스트 2 〉	통과 (0.25ms, 30.2MB)
// 테스트 3 〉	통과 (0.22ms, 30MB)
// 테스트 4 〉	통과 (0.22ms, 29.9MB)
// 테스트 5 〉	통과 (0.53ms, 30.1MB)
// 테스트 6 〉	통과 (0.87ms, 29.7MB)
// 테스트 7 〉	통과 (0.35ms, 30MB)
// 테스트 8 〉	통과 (0.32ms, 30.2MB)
// 테스트 9 〉	통과 (0.27ms, 29.9MB)
// 테스트 10 〉	통과 (0.40ms, 30MB)
// 테스트 11 〉	통과 (0.28ms, 30MB)
// 테스트 12 〉	통과 (0.34ms, 30.1MB)
// 테스트 13 〉	통과 (0.41ms, 30.1MB)
// 테스트 14 〉	통과 (0.39ms, 29.9MB)
// 테스트 15 〉	통과 (0.33ms, 30.2MB)

function solution(genres, plays) {
  // key: 장르
  // value: { count: 총재생횟수, members: [고유번호, 재생횟수] }
  const hashmap = genres.reduce((map, genre, index) => {
    const played = plays[index];
    if (map[genre]) {
      const data = map[genre];
      const { members } = data;
      // 내림차순 삽입
      let i = 0;
      while (members[i] && members[i][1] >= played) i += 1;
      data.count += played;
      members.splice(i, 0, [index, played]);
    } else {
      map[genre] = { count: played, members: [[index, played]] };
    }
    return map;
  }, {});

  return Object.values(hashmap) // 해시맵의 값 중
    .sort((a, z) => z.count - a.count) // 총 재생횟수가 높은 순으로 정렬
    .map(({ members }) => members.slice(0, 2).map(([index]) => index)) // 장르별 최대 재생된 2개 원소의 고유번호를 맵핑
    .flat(); // 장르별로 그룹핑된 2차원 배열을 병합
}

describe('best-album', () => {
  const genres = ['classic', 'pop', 'classic', 'classic', 'pop'];
  const plays = [500, 600, 150, 800, 2500];
  const output = [4, 1, 3, 0];
  it('creates best album like expected', () => {
    expect(solution(genres, plays)).toEqual(output);
  });
});
