// rng for getting computers choice, gets a number 1-3 and turns those into strings/choices
function getComputerChoice() {
 let compChoice = Math.floor(Math.random() * 3) + 1
 if (compChoice === 1) {
    return "rock";
 }
 else if (compChoice === 2) {
    return "paper";
 }
 else {
    return "scissors";
 } 
}
// event listeners for buttons, also activates the function to start each round
document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
// defining scores in global scope so that they can be accessed in multiple functions
let humanScore = 0
let compScore = 0
// function for deciding who wins each round, and adding to score counters
function playRound(humanChoice) {
    let compChoice = getComputerChoice();
    if (humanChoice === compChoice) {
        result = "The round is a tie!";
    }   else if (
        (humanChoice === "rock" && compChoice === "scissors") ||
        (humanChoice === "paper" && compChoice === "rock") ||
        (humanChoice === "scissors" && compChoice === "paper")
    ) {
        result = "You win the round!";
        humanScore++;
    } else {
        result = "You lose the round!";
        compScore++;
    }
// place where the round winners and score gets displayed on html   
    document.getElementById("info").textContent =
    `You chose ${humanChoice}, computer chose ${compChoice}. ${result}`;
    document.getElementById("humWins").textContent = `Human Score: ${humanScore}`;
    document.getElementById("compWins").textContent = `Computer Score: ${compScore}`;
// text to display once the score has reached the maximum winning ammount to also reset the game
    if (humanScore === 5) {
        document.getElementById("info").textContent =
        `You have won the game!`;
        resetScores();
    } else if (compScore === 5) {
        document.getElementById("info").textContent =
        `You have lost the game!`;
        resetScores();
    }
}
// function that resets scores and in turn resets the game 
function resetScores() {
        humanScore = 0;
        compScore = 0;
    };
