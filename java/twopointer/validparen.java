

class validparen{
    public static void main(String args[]){
        String s = "Hello It's Me! ELLO IT$$ : ME";
        String start = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        char [] charr = start.toCharArray();

        int r = charr.length - 1;
        int l = charr.length;

        while (l < r){
            if (charr[l] != charr[r]){
                return false;
            }
        }
        return true;
    }
}