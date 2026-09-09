const container = document.querySelector("#container");
const display = document.querySelector(".display");

const pets = document.querySelector(".pets"); // gets list 
const mammals = document.querySelectorAll(".mammal"); //gets all instances of classes

console.log(container)
console.log(display)
console.log(container.firstElementChild);


if(pets.children.length < 6){
    console.log("Need more pets")
}