let humanScore = 0;
let computerScore = 0;

//generate random choice for computer
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const min = 0;
    const max = 2;
    const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(choices[randomInt]);
    return choices[randomInt];
}
function getUserChoice() {
    const userInput = prompt("Please enter your choice:");
    return userInput.toLowerCase();
}
//determine winner using hard coded choices
function playRound (userChoice, computerChoice){
    switch(userChoice){
        case "rock":
            if(computerChoice === "scissors"){
                humanScore++;
                console.log("Rock crushes scissors. You win!");
            } else if(computerChoice === "paper"){
                computerScore++;
                console.log("Paper covers rock. You lose!");
            }else{
                console.log("It's a tie!");
            }
            break;
        case "scissors":
            if(computerChoice === "paper"){
                humanScore++;
                console.log("Scissors cuts paper. You win!");
            } else if(computerChoice === "rock"){
                computerScore++;
                console.log("Rock crushes scissors. You lose!");
            }else{
                console.log("It's a tie!");
            }
            break;
        case "paper":
            if(computerChoice === "rock"){
                humanScore++;
                console.log("Paper covers rock. You win!");
            } else if(computerChoice === "scissors"){
                computerScore++;
                console.log("Scissors cuts paper. You lose!");
            }else{
                console.log("It's a tie!");
            }
            break;
        default:
            break;
    }
}

//playGame function will call all necessary functions to play the game
function playGame(){
    while(humanScore < 5 && computerScore < 5){
        let userChoice = getUserChoice();
        let computerChoice = getComputerChoice();
        playRound(userChoice, computerChoice);
        }
        console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    }
