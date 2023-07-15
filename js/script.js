function getComputerChoice() {
    choices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    return choices[index];
}

function getPlayerChoice() {
    let temp = prompt("Enter your choice (rock/ paper/ scissors): ").toLowerCase();
    if (temp != "rock" && temp != "paper" && temp != "scissors") {
        alert("Invalid input. Please choose between (rock/ paper/ scissors).");
        getPlayerChoice();
    } else {
        return temp;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Draw! You chose the same hand.";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        opponentScore++;
        return "You lose. Paper beats rock.";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        opponentScore++;
        return "You lose. Scissors beat paper.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        opponentScore++;
        return "You lose. Rock beats scissors.";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "You win! Rock beats scissors!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You win! Paper beats rock!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You win! Scissors beat paper!";
    } else {
        return "Something went wrong";
    }
}

let playerScore = 0;
let opponentScore = 0;

const buttons = document.querySelectorAll("button");
const results = document.querySelector(".results");
const playerScoreDisplay = document.querySelector(".player-score");
const opponentScoreDisplay = document.querySelector(".opponent-score");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        results.textContent = playRound(button.className, getComputerChoice());
        playerScoreDisplay.textContent = `Your score: ${playerScore}`;
        opponentScoreDisplay.textContent = `Opponent's score: ${opponentScore}`;
    });
})

