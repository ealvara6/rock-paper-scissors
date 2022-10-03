'use strict';

let getComputerChoice = () => {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChoice);
}

let playRound = (computerSelection, playerSelection) => {
    let result = "";
    if(computerSelection === 'rock') {
        switch(playerSelection) {
            case "paper":
                result = "Paper beats rock. You win the round!";
                break;
            case "scissors":
                result = "Rock beats scissors. You lose the round.";
                break;
            default:
                result = "It's a tie!";
        }
    }
    if(computerSelection === "scissors") {
        switch(playerSelection) {
            case "rock":
                result = "Rock beats scissors. You win the round!";
                break;
            case "paper":
                result = "Scissors beats paper. You lose the round.";
                break;
            default:
                result = "It's a tie!";
        }
    }
    if(computerSelection === "paper") {
        switch(playerSelection) {
            case "scissors":
                result = "Scissors beats paper. You win the round!"
                break;
            case "rock":
                result = "Paper beats rock. You lose the round.";
                break;
            default:
                result = "It's a tie!";
        }
    }
}

let computerSelection = getComputerChoice();
