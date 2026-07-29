

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