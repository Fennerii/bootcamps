const FormSubmit = document.querySelector('button[type="submit"]');
const num = document.getElementById("temp")

FormSubmit.addEventListener("click", (e) =>{
    e.preventDefault()
    const CheckedRadio = document.querySelector('input[name="startTemp"]:checked')
    let StartingTemp = num.value

    console.log(conversion(CheckedRadio.value, StartingTemp))

})

function conversion(unit, temp){
    let c
    let f
    let k 

    temp = parseFloat(temp); //turn form into runnable format

    switch(unit){
        case "f":
            f = temp;
            c = (f - 32) * 5/9
            k = (f - 32) * 5/9 + 273.15

            return c + " " + f + " " + k
        case "c":
            c = temp;
            f = (c * 9/5) + 32
            k = c + 273.15

            return console.log(`Starting Temperature is ${c} Celsius converted to Fahrenheit is ${f.toFixed(2)} converted to Kelvin is ${k.toFixed(2)}`)

        case "k":
            k = temp;
            f = (k - 273.15) * 9/5 + 32
            c = (k - 273.15)

            return console.log(`Starting Temperature is ${c} Celsius converted to Fahrenheit is ${f.toFixed(2)} converted to Kelvin is ${k.toFixed(2)}`)

    }

    
}