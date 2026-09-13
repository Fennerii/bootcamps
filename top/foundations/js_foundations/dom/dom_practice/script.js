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

//// inline style
//div.style.backgroundColor = "blue";

// attributes
//div.setAttribute("id", "theDiv");
//div.getAttribute("id");
//div.removeAttribute("id");

// classes (preferred way to style, instead of inline CSS)
//div.classList.add("active");
//div.classList.remove("active");
//div.classList.toggle("active");

// text vs html
//div.textContent = "Hello World!";     // safe, treats it as plain text
//div.innerHTML = "<span>Hi</span>";    // renders HTML — riskier, use sparingly

// exercise 4 Color Switches 
// Make 5 <div>s (or buttons), 
// each with a different background-color 
// (inline style or class, your choice — you already have both tools from Exercise 3). 
// Add a separate click listener to each one that logs e.target's background color to the console when clicked.
// A hint given where you're at: build each div fully (create, style, append) like you did with redp/blueh3/blackdiv, 
// then attach .addEventListener("click", ...) to each one individually before or after appending — 
// order doesn't matter here since you're not touching .textContent after the fact.

const button1 = document.createElement("button")
const button2 = document.createElement("button")
const button3 = document.createElement("button")
const button4 = document.createElement("button")
const button5 = document.createElement("button")

button1.textContent="Add One"
button1.style.backgroundColor = "white"

button2.textContent="Subtract One"
button2.style.backgroundColor = "White"

button3.textContent="3"
button3.style.backgroundColor = "orange"

button4.textContent= "4"
button4.style.backgroundColor= "purple"

button5.textContent = "5"
button5.style.backgroundColor = "green"




const DisplaySign = document.createElement("h1")
DisplaySign.textContent = 0;

document.body.append(DisplaySign)

button1.addEventListener("click", (e) => {

     const current = Number(DisplaySign.textContent)
     DisplaySign.textContent = current + 1
    console.log(current)
});

button2.addEventListener("click", (e) =>{
    const current = Number(DisplaySign.textContent)
    DisplaySign.textContent = current - 1
    console.log(current)
})

button3.addEventListener("click", (e) =>{
    const current = Number(DisplaySign)
})





document.body.append(button1,button2,button3,button4,button5)


