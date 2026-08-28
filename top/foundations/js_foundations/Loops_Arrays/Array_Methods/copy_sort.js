function copySort(arr){

    //slice doesn't change the original array
    return arr.slice().sort();

}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySort(arr);

console.log(sorted);