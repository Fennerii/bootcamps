/*
 First name: Carlos
 Last name: Stevenson
 This year: 1965
 Birth year: 1947

 The greeting should read: "Hello! My name is Carlos Stevenson and I am 18 years old."
*/

// Add your code right below, good luck!

const firstName = "Carlos";
const lastName = "Stevenon";
const year= 1965;
const birthYear = 1947;

const greeting = `Hello! My name is ${firstName} ${lastName} and I am ${year - birthYear} years old`;
console.log(greeting);

const fullName = firstName + " " + lastName;
const age = year - birthYear;

const newGreeting = `Hello my name is ${fullName} and I am ${age} years old`;

console.log(newGreeting);


// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}