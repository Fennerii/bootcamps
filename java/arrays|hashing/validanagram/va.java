import java.util.Arrays;

public class va{
    public static void main(String[] args) {
        String s = "anagram";
        char[] sarr = s.toCharArray();
        String t = "nagaram";
        char[] tarr = t.toCharArray();

        System.out.println(Arrays.toString(sarr));
        System.out.println(Arrays.toString(tarr));

        for(int i = 0; i < sarr.length - 1; i>=0; i--){
            System.out.println(sarr[i]);
            
        }

    }
}
