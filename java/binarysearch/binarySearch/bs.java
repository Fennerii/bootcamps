class bs{
    public static void main(String[] args) {
        int[] arr = {-1,0,3,5,9,12};

        int low = 0;
        int high = arr.length;
        int target = 9;
      

        while(low <= high){
            int mid = high / 2;

            if(arr[mid] == target){
                System.out.println(target);
            }

            if(arr[mid] < target){
                low = mid + 1;
            }

            else {
                high = mid - 1;
            }
        }


    }
}