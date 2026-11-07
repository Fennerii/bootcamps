const billamount = document.getElementById("total") //get total
const tip = document.getElementById("tip")
const calc = document.querySelector(".btn")
const totalDisplay = document.querySelector(".total")

let calctip = null;



calc.addEventListener("click", (e) =>{
    e.preventDefault();
    let percent = parseFloat(tip.value);
    let total = parseFloat(billamount.value);

    if(isNaN(percent) || isNaN(total)){
        totalDisplay.textContent = `Enter Number`
            return;
    }

    calctip = calculate(tip,billamount);
    totalDisplay.textContent = `Total: $${calctip}`;
    console.log(calctip)
})

function calculate(tip, billamount){
    let percent = parseFloat(tip.value);
    let total = parseFloat(billamount.value);

    let result = total * (percent / 100); 

    return result.toFixed(2);
}