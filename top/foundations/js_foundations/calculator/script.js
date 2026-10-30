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

// start of buttons //
zero.addEventListener("click", () =>{
    numstack.push(0)
    temp = numstack.join("")
    display.textContent = temp
})


one.addEventListener("click", () =>{
    numstack.push(1)
    temp = numstack.join("")
    display.textContent = temp
})

two.addEventListener("click", () =>{
    numstack.push(2);
    temp = numstack.join("")
    display.textContent = temp
})

three.addEventListener("click", () => {
    numstack.push(3)
    temp = numstack.join("")
    display.textContent = temp

})

four.addEventListener("click", () =>{
    numstack.push(4)
    temp = numstack.join("")
    display.textContent = temp
})

five.addEventListener("click", () =>{
    numstack.push(5)
    temp = numstack.join("")
    display.textContent = temp
})

six.addEventListener("click", () =>{
    numstack.push(6)
    temp = numstack.join("")
    display.textContent = temp
})

seven.addEventListener("click", () =>{
    numstack.push(7)
    temp = numstack.join("")
    display.textContent = temp
})
   
eight.addEventListener("click", () => {
    numstack.push(8)
    temp = numstack.join("")
    display.textContent = temp
})

nine.addEventListener("click", () =>{
    numstack.push(9)
    temp = numstack.join("")
    display.textContent = temp
})

// end of buttons // 

add.addEventListener("click", () =>{
    if(operator === null){
        num1 = temp
        operator = "+"
        console.log("num 1 = " + num1)
        console.log(operator)
        numstack.length = 0;
    } else {
        num2 = temp
        console.log(num1)
        console.log(num2)
        let result = addbtn(num1, num2)
        //this
        num1 = result;
        numstack.length = 0;
    }
} )
