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
        return "You lose. Paper beats rock.";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose. Scissors beat paper.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose. Rock beats scissors.";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beat paper!";
    } else {
        return "Something went wrong";
    }
}

