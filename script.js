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

// functon playRound() plays a single round of rock, paper, scissors
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
  // return the scores at the end of the round
  return playerScore;
  return computerScore;
}

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
    // added a while loop to force the user to enter one of the three options
    while (
      playerSelection !== "rock" &&
      playerSelection !== "paper" &&
      playerSelection !== "scissors"
    ) {
      playerSelection = prompt(
        "Choose a valid input: rock, paper, or scissors"
      ).toLowerCase();
    }
    // invoke playRound() with arguments playerSelection (the player's input) and computerPlay() (the computer's random choice)
    playRound(playerSelection, computerPlay());
  }
  // report a winner at the end
  // IF the player won more rounds than the computer, declare the player as the winner
  // ELSE IF delcare a tie if the player and computer won an equal number of rounds
  // ELSE declare the computer as the winner
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
game();
