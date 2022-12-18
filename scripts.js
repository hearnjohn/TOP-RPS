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
    return 1;
  } else if (playerChoice === "ROCK") {
    if (compChoice === "SCISSORS") {
      return 2;
    } else if (compChoice === "PAPER") {
      return 0;
    }
  } else if (playerChoice === "SCISSORS") {
    if (compChoice === "ROCK") {
      return 0;
    } else if (compChoice === "PAPER") {
      return 2;
    }
  } else if (playerChoice === "PAPER") {
    if (compChoice === "ROCK") {
      return 2;
    } else if (compChoice === "SCISSORS") {
      return 0;
    }
  }
}

function addButtonEventListeners() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", game);
  });
}

let pScore = 0,
  cScore = 0;

let roundMessage = document.getElementById("round-message");
let playAgain = document.getElementById("play-again");

function game() {
  if (pScore < 5 && cScore < 5) {
    const pSelection = this.id;
    console.log(pSelection);
    let result = singleRound(pSelection, getComputerChoice());
    if (result === 2) {
      pScore++;
      roundMessage.textContent =
        "You win this round! Score: " + pScore + "-" + cScore;
    } else if (result === 0) {
      cScore++;
      roundMessage.textContent =
        "You lost this round. Score: " + pScore + "-" + cScore;
    } else {
      roundMessage.textContent = "It's a tie! Score: " + pScore + "-" + cScore;
    }
  }

  if (pScore === 5) {
    roundMessage.textContent =
      "You won! Score: 5-" + cScore + ". Reload the page to play again!";
  } else if (cScore === 5) {
    roundMessage.textContent =
      "You lose! Score: " + pScore + "-5. Reload the page to play again!";
  }
}

addButtonEventListeners();
