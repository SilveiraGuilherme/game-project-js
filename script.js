let playerWins = 0;
let computerWins = 0;

function playerSelectionValidator() {
  playerSelection = prompt("Make your choice: Rock, Paper or Scissors?");

  if (playerSelection === null) {
    return;
  } else {
    playerSelection = playerSelection.toLowerCase().trim();
    switch (playerSelection) {
      case "rock":
        break;
      case "paper":
        break;
      case "scissors":
        break;
      default:
        alert("Oops... Not a valid option!");
        playerSelectionValidator();
    }
    return playerSelection;
  }
}

function computerPlay() {
  let n = Math.random();
  n < 0.34
    ? (computerSelection = "rock")
    : n < 0.67
    ? (computerSelection = "paper")
    : (computerSelection = "scissors");
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection !== computerSelection) {
    if (playerSelection === "rock") {
      if (computerSelection === "scissors") {
        playerWins++;
        alert(
          `${attemptMsg}\nYou got it, ${playerSelection} beats ${computerSelection}.\n      You ${playerWins}  x  Computer ${computerWins}`
        );
      } else {
        computerWins++;
        alert(
          `${attemptMsg}\nPoor you, ${computerSelection} beats ${playerSelection}.\n      You ${playerWins}  x  Computer ${computerWins}`
        );
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "rock") {
        playerWins++;
        alert(
          `${attemptMsg}\nYou got it, ${playerSelection} beats ${computerSelection}.\n      You ${playerWins}  x  Computer ${computerWins}`
        );
      } else {
        computerWins++;
        alert(
          `${attemptMsg}\nPoor you, ${computerSelection} beat ${playerSelection}.\n      You ${playerWins}  x  Computer ${computerWins}`
        );
      }
    } else if (playerSelection === "scissors") {
      if (computerSelection === "paper") {
        playerWins++;
        alert(
          `${attemptMsg}\nYou got it, ${playerSelection} beat ${computerSelection}.\n      You ${playerWins}  x  Computer ${computerWins}`
        );
      } else {
        computerWins++;
        alert(
          `${attemptMsg}\nPoor you, ${computerSelection} beats ${playerSelection}.\n      You ${playerWins}  x  Computer ${computerWins}`
        );
      }
    }
  } else
    alert(
      `${attemptMsg}\nIt's a tie! Nobody wins.\n      You ${playerWins}  x  Computer ${computerWins}`
    );
  console.log(`Player ${playerWins} x Computer ${computerWins}`);
}

function game() {
  alert("Press OK to start");

  for (let i = 0; i < 5; i++) {
    playerSelectionValidator();

    if (playerSelection === null) {
      return alert(
        "Ok. I got it. You don't want to play. If you change your mind, click ok and reload the page. Thank you! :)"
      );
    } else {
      console.log(`Player selection is: ${playerSelection}`);

      computerPlay();
      console.log(`Computer selection is: ${computerSelection}`);

      attemptMsg = `Attempt ${i + 1} of 5
      You: ${playerSelection}  x  Computer: ${computerSelection}\n`;
    }

    playRound(playerSelection, computerSelection);
  }

  finalResult(playerWins, computerWins);

  playAgain();
}

function finalResult(playerWins, computerWins) {
  if (playerWins > computerWins) {
    alert(
      `Congrats! You are the winner.\nYou ${playerWins}  x  Computer ${computerWins}`
    );
    console.log("Congrats! You are the winner.");
  } else if (computerWins > playerWins) {
    alert(
      `Better luck next time! :(\nYou ${playerWins}  x  Computer ${computerWins}`
    );
    console.log("Better luck next time! :(");
  } else {
    alert(
      `Guess what!? We don't have a winner!\nYou ${playerWins}  x  Computer ${computerWins}`
    );
    console.log("Guess what!? We don't have a winner!");
  }
}

function playAgain() {
  restart = prompt("Do you want to play again? (Y / N)");
  if (restart === null) {
    return;
  } else {
    restart = restart.toLowerCase().trim();
    switch (restart) {
      case "y":
        game();
        break;
      case "n":
        alert("See you later!");
        break;
      default:
        alert("I didn't get that. Try again!");
        playAgain();
    }
  }
}

game();
