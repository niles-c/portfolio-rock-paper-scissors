// Project: Rock Paper Scissors

// Starting with an algorithm for the game:

// a function called computerPlay randomly returns "Rock", "Paper", or "Scissors"
function computerPlay() {
  let options = { 1: "rock", 2: "paper", 3: "scissors" };

  return options[Math.floor(Math.random() * 3) + 1];
}
// a function called playRound() plays a single round of rock paper scissors
// playRound() takes two parameters - playerSelection and computerSelection
// playRound() returns a string that declares the winner of the round
// the playerSelection parameter should be case-insensitive to account for variations

// playerScore and computerScore keep track of the round winner
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    console.log(
      `You chose ${playerSelection} and the computer chose ${computerSelection}. Paper beats rock! Sorry!`
    );
    // increment score when computer wins
    computerScore++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log(
      `You chose ${playerSelection} and the computer chose ${computerSelection}. Paper beats rock! Congrats!`
    );
    // increment score when player wins
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
  return playerScore;
  return computerScore;
}

// functon playRound() plays a single round of rock, paper, scissors.
// playRound(playerSelection, computerPlay());

// write a new function called game()
// insert playRound() inside game() and loop playRound() to play a 5 round game
// Keep score and report a winner and loser at the end

function game() {
  for (let i = 0; i < 5; i++) {
    // prompt the player to choose an option
    // use the toLowerCase() function to ensure input is case-insensitive
    let playerSelection = prompt(
      "Choose rock, paper, or scissors"
    ).toLowerCase();
    // added a while loop to ensure the user enters one of the three options
    while (
      playerSelection !== "rock" &&
      playerSelection !== "paper" &&
      playerSelection !== "scissors"
    ) {
      playerSelection = prompt(
        "Choose a valid input: rock, paper, or scissors"
      ).toLowerCase();
    }
    playRound(playerSelection, computerPlay());
  }
}

// invoke function game() to play 5 rounds
game();

// report a winner at the end
// IF number of player wins is less than player losses, print player loser
// ELSE print player winner

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

// in all 3 result scenarios (player wins, player loses, all ties), ask player if they want to play again

// I should find a way to keep the user in a while loop so they are prompted at the conclusion of every game

let newGame = prompt(
  "Would you like to play again? Choose yes or no"
).toLowerCase();

if (newGame === "yes") {
  game();
} else if (newGame === "no") {
  console.log("Ok, goodbye for now.");
} else {
  console.log("Sorry, please answer yes or no");
}

// Find a way to loop game without having to repeat the following code that displays the results

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
