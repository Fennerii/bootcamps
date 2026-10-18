const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".sever");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const display = document.querySelector(".screen");
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multi = document.querySelector(".multiply");
const divison = document.querySelector(".division");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");


let numstack = [];
let total = 0
let displaytotal;
let num1
let num2 
let operator = null
display.textContent = displaytotal



one.addEventListener("click", () => {    
    numstack.push(1);
    total = numstack.join("") 
    displaytotal = numstack.join("")
    display.textContent = total
    console.log(total)

});


add.addEventListener("click", () => {
    operator = "+"
    num1 = Number(total) 
    numstack.length = 0
    total = 0;
    console.log(num1)
    console.log(total);
})

equals.addEventListener("click", () => {
        num2=Number(total);
        switch(operator){
            case "+":
            displaytotal = num1 + num2
            display.textContent = displaytotal
            console.log(displaytotal)
            break;
        }
    }
  
)

clear.addEventListener("click", () =>{
    numstack.length = 0;
    display.textContent = 0
    console.log(numstack);
})
