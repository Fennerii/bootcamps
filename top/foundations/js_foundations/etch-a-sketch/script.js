const grid = document.querySelector(".square-container");
const red = document.querySelector(".red");
const orange = document.querySelector(".orange");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const indigo = document.querySelector(".indigo");
const violet = document.querySelector(".violet");
const black = document.querySelector(".black");
const brown = document.querySelector(".brown");
const eraser = document.querySelector(".eraser");
const brushbtn = document.querySelector(".brush");
const reset = document.querySelector(".reset");


let defaultColor= "black"
let brush = true

//start of box function
function canvasSetUp(){

    grid.innerHTML = "";

    let size = prompt("How big do you want your canvas?")
    size = size;

    if(isNaN(size) || size <= 0 || size >= 100){
        size = 16;
    }

    // even
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;


for(let i = 0; i < size * size; i++){
    const cell = document.createElement("div");
    cell.classList.add("cell");

    grid.append(cell)
}
}
// end of box function

document.addEventListener('DOMContentLoaded', () => {
    canvasSetUp();
})


//color selectors
red.addEventListener("click", function(e){
    defaultColor = "red";
})

orange.addEventListener("click", function(e){
    defaultColor = "orange";
})

yellow.addEventListener("click", function(e){
    defaultColor = "yellow"
})

green.addEventListener("click", function(e){
    defaultColor = "green"
})

blue.addEventListener("click",function(e){
    defaultColor = "blue"
})

indigo.addEventListener("click", function(e){
    defaultColor = "indigo"
})

violet.addEventListener("click", function(e){
    defaultColor = "violet"
})

black.addEventListener("click", function(e){
    defaultColor = "black"
})

brown.addEventListener("click", function(e){
    defaultColor = "brown"
})
//end of colors

//start of utils
eraser.addEventListener("click", function(e){
    defaultColor = "white"
})

brushbtn.addEventListener("click", function(e){
    if(!brush){
        brush = true
    } else {
        brush = false
    }
})

reset.addEventListener("click", function(e){
    canvasSetUp();
});

//end of utils


grid.addEventListener("click", function(e){
    if(brush && e.target.classList.contains("cell")){
        e.target.style.backgroundColor = defaultColor;
    }
});

grid.addEventListener("mouseover", function(e){
    if(!brush && e.target.classList.contains("cell")){
        e.target.style.backgroundColor = defaultColor;
    }
})



    





// brush change
// target cell

