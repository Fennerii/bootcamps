class twosum {
    public static void main(String[] args) {
        int[] arr = {2,7,11,15};
        int target = 9;

        for(int i = 0; i < arr.length; i++){
            System.out.println("i " + arr[i]);
            

            for(int j = i; j < arr.length; j++){
                System.out.println("j " + arr[j]);

                if(arr[i] + arr[j] == target){
                    System.out.println("Target: " + target + i + j);
                    break;
                }
            }
        }    
    }
}