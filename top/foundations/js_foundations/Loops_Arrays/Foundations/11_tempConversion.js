function convertToCelsius(num){

    let conversion = Math.round(((num - 32) * 5/9) * 10) /10; 


    return conversion;
}

function convertToFarenheit(num){
    let conversion = Math.round(((num * 9/5) + 32) * 10) / 10;

    return conversion; 
}

console.log(convertToCelsius(100));
console.log(convertToFarenheit(0));
