# The Odin Project - Rock Paper Scissors

These are my solutions to Part 1 and Part 2 of the Rock Paper Scissors project on The Odin Project.

[See solution here](https://niles-c.github.io/portfolio-rock-paper-scissors/)

## Table of Contents

- [The Odin Project - Rock Paper Scissors](#the-odin-project---rock-paper-scissors)
  - [Table of Contents](#table-of-contents)
  - [Update (5/9/22)](#update-5922)
  - [Part 2 Update (4/14/22)](#part-2-update-41422)
    - [The Challenge](#the-challenge)
    - [My Process](#my-process)
  - [Part 1 (2/15/22)](#part-1-21522)
    - [The Challenge](#the-challenge-1)
    - [My Process](#my-process-1)
    - [Continued Development](#continued-development)

## Update (5/9/22)

I returned to my Rock, Paper, Scissors project to add styles for text and buttons.

For the color scheme, I used one of the trending color palettes on [coolors](https://coolors.co/palettes/trending) to spruce things up.

## Part 2 Update (4/14/22)

### The Challenge

Revisit the Rock, Paper, Scissors project to add a simple UI.

I was tasked with

- Creating buttons for each selection (rock, paper, or scissors)
- Adding a div to display results and changing all console.logs into DOM methods
- Displaying the running score, and announcing a winner of the game once one player reaches 5 points.
- Refactoring original code as necessary

I had the chance to practice using

- Query selectors
- Event listeners
- innerText method
- classList method

### My Process

I had a lot fun with Part 2 of this project, particuarly because I was exposed to new things like git branching and refactoring code (in addition to applying what I've learned in DOM manipulation).

Starting out with this project, I had the following goals in mind:

- Maintain the core logic where applicable, but identify opportunities to clean up lengthy code (my original function playRound was the main culprit)
- Convert all console.logs to DOM methods
- Take functionality that can stand alone, and move it into a separate function
- Remove code applicable to playing the game via the console (Part 1), such as the game() function that prompted the user for input, looped over playRound 5 times, and so on

I initially set up all of the DOM methods. I created three buttons for each selection (rock, paper, and scissors), and a new game button that would reset all values:

```js
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
  roundScore.innerText = "";
  player.innerText = "0";
  computer.innerText = "0";
  finalScore.innerText = "";
  player.classList.remove("winner", "loser");
  computer.classList.remove("winner", "loser");
});
```

I also created a function that would end the game, disabling the buttons, displaying the winner, and adding some basic CSS classes. As I mentioned earlier, I made an effort to move functionality to stand alone functions.

```js
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
```

Finally, I wanted to clean up my admittedly unruly playRound function.

First, I converted the console.logs to DOM methods. Each time playRound is called through a button click, a new "li" element is appended to the empty "ul" element that displays the round result. The score for the round winner increments, and the displayed score updates.

Second, I worked to condense the if...else conditions:

```js
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
```

I believe I was successful in cleaning up the playRound function. Instead of listing every possible condition, I grouped the conditions by those that result in a player win and by a computer win.

When I revisit this code in the future, I'm sure I'll realize even more ways to improve this code :)

Overall, this project was an extremely valuable learning experience. It was a joy to practice manipulating the DOM in Part 2. For the past several weeks, I've been diving into Javascript, learning arrays, methods, functions, and so on. In Part 2 of this project, I had the chance to see how JS, HTML, and CSS all work together.

## Part 1 (2/15/22)

### The Challenge

Users should be able to play a five-round game of the grade-school classic "rock paper scissors" against the computer from the browser console.

### My Process

This was my first time building a project in Javascript; it allowed me to test my knowledge of the fundamentals I've learned so far through The Odin Project and external resources.

In building my rock, paper, scissors game, I did the following:

- Prompted the user for input
- Declared variables
- Wrote if..else conditional statements
- Used for loops and while loops
- Defined and invoked functions
- Passed a function as an argument in another function

Prior to starting this project, I started to learn how to think like a programmer. I read about the importance of writing pseudocode and algorithms and how to break up a problem into subproblems. These methods proved immensely helpful throughout my process.

In his [lecture](https://youtu.be/azcrPFhaY9k) "How to Begin Thinking like a Programmer," Andy Harris explains the importance of comments. He goes on to offer a brilliant piece of advice: Comments aren't just there to explain code to other programmers; code explains the comments to the computer.

I took Andy's advice to heart, and made an effort to write a meaningful algorithm that I could follow as I built the game, and then wrote comments that succinctly explain the code I've written.

The algorithm I started with is as follows:

```javascript
// a function called computerPlay randomly returns "Rock", "Paper", or "Scissors"
// a function called playRound() plays a single round of rock paper scissors
// playRound() takes two parameters - playerSelection and computerSelection
// playRound() returns a string that declares the winner of the round
// the playerSelection parameter should be case-insensitive to account for variations
// functon playRound() plays a single round of rock, paper, scissors
// write a new function called game()
// insert playRound() inside game() and loop playRound() to play a 5 round game
// Keep score and report a winner and loser at the end
```

To begin, I wrote the computerPlay function to represent the computer's action:

```js
function computerPlay() {
  let options = { 1: "rock", 2: "paper", 3: "scissors" };

  return options[Math.floor(Math.random() * 3) + 1];
}
```

Within computerPlay I decared a variable with an object value. The properties of this object are the different options (or moves) the computer can make: rock, paper, and scissors. I used the Math.floor and Math.random functions to return a random option.

I declared two variables to hold the player's score and the computer's score:

```javascript
let playerScore = 0;
let computerScore = 0;
```

Then, I defined a function playRound with two parameters (playerSelection and computerSelection). Within this function, I wrote several else if statements within the if...else conditional to represent the various outcomes of the game:

```javascript
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

  return playerScore;
  return computerScore;
}
```

In function playRound, I incremented playerScore or computerScore depending on the outcome. I also printed the outcome to the player using template literals. I figured the user would appreciate seeing the result (and what the computer played) after each round in the 5-round game.

With the code set for a single round of rock, paper, scissors, I proceeded to write a function called game. I inserted playRound inside game and looped playRound five times.

The game begins by prompting a user for an input (rock, paper, or scissors) and storing the input in a variable called playerSelection. I used the toLowerCase function to ensure the input was case-insensitive. I also wrote a while loop that forces the user to enter a valid input.

I used a for loop to loop through playRound five times to simulate a five-round game. I passed playerSelection and computerPlay as arguments in playRound.

```javascript
function game() {
  for (let i = 0; i < 5; i++) {

    let playerSelection = prompt(
      "Choose rock, paper, or scissors"
    ).toLowerCase();

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
```

As mentioned earlier, playerScore and computerScore are incremented each round. Once the five-round game concludes, these scores are compared as a condition in an if...else statement, and one of the three results is printed to the player in a template literal: win, loss, or tie.

```javascript
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
```

I wanted to give the player an option to immediately replay a 5-round game (particularly if the game ended in a tie). I declared a variable newGame that prompts the user if they'd like to play again. As I did with the initial prompt, I used a while loop to ensure the user enters valid input.

If the user chooses to play again, I reset the value for playerScore and computerScore to 0, and invoked game. If the player chooses to quit, the game ceases.

```javascript
let newGame = prompt(
  "Would you like to play again? Choose yes or no"
).toLowerCase();

while (newGame !== "yes" && newGame !== "no") {
  newGame = prompt("Choose yes or no").toLowerCase();
}

if (newGame === "yes") {
  playerScore = 0;
  computerScore = 0;
  game();
} else {
  console.log("Ok, goodbye for now.");
}
```

See below for the full function:

```javascript
function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      "Choose rock, paper, or scissors"
    ).toLowerCase();

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

  let newGame = prompt(
    "Would you like to play again? Choose yes or no"
  ).toLowerCase();

  while (newGame !== "yes" && newGame !== "no") {
    newGame = prompt("Choose yes or no").toLowerCase();
  }

  if (newGame === "yes") {
    playerScore = 0;
    computerScore = 0;
    game();
  } else {
    console.log("Ok, goodbye for now.");
  }
}
```

```javascript
game();
```

### Continued Development

I'm proud of my first attempt at applying the Javascript basics I've learned so far. Fortunately, I get to return to this project later, as The Odin Project has students revisit the project to add a GUI with buttons and text. I'm looking forward to building the game outside of the browser console.

Additionally, I'd like to explore adding a feature that keeps score across each game played, rather than the score of individual rounds.

And finally, I plan to re-examine my code to see what I can streamline and make more efficient. I'm sure that as I gain a solid grasp of the concepts learned so far, I'll notice the holes and areas for improvement.
