function add7(num){
    return num + 7;
}

console.log(add7(10));

function multiply(num1,num2){
    return num1 * num2;
}
console.log(multiply(3,2));

function capitalize(str){
    let str1 = str.toLowerCase()
    let toUpperCase = str1.charAt(0).toUpperCase(); 
    let rest = str1.slice(1);

    return toUpperCase+rest;
}
console.log(capitalize("HELLO WORLD"));

function lastletter (str){
    let letter = str.slice(str.length - 1);

    return letter;
}

console.log(lastletter("Doggy"));