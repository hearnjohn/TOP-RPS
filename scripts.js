function getComputerChoice() {
  let choice = Math.floor(Math.random() * 100) % 3;
  if (choice === 0) {
    return "ROCK";
  } else if (choice === 1) {
    return "SCISSORS";
  } else {
    return "PAPER";
  }
}

function singleRound(playerChoice, compChoice) {
  playerChoice = playerChoice.toUpperCase();
  if (playerChoice === compChoice) {
    // Tie
    return "Tie!";
  } else if (playerChoice === "ROCK") {
    if (compChoice === "SCISSORS") {
      return "You win! " + playerChoice + " beats " + compChoice;
    } else if (compChoice === "PAPER") {
      return "You lose. " + playerChoice + " loses to " + compChoice;
    }
  } else if (playerChoice === "SCISSORS") {
    if (compChoice === "ROCK") {
      return "You lose. " + playerChoice + " loses to " + compChoice;
    } else if (compChoice === "PAPER") {
      return "You win! " + playerChoice + " beats " + compChoice;
    }
  } else if (playerChoice === "PAPER") {
    if (compChoice === "ROCK") {
      return "You win! " + playerChoice + " beats " + compChoice;
    } else if (compChoice === "SCISSORS") {
      return "You lose. " + playerChoice + " loses to " + compChoice;
    }
  }
}

window.onload = function game() {
  let pScore = 0,
    cScore = 0;
  while (pScore < 5 && cScore < 5) {
    let playerChoice = window.prompt("Make your choice!");
    while (
      playerChoice.toLowerCase() != "rock" &&
      playerChoice.toLowerCase() != "scissors" &&
      playerChoice.toLowerCase() != "paper"
    ) {
      window.prompt("Invalid choice, try again!");
    }
    console.log(singleRound(playerChoice, getComputerChoice()));
  }

  if (pScore === 5) {
    console.log("You win!");
  } else {
    console.log("you lose");
  }
};
