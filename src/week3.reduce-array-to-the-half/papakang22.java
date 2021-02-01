import java.util.Map;
import java.util.Map.Entry;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

// Runtime: 42 ms, faster than 40.74% of Java online submissions for Reduce Array Size to The Half.
// Memory Usage: 55.2 MB, less than 28.70% of Java online submissions for Reduce Array Size to The Half.
class papakang22 {
    public int minSetSize(int[] arr) {
        Integer half = arr.length % 2 == 0 ? arr.length / 2 : arr.length / 2 + 1;
        
        Map<Integer,Integer> map = new HashMap<Integer,Integer>();
        for(int num : arr){ //맵에다 개수 취합
            Integer cnt;
            if(map.get(num) != null){
                cnt = map.get(num) + 1;
            }else{
                cnt = 1;
            }  
            map.put(num,cnt);
        }
        
        List<Entry<Integer, Integer>> list_entries = new ArrayList<Entry<Integer, Integer>>(map.entrySet());

		// 비교함수 Comparator를 사용하여 내림차순으로 정렬
		Collections.sort(list_entries, new Comparator<Entry<Integer, Integer>>() {
			// compare로 값을 비교
			public int compare(Entry<Integer, Integer> obj1, Entry<Integer, Integer> obj2) {
				// 내림 차순 정렬
				return obj2.getValue().compareTo(obj1.getValue());
			}
		});
        
        Integer hap = 0; //없어질 개수
        List<Integer> answer = new ArrayList<Integer>();
        for(Entry<Integer, Integer> entry : list_entries) {
			Integer key = entry.getKey();
            Integer val = entry.getValue();
            hap += val;
            answer.add(key);
            
            if(half <= hap){ //없어질 갯수가 배열길이의 반 이상일 경우 break
                break;
            }
		}
    
        return answer.size();
    }
}