function sortDecrease(arr){

    let sort = arr.sort();
    let reverse = sort.toReversed();

    //or
    let sort2 =((a,b) => b - a);

    return reverse;

}

const arr = [1,2,3,4,5];

console.log(sortDecrease(arr));