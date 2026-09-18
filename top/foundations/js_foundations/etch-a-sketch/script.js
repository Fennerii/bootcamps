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
const white = document.querySelector(".white") 


// Box Start
const size = 16;

for(let i = 0; i < size * size; i++){
    const cell = document.createElement("div");
    cell.classList.add("cell");

    grid.append(cell)
}
//end of Box

grid.addEventListener("click", function(e){
    if(e.target.classList.contains("cell")){
        e.target.style.backgroundColor = "green";
    }
});

// brush change
// target cell

