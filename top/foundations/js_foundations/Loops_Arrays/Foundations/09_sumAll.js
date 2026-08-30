function sumAll(a,b){

if (a < 0 || !Number.isInteger(a) || b < 0 || !Number.isInteger(b)) {
    return "ERROR";
}

//proper check to find starting value; want to start lower 
if(b < a){
    let temp = b //temp = 20
    b = a;  //b = 10
    a = temp; // a = 20
}

//addition 
 let sum = 0;

 for(let  i  = a; i <= b; i++){

    sum += i 
 }


 return sum;

}


console.log(sumAll(1,4));