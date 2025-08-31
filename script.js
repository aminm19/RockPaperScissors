let humanScore = 0;
let computerScore = 0;
const rockBtn = document.querySelector('.rock'); 
const scissorsBtn = document.querySelector('.scissors'); 
const paperBtn = document.querySelector('.paper'); 

//add event listeners for buttons to trigger game start
document.addEventListener('DOMContentLoaded', () => {
    rockBtn.addEventListener('click', () => playGame('rock', getComputerChoice()));
    paperBtn.addEventListener('click', () => playGame('paper', getComputerChoice()));
    scissorsBtn.addEventListener('click', () => playGame('scissors', getComputerChoice()));
});

//generate random choice for computer
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const min = 0;
    const max = 2;
    const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    return choices[randomInt];
}

//determine winner using hard coded choices
function playRound (humanChoice, computerChoice){
    switch(humanChoice){
        case "rock":
            if(computerChoice === "scissors"){
                humanScore++;
                document.getElementById("result").textContent = "Rock crushes scissors. You win!";
            } else if(computerChoice === "paper"){
                computerScore++;
                document.getElementById("result").textContent = "Paper covers rock. You lose!";
            }else{
                document.getElementById("result").textContent = "It's a tie!";
            }
            break;
        case "scissors":
            if(computerChoice === "paper"){
                humanScore++;
                document.getElementById("result").textContent = "Scissors cuts paper. You win!";
            } else if(computerChoice === "rock"){
                computerScore++;
                document.getElementById("result").textContent = "Rock crushes scissors. You lose!";
            }else{
                document.getElementById("result").textContent = "It's a tie!";
            }
            break;
        case "paper":
            if(computerChoice === "rock"){
                humanScore++;
                document.getElementById("result").textContent = "Paper covers rock. You win!";
            } else if(computerChoice === "scissors"){
                computerScore++;
                document.getElementById("result").textContent = "Scissors cuts paper. You lose!";
            }else{
                document.getElementById("result").textContent = "It's a tie!";
            }
            break;
        default:
            break;
    }
}

//playGame function will call all necessary functions to play the game
function playGame(humanChoice, computerChoice){
        playRound(humanChoice, computerChoice);
        document.getElementById("humanScore").textContent = `You: ${humanScore}`;
        document.getElementById("computerScore").textContent = `Computer: ${computerScore}`;
    }
