function getComputerChoice() {
    choices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    return choices[index];
}

let playerSelection;

function getPlayerChoice() {
    let temp = prompt("Enter your choice (rock/ paper/ scissors): ").toLowerCase();
    if (temp != "rock" && temp != "paper" && temp != "scissors") {
        alert("Invalid input. Please choose between (rock/ paper/ scissors).");
        getPlayerChoice();
    } else {
        playerSelection = temp;
    }
}

