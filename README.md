# The Odin Project - Rock Paper Scissors
This is a solution to Part 1 of the Rock Paper Scissors project on The Odin Project (Javascript Basics).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Breaking it down](#breaking-it-down)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- Play a five-round game of the grade-school classic "rock paper scissors" against the computer from the browser console.

## My process

### Built with

- Javascript

### What I learned

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



#### Breaking it down

To begin, I wrote a function computerPlay() to represent the computer's action:

```js
function computerPlay() {
  let options = { 1: "rock", 2: "paper", 3: "scissors" };

  return options[Math.floor(Math.random() * 3) + 1];
}
```

Within computerPlay() I decared a variable with an object value. The properties of this object are the different options (or moves) the computer can make: rock, paper, and scissors. I used the Math.floor() and Math.random() functions to return a random option.

I declared two variables to hold the player's score and the computer's score:

```` javascript
let playerScore = 0;
let computerScore = 0;
````

Then, I defined a function playRound() with two parameters (playerSelection and computerSelection). Within this function, I wrote several else if statements within the if...else conditional to represent the various outcomes of the game:

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

In function playRound(), I incremented playerScore or computerScore depending on the outcome. I also printed the outcome to the player using template literals. I figured the user would appreciate seeing the result (and what the computer played) after each round in the 5-round game.

With the code set for a single round of rock, paper, scissors, I proceeded to write a function called game(). I inserted playRound() inside game() and looped playRound() five times.

The game begins by prompting a user for an input (rock, paper, or scissors) and storing the input in a variable called playerSelection. I used the toLowerCase() function to ensure the input was case-insensitive. I also wrote a while loop that forces the user to enter a valid input.

I used a for loop to loop through playRound() five times to simulate a five-round game. I passed playerSelection and computerPlay() as arguments in playRound().

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

If the user chooses to play again, I reset the value for playerScore and computerScore to 0, and invoked game(). If the player chooses to quit, the game ceases.

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



### Continued development

I'm proud of my first attempt at applying the Javascript basics I've learned so far. Fortunately, I get to return to this project later, as The Odin Project has students revisit the project to add a GUI with buttons and text. I'm looking forward to building the game outside of the browser console.

Additionally, I'd like to explore adding a feature that keeps score across each game played, rather than the score of individual rounds. 

And finally, I plan to re-examine my code to see what I can streamline and make more efficient. I'm sure that as I gain a solid grasp of the concepts learned so far, I'll notice the holes and areas for improvement.
