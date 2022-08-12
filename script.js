function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

// Plays a round of rock-paper-scissors between |playerChoice| and
// |computerChoice|.
//
// Returns -1, 0, or 1 for loss, tie, win respectively.
function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (playerChoice == computerChoice) {
    return 0;
  }

  return ((playerChoice == "rock" && computerChoice == "scissors") ||
          (playerChoice == "paper" && computerChoice == "rock") ||
          (playerChoice == "scissors" && computerChoice == "paper"))
             ? 1  // win
             : -1 // loss
}

function validChoice(choice) {
  choice = choice.toLowerCase();
  return choice == "rock" || choice == "paper" || choice == "scissors";
}

function game() {
  let wins = 0;
  let losses = 0;

  for (let i = 0; i < 5; ++i) {
    let playerChoice = prompt("Choose your fighter!");

    while (!validChoice(playerChoice)) {
      playerChoice = prompt("Choose from one of: rock, paper, scissors");
    }

    let computerChoice = getComputerChoice();
    let result = playRound(playerChoice, computerChoice);

    if (result == -1) {
      console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
      losses += 1;
    } else if (result == 0) {
      console.log(`You win! ${playerChoice} beats ${computerChoice}`);
      wins += 1;
    } else {
      console.log("You tied!");
    }
  }

  if (wins > losses) {
    console.log("Congratulations! You won the best-of-5 series!");
  } else if (wins < losses) {
    console.log("Better luck next time!");
  } else {
    console.log("Draw!");
  }
}
