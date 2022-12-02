rockPaperScissors();

function rockPaperScissors() {
  alert("Press OK to start");
  let playerWins = 0;
  let computerWins = 0;

  for (let i = 0; i < 5; i++) {
    playerSelectionValidator();

    if (playerSelection === null) {
      return alert("Ok. I got it. You don't want to play.");
    } else {
      console.log(`Player selection is: ${playerSelection}`);

      computerPlay();
      console.log(`Computer selection is: ${computerSelection}`);

      attemptMsg = `Attempt ${i + 1} of 5
      You: ${playerSelection}  x  Computer: ${computerSelection}\n`;

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
  }

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
  playAgain();
}

function playerSelectionValidator() {
  playerSelection = prompt("Make your choice: Rock, Paper or Scissors?");

  if (playerSelection === null) {
    return;
  } else {
    playerSelection = playerSelection.toLowerCase();
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

function playAgain() {
  restart = prompt("Do you want to play again? (Y / N)");
  if (restart === null) {
    return;
  } else {
    restart = restart.toLowerCase();
    switch (restart) {
      case "y":
        rockPaperScissors();
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
