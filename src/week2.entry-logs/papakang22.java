import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.StringTokenizer;

//메모리 : 54152KB , 시간 1480ms
public class papakang22 {
	public static void main(String[] args) throws IOException {
        entryLogs();
	}
	
	public static void entryLogs() throws IOException {
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		int n = Integer.parseInt(st.nextToken());
		Map<String,String> map = new HashMap<>();
		for(int i = 0 ; i < n;i++) {
			st = new StringTokenizer(br.readLine()); //입력받는다.
			String name = st.nextToken();
			String method = st.nextToken();
			if(method.equals("enter")) { // enter면 put
				map.put(name,name);
			}else { //leave면 remove
				map.remove(name);
			}
		}
		
		Object[] mapKey = map.keySet().toArray();
		Arrays.sort(mapKey, Collections.reverseOrder()); //역순정렬
		
		for(Object name : mapKey) {
			System.out.println((String)name);
		}
		
	}
}
