import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.StringTokenizer;


//메모리 : 54152KB , 시간 1480ms
public class Main {
	public static void main(String[] args) throws Exception {
		entryLogs();
	}
	
	public static void entryLogs() throws IOException {
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		int n = Integer.parseInt(st.nextToken());
		Map<String,String> map = new HashMap<>();
		for(int i = 0 ; i < n;i++) {
			st = new StringTokenizer(br.readLine());
			String name = st.nextToken();
			String method = st.nextToken();
			if(method.equals("enter")) {
				map.put(name,name);
			}else {
				map.remove(name);
			}
		}
		
		Object[] mapKey = map.keySet().toArray();
		Arrays.sort(mapKey, Collections.reverseOrder());
		
		for(Object name : mapKey) {
			System.out.println((String)name);
		}
		
	}
}