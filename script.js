'use strict';

let getComputerChoice = () => {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

let playRound = (computerSelection, playerSelection) => {
    let result;
    if(computerSelection === 'rock') {
        switch(playerSelection) {
            case "paper":
                result = ["Paper beats rock. You win the round!", "player"];
                break;
            case "scissors":
                result = ["Rock beats scissors. You lose the round.", "computer"];
                break;
            default:
                result = ["It's a tie!", "tie"];
        }
    }
    if(computerSelection === "scissors") {
        switch(playerSelection) {
            case "rock":
                result = ["Rock beats scissors. You win the round!", "player"];
                break;
            case "paper":
                result = ["Scissors beats paper. You lose the round.", "computer"];
                break;
            default:
                result = ["It's a tie!", "tie"];
        }
    }
    if(computerSelection === "paper") {
        switch(playerSelection) {
            case "scissors":
                result = ["Scissors beats paper. You win the round!", "player"];
                break;
            case "rock":
                result = ["Paper beats rock. You lose the round.", "computer"];
                break;
            default:
                result = ["It's a tie!", "tie"];
        }
    }

    return result;
}

let game = () => {
    alert("Play Rock Paper Scissors against a computer in a best of 5.");
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
        let computerSelection = getComputerChoice();
        
        console.log(`Computer's Choice: ${computerSelection}\nPlayer's Choice: ${playerSelection}`.toUpperCase());
        let result = playRound(computerSelection, playerSelection);
        console.log(result[0]);
    }
}

game();