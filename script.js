'use strict';

let playerWins = 0;
let computerWins = 0;

let getComputerChoice = () => {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

let changePlayerScore = () => {
    const container = document.querySelector("div.player-score");
    container.textContent = `Player Score: ${playerWins}`;
}

let changeComputerScore = () => {
    const container = document.querySelector("div.computer-score");
    container.textContent = `Computer Score: ${computerWins}`;
}

let checkWinner = () => {
    if(playerWins === 5) {
        const container = document.querySelector("div.results");
        let winner = document.createElement('div');
        winner.textContent = "Player Wins the Game!";
        container.appendChild(winner);
    }
    if(computerWins === 5) {
        const container = document.querySelector("div.results");
        let winner = document.createElement('div');
        winner.textContent = "Computer Wins the Game!";
        container.appendChild(winner);       
    }
}

let displayResult = (result) => {

    const container = document.querySelector('div.results')
    // let div = document.createElement('div');
    // div.textContent = result;
    container.textContent = result;
    // container.appendChild(div);
    checkWinner();
}

let playRound = (playerSelection) => {
    let result;
    let computerSelection = getComputerChoice();
    if(computerSelection === 'rock') {
        switch(playerSelection) {
            case "paper":
                result = "Paper beats rock. You win the round!"; 
                playerWins++;
                changePlayerScore();
                break;
            case "scissors":
                result = "Rock beats scissors. You lose the round."; 
                computerWins++;
                changeComputerScore();
                break;
            default:
                result = "It's a tie!";
        }
    }
    if(computerSelection === "scissors") {
        switch(playerSelection) {
            case "rock":
                result = "Rock beats scissors. You win the round!";
                playerWins++;
                changePlayerScore();
                break;
            case "paper":
                result = "Scissors beats paper. You lose the round.";
                computerWins++;
                changeComputerScore();
                break;
            default:
                result = "It's a tie!";
        }
    }
    if(computerSelection === "paper") {
        switch(playerSelection) {
            case "scissors":
                result = "Scissors beats paper. You win the round!";
                playerWins++;
                changePlayerScore();
                break;
            case "rock":
                result = "Paper beats rock. You lose the round.";
                computerWins++;
                changeComputerScore();
                break;
            default:
                result = "It's a tie!";
        }
    }
    displayResult(result);
    console.log(result);
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.id);
    })
})

// let game = () => {
//     alert("Play Rock Paper Scissors against a computer in a best of 5.");
//     let playerScore = 0;
//     let computerScore = 0;

//     for(let i = 0; i < 5; i++){
//         let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
//         let computerSelection = getComputerChoice();
        
//         console.log(`Computer's Choice: ${computerSelection}\nPlayer's Choice: ${playerSelection}`.toUpperCase());
//         let result = playRound(computerSelection, playerSelection);
//         console.log(result[0]);

//         switch(result[1]){
//             case "player":
//                 playerScore++;
//                 break;
//             case "computer":
//                 computerScore++;
//                 break;
//         }
//         console.log(`SCORE:\nPLAYER: ${playerScore}\tCOMPUTER: ${computerScore}`);
//     }

//     if(playerScore > computerScore)
//         console.log("You win the game!");
//     else if(playerScore < computerScore)
//         console.log("You lose the game. Better luck next time!");
//     else
//         console.log("It's a tie!");
// }

// game();