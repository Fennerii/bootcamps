const container = document.querySelector("#container");
const display = document.querySelector(".display");

const pets = document.querySelector(".pets"); // gets list 
const mammals = document.querySelectorAll(".mammal"); //gets all instances of classes

console.log(container)
console.log(display)
console.log(container.firstElementChild);

const list = document.createElement("li");
pets.appendChild(list)
list.textContent="Turtle"


const list2 = document.createElement("li")
pets.appendChild(list2)
list2.textContent="Snake"

const list3 = document.createElement("li")
pets.appendChild(list3)
list3.textContent="Horse"


// excersise 2
//build list from scratch
const ul = document.createElement("ul")

const li = document.createElement("li")
li.textContent="test"

const li2 = document.createElement("li")
li2.textContent = "test2"

const li3 = document.createElement("li")
li3.textContent = "test3"

ul.append(li,li2,li3)

pets.after(ul)



