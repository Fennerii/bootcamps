// filter 

const arr = [5,3,8,1];

function filterRange(arr, a, b){
    const filterRange = arr.filter(n => n >= a && n <= b )

    return filterRange;
}

console.log(filterRange(arr,1,4));