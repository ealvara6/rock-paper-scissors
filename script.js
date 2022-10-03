'use strict';

let getComputerChoice = () => {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChoice);
}

let computerSelection = getComputerChoice();

let playRound = (computerSelection, playerSelection) => {
    let result = "";
    if(computerSelection === 'rock') {
        switch(playerSelection) {
            case "paper":
                result = "paper beats rock. You win the round!";
                break;
            case "scissors":
                result = "rock beats scissors. You lose the round."
                break;
            default:
                result = "It's a tie!";
        }
    }
    if(computerSelection === "scissors") {
        switch(playerSelection) {
            case "paper":
                result = ""
        }
    }
}