let computerChoice;
let playerChoice;
let computerScore = 0;
let playerScore = 0;
let winner;

const rock = "rock";
const paper = "paper";
const scissors = "scissors";

const buttons = document.querySelectorAll("button.player");
const output = document.querySelector(".result")
const scoreboard = document.querySelector(".scoreboard");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(e.target.value)
        playerChoice = e.target.value;
        getComputerChoice();
        round(playerChoice, computerChoice);
        
        scoreboard.innerHTML = `Player Score: ${playerScore} || Computer Score: ${computerScore}`
    });
});

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

// function getPlayerChoice() {
//     let temp = prompt("Please enter your selection for rock, paper, scissors.")
//     temp.toLowerCase();
//     playerChoice = temp;
//     console.log("You chose: " + temp);
// };
// getPlayerChoice();


function round(player, computer) {
    if (playerScore >= 5 || computerScore >= 5) {
        output.innerHTML =  `Please start a new game, ${winner} has already won the match!`
        return;
    };
    if (player === computer) {
        console.log("Nobody wins.");
        winner = "tie";
    } else if (player === rock) {
        if (computer === paper) {
            computerScore++
            console.log("Computer Wins!");
            winner = "computer";
        } else if (computer === scissors) {
            playerScore++
            console.log("Player wins!");
            winner = "player";
        };
    } else if (player === paper) {
        if (computer === scissors) {
            computerScore++
            console.log("Computer Wins!");
            winner = "computer";
        } else if (computer === rock) {
            playerScore++
            console.log("Player wins!");
            winner = "player";
        };
    } else if (player === scissors) {
        if (computer === rock) {
            computerScore++
            console.log("Computer Wins!");
            winner = "computer";
        } else if (computer === paper) {
            playerScore++
            console.log("Player wins!");
            winner = "player";
        };
    };

    if (winner === "player") {
        output.innerHTML = `Player won because ${playerChoice} beats ${computerChoice}!`;
    } else if (winner === "computer") {
        output.innerHTML = `Computer won because ${computerChoice} beats ${playerChoice}!`;
    } else {
        output.innerHTML = `Nobody wins because you both picked ${computerChoice}!`
    }
};


function playRound() {
    if (playerChoice === null) {
        return
    }
    getComputerChoice();
    // getPlayerChoice();
    round(playerChoice, computerChoice);
};



// console.log(round(playerChoice, computerChoice));

function game() {
    computerScore = 0;
    playerScore = 0;
    output.innerHTML = "";
    scoreboard.innerHTML = "";
    for (let i = 0; playerScore <= 4 || computerScore <= 4; i++) {
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