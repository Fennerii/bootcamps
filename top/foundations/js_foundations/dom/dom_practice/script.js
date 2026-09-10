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


// exercise 2
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

//exercise 3
//Altering elements 

const creatediv = document.createElement("div") //made div
creatediv.setAttribute("id", "create") //gave div id of create
creatediv.textContent = "hello world"

document.body.append(creatediv)

// A <p> with red text: "Hey I'm red!"
const redp = document.createElement("p")
redp.style.color = "red"
redp.textContent = "Hey I'm red!"
creatediv.append(redp)

// An <h3> with blue text: "I'm a blue h3!"
const blueh3 = document.createElement("h3")
blueh3.style.color = "blue"
blueh3.textContent = "I'm a blue h3"
creatediv.append(blueh3)

//A <div> with a black border + pink background, 
// containing an <h1> ("I'm in a div") and a <p> ("ME TOO!") — 
// build the inner elements first, append them into the div, 
// then append the div to the container.

const blackdiv = document.createElement("div")
const h1 = document.createElement("h1")
const divp = document.createElement("p")

blackdiv.append(h1,divp)
blackdiv.style.border = "2px solid black"
blackdiv.style.backgroundColor = "pink"
h1.textContent = "I'm in a div"
divp.textContent = "ME TOO!"

creatediv.append(blackdiv)


