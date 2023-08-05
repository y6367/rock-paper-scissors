let computerChoice;
let playerChoice;
let computerScore;
let playerScore;

const rock = "rock";
const paper = "paper";
const scissors = "scissors";

function getComputerChoice() {
    let temp = Math.floor(Math.random() * 3);
    if (temp === 0) {
        computerChoice = rock;
    } else if (temp === 1) {
        computerChoice = paper;
    } else {
        computerChoice = scissors;
    };
};
// getComputerChoice();

function getPlayerChoice() {
    let temp = prompt("Please enter your selection for rock, paper, scissors.")
    temp.toLowerCase();
    playerChoice = temp;
    console.log("You chose: " + temp);
};
// getPlayerChoice();


function round(player, computer) {
    if (player === computer) {
        console.log("Nobody wins.");
    } else if (player === rock) {
        if (computer === paper) {
            computerScore++
            console.log("Computer Wins!");
        } else if (computer === scissors) {
            playerScore++
            console.log("Player wins!");
        };
    } else if (player === paper) {
        if (computer === scissors) {
            computerScore++
            console.log("Computer Wins!");
        } else if (computer === rock) {
            playerScore++
            console.log("Player wins!");
        };
    } else if (player === scissors) {
        if (computer === rock) {
            computerScore++
            console.log("Computer Wins!");
        } else if (computer === paper) {
            playerScore++
            console.log("Player wins!");
        };
    };
};

// console.log(round(playerChoice, computerChoice));

function game() {
    computerScore = 0;
    playerScore = 0;
    for (let i = 0; i <= 4; i++) {
        getComputerChoice();
        getPlayerChoice();
        round(playerChoice, computerChoice);
        console.log("The score is Computer:" + computerScore + " Player: " + playerScore);
    };
    if (playerScore > computerScore) {
        console.log("Out of 5 rounds, you smoked the computer bruv")
    } else if (playerScore < computerScore) {
        console.log("Out of 5 rounds, computer smoked you bruv")
    } else {
        console.log("You tied bruv")
    }
};

game()