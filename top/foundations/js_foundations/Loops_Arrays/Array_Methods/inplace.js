    
const arr = [5,3,8,1];

function filterRangeInPlace(arr,a,b){
    for(let i = 0; i < arr.length; i++){
        let val = arr[i];

        if(val < a || val > b){ //interval 
            arr.splice(i,1); //get rid of anything outside interval
        }
    }
}

console.log(filterRangeInPlace(arr))