const grid = document.querySelector(".square-container");


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