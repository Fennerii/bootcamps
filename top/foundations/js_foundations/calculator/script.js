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
const deci = document.querySelector(".deci");
const negpos = document.querySelector(".negpos");
const expo = document.querySelector(".exponent")
const mod = document.querySelector(".modulo")
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");

let num1
let num2
let temp
let total
let operator = null;
let numstack = []
let result
display.textContent = Number(0)

function calc(num1, num2,op){

    switch (op){
        case "+":
            total = Number(num1) + Number(num2)
            console.log(total)
            display.textContent = Number(total)
        break; 

        case "-":
            total = Number(num1) - Number(num2)
            display.textContent = Number(total)
        break;
        
        case "x":
            total = Number(num1) * Number(num2)
            display.textContent = Number(total)
        break;

        case "/":
            if(total === 0){
                display.textContent = "booo"
                num1 = null
                num2 = null
                temp = null
                operator = null
                numstack.length = 0  
            } else {
                total = Number(num1) / Number(num2)
                display.textContent = "booo"
            }
        break;

        case "%":
            total = Number(num1) % Number(num2)
            display.textContent = Number(total)
        break; 

        case "^":
            total = Number(num1) ** Number(num2)
            display.textContent = Number(total)
        break;
    }

    display.textContent = Number(total.toFixed(2))
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

deci.addEventListener("click", () => {
    numstack.push(".")
    temp = numstack.join("")
    display.textContent = temp
})

negpos.addEventListener("click", () => {
    numstack.push("-")
    temp = numstack.join("")
    display.textContent = temp
})

// end of buttons // 
// Operation // 

clear.addEventListener("click", () =>{
    numstack.length = 0;
    display.textContent = 0
    num1 = null
    num2 = null
    temp = null
    operator = null
})

add.addEventListener("click", () =>{
     if(operator === null){
        num1 = temp
        operator = "+"
        numstack.length = 0;
        temp = null
    } else {
        num2 = temp
        result = calc(num1, num2,operator)
        operator = "+"
        num1 = result
        numstack.length = 0;
        temp = null
    }
})


subtract.addEventListener("click", () =>{
    if(operator === null){
        num1 = temp
        operator = "-"
        numstack.length = 0;
        temp = null
    } else {
        num2 = temp
        result = calc(num1, num2,operator)
        operator = "-"
        num1 = result
        numstack.length = 0;
        temp = null
    }
})

multi.addEventListener("click", () => {
     if(operator === null){
        num1 = temp
        operator = "x"
        numstack.length = 0;
        temp = null
    } else {
        num2 = temp
        result = calc(num1, num2,operator)
        operator = "x"
        num1 = result
        numstack.length = 0;
        temp = null
    }
})
   

divison.addEventListener("click", () => {
      if(operator === null){
        num1 = temp
        operator = "/"
        numstack.length = 0;
        temp = null
    } else {
        num2 = temp
        result = calc(num1, num2,operator)
        operator = "/"
        num1 = result
        numstack.length = 0;
        temp = null
    }
})

mod.addEventListener("click", () => {
       if(operator === null){
        num1 = temp
        operator = "%"
        numstack.length = 0;
        temp = null
    } else {
        num2 = temp
        result = calc(num1, num2,operator)
        operator = "%"
        num1 = result
        numstack.length = 0;
        temp = null
    }
})

expo.addEventListener("click", () => {
        if(operator === null){
        num1 = temp
        operator = "^"
        numstack.length = 0;
        temp = null
    } else {
        num2 = temp
        result = calc(num1, num2,operator)
        operator = "^"
        num1 = result
        numstack.length = 0;
        temp = null
    }
})


equals.addEventListener("click", () => {
    if(operator != null){
        num2= temp
        result = calc(num1, num2, operator)

        num1 = null
        num2 = null
        temp = null
        operator = null
        numstack.length = 0  
    }
})

