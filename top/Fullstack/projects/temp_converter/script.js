const FormSubmit = document.querySelector('button[type="submit"]');
const num = document.getElementById("temp")
const FahrenheitDisplay = document.querySelector(".f")
const CelsiusDisplay = document.querySelector(".c")
const KelvinDisplay = document.querySelector(".k")


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

            FahrenheitDisplay.textContent =  "Fahrenheit: " + f.toFixed(2)
            CelsiusDisplay.textContent = "Celsius: " + c.toFixed(2)
            KelvinDisplay.textContent = "Kelvin: " + k.toFixed(3)

            break; 

        case "c":
            c = temp;
            f = (c * 9/5) + 32
            k = c + 273.15

            CelsiusDisplay.textContent = "Celsius: " + c.toFixed(2)
            FahrenheitDisplay.textContent =  "Fahrenheit: " + f.toFixed(2)
            KelvinDisplay.textContent = "Kelvin: " + k.toFixed(3)

            break;

        case "k":
            k = temp;
            f = (k - 273.15) * 9/5 + 32
            c = (k - 273.15)

            KelvinDisplay.textContent = "Kelvin: " + k.toFixed(3)
            FahrenheitDisplay.textContent =  "Fahrenheit: " + f.toFixed(2)
            CelsiusDisplay.textContent = "Celsius: " + c.toFixed(2)
    }

    
}