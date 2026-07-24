const questions = [
  {
    category: "Video Games",
    question: "Who is the red hat plumber?",
    choices: ["Mario", "Luigi", "Toad"],
    answer: "Mario"
  },
  {
    category: "Pop Culture",
    question: "Who is the dark knight?",
    choices: ["Superman","Batman","Spiderman"],
    answer: "Batman"
  },
  {
    category: "IT",
    question: "What Wire is HDMI?",
    choices: ["long wire","short wire","medium wire"],
    answer: "long wire"
  },
  {
    category: "Movies",
    question: "What movie is adam sandler in?",
    choices: ["Big Movie", "Adam Sandler Movie", "Swag Movie"],
    answer: "Adam Sandler Movie"
  },
  {
    category: "Life",
    question: "What big box retailer is blue?",
    choices: ["Walmart","Target","Shoprite"],
    answer:"Walmart"
  }
];

function getRandomQuestion(questions){
let rndmIndex = Math.floor(Math.random() * questions.length); 

  return questions[rndmIndex]; 
} 

function getRandomComputerChoice(choices){
  let rndmIndex = Math.floor(Math.random() * choices.length);

  return choices[rndmIndex];
}

function getResults(question, choices){
  
  if(question.answer === choices){
    return "The computer's choice is correct!"
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`
  }
}

console.log(questions);
console.log(getRandomQuestion);
