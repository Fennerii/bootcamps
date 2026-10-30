const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const display = document.querySelector(".screen");
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multi = document.querySelector(".multiply");
const divison = document.querySelector(".division");
const pi = document.querySelector(".pi");
const negpos = document.querySelector(".negpos");
const expo = document.querySelector(".exponent")
const mod = document.querySelector(".modulo")
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const sd = document.querySelector(".arr");


let num1
let num2
let temp
let total
let operator = null;
let numstack = []
display.textContent = Number(0)

function addbtn(num1, num2){
    
    total = Number(num1) + Number(num2)
    console.log(total)
    display.textContent = Number(total)

    return total
}

one.addEventListener("click", () =>{
    numstack.push(1)
    temp = numstack.join("")
    display.textContent = temp
    console.log("temp =" + temp)
})

two.addEventListener("click", () =>{
    numstack.push(2);
    temp = numstack.join("")
    display.textContent = temp
    console.log("temp = " + temp)
})

add.addEventListener("click", () =>{
    if(operator === null){
        num1 = temp
        operator = "+"
        console.log("num 1 = " + num1)
        console.log(operator)
        numstack.length = 0;
    } else {
        num2 = temp
        let result = addbtn(num1, num2)
        num1 = result;
        numstack.length = 0;
    }
} )
