let playerWins = 0,
  computerWins = 0,
  round = 0,
  playerSelection = null,
  computerSelection = null;

const btnChoices = document.querySelectorAll(".choices button"),
  resultsContainer = document.querySelector(".results-container"),
  results = document.querySelectorAll(".results li"),
  msgRound = document.querySelector("#msgRound"),
  msgFinalResult = document.querySelector("#finalResult"),
  playAgainContainer = document.querySelector(".playAgain"),
  btnPlayAgain = document.querySelector(".playAgain button");

btnChoices.forEach((btnChoice) => {
  btnChoice.addEventListener("click", () => {
    playerSelection = btnChoice.value;
    round++;
    if (round <= 5) {
      game();
    }
  });
});

function game() {
  computerChoice();
  playRound(playerSelection, computerSelection);
  roundResult();
  resultsContainer.style.visibility = "visible";

  if (round === 5) {
    playAgainContainer.style.visibility = "visible";
    finalResult(playerWins, computerWins);
    playAgain();
  }
}

function computerChoice() {
  let n = Math.random();
  n < 0.34
    ? (computerSelection = "rock")
    : n < 0.67
    ? (computerSelection = "paper")
    : (computerSelection = "scissors");
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  const msgWinner = `You got it, ${playerSelection} beats ${computerSelection}.`;
  const msgLoser = `Poor you, ${computerSelection} beats ${playerSelection}.`;
  const msgTie = `It's a tie! Nobody wins.`;

  if (playerSelection === computerSelection) {
    msgRound.textContent = msgTie;
  } else {
    if (playerSelection === "rock") {
      computerSelection === "scissors"
        ? (playerWins++, (msgRound.textContent = msgWinner))
        : (computerWins++, (msgRound.textContent = msgLoser));
    } else if (playerSelection === "paper") {
      computerSelection === "rock"
        ? (playerWins++, (msgRound.textContent = msgWinner))
        : (computerWins++, (msgRound.textContent = msgLoser));
    } else if (playerSelection === "scissors") {
      computerSelection === "paper"
        ? (playerWins++, (msgRound.textContent = msgWinner))
        : (computerWins++, (msgRound.textContent = msgLoser));
    }
  }
}

function roundResult() {
  results.forEach((btnResult) => {
    switch (btnResult.id) {
      case "attempt":
        btnResult.textContent = `Attempt ${round} of 5`;
        break;
      case "results":
        btnResult.textContent = `You chose ${playerSelection} and the computer chose ${computerSelection}`;
        break;
      case "score":
        btnResult.textContent = `You: ${playerWins}  x  Computer: ${computerWins}\n`;
        break;
    }
  });
}

function finalResult(playerWins, computerWins) {
  playerWins > computerWins
    ? (msgFinalResult.textContent = `Congrats! You are the winner!`)
    : computerWins > playerWins
    ? (msgFinalResult.textContent = `Better luck next time! :(`)
    : (msgFinalResult.textContent = `Guess what!? We don't have a winner!`);
}

function playAgain() {
  btnPlayAgain.textContent = "Play Again";
  btnPlayAgain.addEventListener("click", () => {
    resultsContainer.style.visibility = "hidden";
    playAgainContainer.style.visibility = "hidden";
    playerWins = 0;
    computerWins = 0;
    round = 0;
    playerSelection = null;
    computerSelection = null;
  });
}
