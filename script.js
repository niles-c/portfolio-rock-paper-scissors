// Project: Rock Paper Scissors

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const newGameBtn = document.querySelector("#newGame");
const roundScore = document.querySelector("#roundScore");
const finalScore = document.querySelector("#finalScore");
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");

// a function called computerPlay randomly returns "Rock", "Paper", or "Scissors"
function computerPlay() {
  let options = { 1: "rock", 2: "paper", 3: "scissors" };

  return options[Math.floor(Math.random() * 3) + 1];
}

let playerScore = 0;
let computerScore = 0;
// NEW VARIABLES:
let isGameOver = false;
let scoreToReach = 5;

rockBtn.addEventListener("click", function () {
  if (!isGameOver) {
    playRound("rock", computerPlay());
    endGame();
  }
});

paperBtn.addEventListener("click", function () {
  if (!isGameOver) {
    playRound("paper", computerPlay());
    endGame();
  }
});

scissorsBtn.addEventListener("click", function () {
  if (!isGameOver) {
    playRound("scissors", computerPlay());
    endGame();
  }
});

newGameBtn.addEventListener("click", function () {
  isGameOver = false;
  playerScore = 0;
  computerScore = 0;

  // remove lis appended to "play area" ul
});

// functon playRound() plays a single round of rock, paper, scissors
// function playRound(playerSelection, computerSelection) {
//   const newLi = document.createElement("li");
//   if (playerSelection === "rock" && computerSelection === "paper") {
//     newLi.innerText = `You chose ${playerSelection} and the computer chose ${computerSelection}. Paper beats rock! Sorry!`;
//     roundScore.appendChild(newLi);
//     computerScore++;
//     computer.innerText = computerScore;
//   } else if (playerSelection === "paper" && computerSelection === "rock") {
//     newLi.innerText = `You chose ${playerSelection} and the computer chose ${computerSelection}. Paper beats rock! Congrats!`;
//     roundScore.appendChild(newLi);
//     playerScore++;
//     player.innerText = playerScore;
//   } else if (playerSelection === "rock" && computerSelection === "scissors") {
//     newLi.innerText = `You chose ${playerSelection} and the computer chose ${computerSelection}. Rock beats scissors! Congrats!`;
//     roundScore.appendChild(newLi);
//     playerScore++;
//     player.innerText = playerScore;
//   } else if (playerSelection === "scissors" && computerSelection === "rock") {
//     newLi.innerText = `You chose ${playerSelection} and the computer chose ${computerSelection}. Rock beats scissors! Sorry!`;
//     roundScore.appendChild(newLi);
//     computerScore++;
//     computer.innerText = computerScore;
//   } else if (playerSelection === "scissors" && computerSelection === "paper") {
//     newLi.innerText = `You chose ${playerSelection} and the computer chose ${computerSelection}. Scissors beats paper! Congrats!`;
//     roundScore.appendChild(newLi);
//     playerScore++;
//     player.innerText = playerScore;
//   } else if (playerSelection === "paper" && computerSelection === "scissors") {
//     newLi.innerText = `You chose ${playerSelection} and the computer chose ${computerSelection}. Scissors beats paper! Sorry!`;
//     roundScore.appendChild(newLi);
//     computerScore++;
//     computer.innerText = computerScore;
//   } else if (playerSelection === computerSelection) {
//     newLi.innerText = `You chose ${playerSelection} and the computer chose ${computerSelection}. That's a tie!`;
//     roundScore.appendChild(newLi);
//   }
// }

function playRound(playerSelection, computerSelection) {
  const newLi = document.createElement("li");
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors")
  ) {
    newLi.innerText = `You chose ${playerSelection} and the computer chose ${computerSelection}. You lost.`;
    roundScore.appendChild(newLi);
    computerScore++;
    computer.innerText = computerScore;
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    newLi.innerText = `You chose ${playerSelection} and the computer chose ${computerSelection}. You win!`;
    roundScore.appendChild(newLi);
    playerScore++;
    player.innerText = playerScore;
  } else if (playerSelection === computerSelection) {
    newLi.innerText = `You chose ${playerSelection} and the computer chose ${computerSelection}. That's a tie!`;
    roundScore.appendChild(newLi);
  }
}

function endGame() {
  if (playerScore === scoreToReach || computerScore === scoreToReach) {
    isGameOver = true;
    if (playerScore === scoreToReach) {
      finalScore.innerText = "You won the game! Yay!";
    } else if (computerScore === scoreToReach) {
      finalScore.innerText = "You lost the game. Maybe next time.";
    }
  }
}

// function increaseComputer () {

//   if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "scissors" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "scissors")) {
//     newLi.innerText = `You chose ${playerSelection} and the computer chose ${computerSelection}. Paper beats rock! Sorry!`;
//     roundScore.appendChild(newLi);
//     computerScore++;
//     computer.innerText = computerScore;
// }

// write a new function called game()
// insert playRound() inside game() and loop playRound() to play a 5 round game
// Keep score and report a winner and loser at the end

// function game() {
//   for (let i = 0; i < 5; i++) {
//     let playerSelection = prompt(
//       "Choose rock, paper, or scissors"
//     ).toLowerCase();
//     // added a while loop to force the user to enter one of the three options
//     while (
//       playerSelection !== "rock" &&
//       playerSelection !== "paper" &&
//       playerSelection !== "scissors"
//     ) {
//       playerSelection = prompt(
//         "Choose a valid input: rock, paper, or scissors"
//       ).toLowerCase();
//     }

//     playRound(playerSelection, computerPlay());
//   }

//   if (playerScore > computerScore) {
//     console.log(
//       `Congrats! You beat the computer ${playerScore} out of 5 rounds!`
//     );
//   } else if (playerScore === computerScore) {
//     console.log("This game ended in a tie. How bizzare.");
//   } else {
//     console.log(
//       `Oh no, the computer beat you ${computerScore} out of 5 rounds...`
//     );
//   }
//   // ask the player if they want to play another 5-round game
//   let newGame = prompt(
//     "Would you like to play again? Choose yes or no"
//   ).toLowerCase();

//   // force the player to select a valid input with another while loop:
//   while (newGame !== "yes" && newGame !== "no") {
//     newGame = prompt("Choose yes or no").toLowerCase();
//   }

//   if (newGame === "yes") {
//     // reset scores for computer and player so they don't outpace rounds played
//     playerScore = 0;
//     computerScore = 0;
//     // invoke game() to start a new 5-round game
//     game();
//   } else {
//     console.log("Ok, goodbye for now.");
//   }
// }

// invoke function game() to play 5 rounds
// game();
