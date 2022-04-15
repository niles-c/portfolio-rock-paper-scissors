// Project: Rock Paper Scissors

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const newGameBtn = document.querySelector("#newGame");
const roundScore = document.querySelector("#roundScore");
const finalScore = document.querySelector("#finalScore");
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");

// function randomly returns "Rock", "Paper", or "Scissors"
function computerPlay() {
  let options = { 1: "rock", 2: "paper", 3: "scissors" };

  return options[Math.floor(Math.random() * 3) + 1];
}

// set initial values for the game
let playerScore = 0;
let computerScore = 0;
let isGameOver = false;
let scoreToReach = 5;

// each button calls playRound when clicked
// each button can call endGame when scoreToReach = 5
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

// restart the game by reseting score, clearing score log, and removing classes

newGameBtn.addEventListener("click", function () {
  isGameOver = false;
  playerScore = 0;
  computerScore = 0;
  roundScore.innerText = "";
  player.innerText = "0";
  computer.innerText = "0";
  finalScore.innerText = "";
  player.classList.remove("winner", "loser");
  computer.classList.remove("winner", "loser");
});

// for each round, a new li is added as a round score log
// player or computer score increments
// player and computer score displays each round
function playRound(playerSelection, computerSelection) {
  const newLi = document.createElement("li");
  newLi.classList.add("newLi");
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

// winner and loser delcared when player or computer score equals scoreToReach
// styles added for winner and loser
function endGame() {
  if (playerScore === scoreToReach || computerScore === scoreToReach) {
    isGameOver = true;
    if (playerScore === scoreToReach) {
      finalScore.innerText = "You won the game! Yay!";
      player.classList.add("winner");
      computer.classList.add("loser");
    } else if (computerScore === scoreToReach) {
      finalScore.innerText = "You lost the game. Maybe next time.";
      computer.classList.add("winner");
      player.classList.add("loser");
    }
  }
}
