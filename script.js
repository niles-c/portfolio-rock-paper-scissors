// Project: Rock Paper Scissors

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const newGameBtn = document.querySelector("#newGame");
const roundResult = document.querySelector("#roundResult");
const finalScore = document.querySelector("#finalScore");

// a function called computerPlay randomly returns "Rock", "Paper", or "Scissors"
function computerPlay() {
  let options = { 1: "rock", 2: "paper", 3: "scissors" };

  return options[Math.floor(Math.random() * 3) + 1];
}

let playerScore = 0;
let computerScore = 0;
// NEW VARIABLES:
let isGameOver = false;
let roundsToPlay = 5;

rockBtn.addEventListener("click", function () {
  playRound("rock", computerPlay());
});

paperBtn.addEventListener("click", function () {
  playRound("paper", computerPlay());
});

scissorsBtn.addEventListener("click", function () {
  playRound("scissors", computerPlay());
});

newGameBtn.addEventListener("click", function () {
  isGameOver = false;
  playerScore = 0;
  computerScore = 0;
  // remove lis appended to "play area" ul
});

// functon playRound() plays a single round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    console.log(
      `You chose ${playerSelection} and the computer chose ${computerSelection}. Paper beats rock! Sorry!`
    );
    computerScore++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log(
      `You chose ${playerSelection} and the computer chose ${computerSelection}. Paper beats rock! Congrats!`
    );

    playerScore++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log(
      `You chose ${playerSelection} and the computer chose ${computerSelection}. Rock beats scissors! Congrats!`
    );
    playerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log(
      `You chose ${playerSelection} and the computer chose ${computerSelection}. Rock beats scissors! Sorry!`
    );
    computerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log(
      `You chose ${playerSelection} and the computer chose ${computerSelection}. Scissors beats paper! Congrats!`
    );
    playerScore++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log(
      `You chose ${playerSelection} and the computer chose ${computerSelection}. Scissors beats paper! Sorry!`
    );
    computerScore++;
  } else if (playerSelection === computerSelection) {
    console.log(
      `You chose ${playerSelection} and the computer chose ${computerSelection}. That's a tie!`
    );
  }
  // return the scores at the end of the round
  return playerScore;
  return computerScore;
}

// write a new function called game()
// insert playRound() inside game() and loop playRound() to play a 5 round game
// Keep score and report a winner and loser at the end

function game() {
  for (let i = 0; i < 5; i++) {
    // let playerSelection = prompt(
    //   "Choose rock, paper, or scissors"
    // ).toLowerCase();
    // // added a while loop to force the user to enter one of the three options
    // while (
    //   playerSelection !== "rock" &&
    //   playerSelection !== "paper" &&
    //   playerSelection !== "scissors"
    // ) {
    //   playerSelection = prompt(
    //     "Choose a valid input: rock, paper, or scissors"
    //   ).toLowerCase();
    // }

    playRound(playerSelection, computerPlay());
  }

  if (playerScore > computerScore) {
    console.log(
      `Congrats! You beat the computer ${playerScore} out of 5 rounds!`
    );
  } else if (playerScore === computerScore) {
    console.log("This game ended in a tie. How bizzare.");
  } else {
    console.log(
      `Oh no, the computer beat you ${computerScore} out of 5 rounds...`
    );
  }
  // ask the player if they want to play another 5-round game
  let newGame = prompt(
    "Would you like to play again? Choose yes or no"
  ).toLowerCase();

  // force the player to select a valid input with another while loop:
  while (newGame !== "yes" && newGame !== "no") {
    newGame = prompt("Choose yes or no").toLowerCase();
  }

  if (newGame === "yes") {
    // reset scores for computer and player so they don't outpace rounds played
    playerScore = 0;
    computerScore = 0;
    // invoke game() to start a new 5-round game
    game();
  } else {
    console.log("Ok, goodbye for now.");
  }
}

// invoke function game() to play 5 rounds
// game();
