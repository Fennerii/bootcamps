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


let numstack = [];
let total = 0
let displaytotal;
let num1
let num2 
let operator = null
display.textContent = displaytotal

/* could use this 
const numButtons = document.querySelectorAll(".num");

numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    numstack.push(button.textContent);
    total = numstack.join("");
    display.textContent = total;
  });
});
*/

zero.addEventListener("click", () => {
    numstack.push(3);
    total = numstack.join("")
    display.textContent = total;
    console.log(total);
})

one.addEventListener("click", () => {    
    numstack.push(1);
    total = numstack.join("") 
    display.textContent = total
    console.log(total)

});

two.addEventListener("click", () => {
    numstack.push(2); // get two
    total = numstack.join("") // for joining together array indexes without the common 2,2 becomes 22
    display.textContent = total; //display
    console.log(total); //bug fix
})

three.addEventListener("click", () => {
    numstack.push(3);
    total = numstack.join("")
    display.textContent = total;
    console.log(total);
})

four.addEventListener("click", () => {
    numstack.push(4);
    total = numstack.join("")
    display.textContent = total;
    console.log(total);
})

five.addEventListener("click", () => {
    numstack.push(5);
    total = numstack.join("")
    display.textContent = total;
    console.log(total);
})

six.addEventListener("click", () => {
    numstack.push(6);
    total = numstack.join("")
    display.textContent = total;
    console.log(total);
})

seven.addEventListener("click", () => {
    numstack.push(7);
    total = numstack.join("")
    display.textContent = total;
    console.log(total);
})

eight.addEventListener("click", () => {
    numstack.push(8);
    total = numstack.join("")
    display.textContent = total;
    console.log(total);
})

nine.addEventListener("click", () => {
    numstack.push(9);
    total = numstack.join("")
    display.textContent = total;
    console.log(total);
})

pi.addEventListener("click", () =>{
    numstack.push(3.14);
    total = numstack.join("");
    display.textContent = total;
    console.log(total);
})

negpos.addEventListener("click", () =>{
    numstack.push("-");
    total = numstack.join("");
    display.textContent = total;
    console.log(total);
})

//opps

add.addEventListener("click", () => {
    operator = "+"
    num1 = Number(total) 
    numstack.length = 0
    total = 0;
    console.log(num1)
    console.log(total);
})

subtract.addEventListener("click", () => {
    operator = "-"
    num1 = Number(total)
    numstack.length = 0
    total = 0;
    console.log(num1);
    console.log(total);
})

multi.addEventListener("click", () => {
    operator = "x"
    num1 = Number(total)
    numstack.length = 0
    total = 0;
    console.log(num1);
    console.log(total);
})

divison.addEventListener("click", () => {
    operator = "/"
    num1 = Number(total)
    numstack.length = 0
    total = 0;
    console.log(num1);
    console.log(total);
})

expo.addEventListener("click", () => {
    operator = "^"
    num1 = Number(total)
    numstack.length = 0
    total = 0;
    console.log(num1);
    console.log(total);
})

mod.addEventListener("click", () => {
    operator = "%"
    num1 = Number(total)
    numstack.length = 0
    total = 0;
    console.log(num1);
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

            case "-":
            displaytotal = num1 - num2
            display.textContent = displaytotal
            console.log(displaytotal)
            break;

            case "x":
            displaytotal = num1 * num2
            display.textContent = displaytotal
            console.log(displaytotal)
            break;

            case "/":
            displaytotal = num1 / num2
            display.textContent = displaytotal.toFixed(3)
            console.log(displaytotal)
            break;

            case "^":
            displaytotal = num1 ** num2
            display.textContent = displaytotal
            console.log(displaytotal)
            break;

            case "%":
            displaytotal = num1 % num2
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
