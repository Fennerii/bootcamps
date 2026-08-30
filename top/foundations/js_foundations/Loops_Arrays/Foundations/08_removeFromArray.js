function removeFromArray(arr,num){

    if(!arr.includes(num)){
        return "Number not included";
    }
        let filter = arr.filter(item => item !== num);

        return filter;
}



let arr = [1,2,3,4,3,5];

console.log(removeFromArray(arr,3));