// Connected to the frontend RPS

//human choice
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const play = document.querySelector("#play")

let humanChoice;
let robotChoice;
let humanscore = 0
let computerscore = 0

function handleChoice(){
    console.log(`Player picked ${humanChoice}`)
}

rock.addEventListener("click", () => {
    humanChoice = "rock"
    handleChoice()
    getComputerChoice();
})

paper.addEventListener("click", () => {
    humanChoice = "paper"
    handleChoice();
    getComputerChoice();
})

scissors.addEventListener("click", () =>{
    humanChoice = "scissors"
    handleChoice();
    getComputerChoice();
})

//robot choice 
const choices = ["rock","paper","scissors"];

function getComputerChoice(){
    robotChoice = choices[Math.floor(Math.random() * choices.length)]
    

    return console.log(robotChoice)
}

play.addEventListener("click", () => {
    if(humanChoice == null){
        console.log("Select a choice")
    } else {
        playGame()
    }
})

function playGame(){

   if 
    (
        robotChoice === "paper" && humanChoice === "rock" ||
        robotChoice === "scissors" && humanChoice === "paper" ||
        robotChoice === "rock" && humanChoice === "scissors"
    ){
        computerscore++;        
    } 
    else{
        humanscore++;
    }
    console.log(`Human Picked ${humanChoice} and Computer picked ${robotChoice}`)
    console.log(`Score: ${humanscore} - ${computerscore}`);
        humanChoice = null;
        robotChoice = null
    }










/* terminal RPS
const choices = ["Rock","Paper","Scissors"];

function getComputerChoice(choices){
    let cc = choices[Math.floor(Math.random() * choices.length)];

    return cc;
}

function getHumanChoice(choices){
    let hc = choices[Math.floor(Math.random() * choices.length)];

    return hc;
}

function PlayGame(choices){ // pass array down
    let CPUScore = 0;
    let HumanScore = 0;

    do {
        const CPUC = getComputerChoice(choices); //invoke needed
        const HUMC = getHumanChoice(choices);

    //Computer Wins Conditions
    if(CPUC === HUMC){
        console.log(`${HUMC} Tied ${CPUC}`);
    }else if 
    (
        CPUC === "Paper" && HUMC === "Rock" ||
        CPUC === "Scissors" && HUMC ==="Paper" ||
        CPUC === "Rock" && HUMC === "Scisscors"
    ){
        CPUScore++;        
        console.log(`Human chose ${HUMC} and Computer chose ${CPUC} , Computer wins!`);
    } 
    else{
        HumanScore++;
        console.log(`Human chose ${HUMC} and Computer chose ${CPUC}, Human Wins!`);
    }

    console.log(`Score: ${CPUScore} - ${HumanScore}`);
    }while(HumanScore < 5 && CPUScore < 5)
    
        if (HumanScore === 5){
            return `Match Over, Human wins ${HumanScore} to ${CPUScore}`;
        } else {
            return `Match Over, Computer wins ${CPUScore} to ${HumanScore}`;
        }
}

console.log(PlayGame(choices));
*/