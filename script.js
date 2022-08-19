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

function game() {
  let wins = 0;
  let losses = 0;
  let ties = 0;

  let rockButton = document.querySelector("#rock");
  let paperButton = document.querySelector("#paper");
  let scissorsButton = document.querySelector("#scissors");
  let resultsDiv = document.querySelector("#results");

  let winsDiv = document.querySelector("#wins");
  let lossesDiv = document.querySelector("#losses");
  let tiesDiv = document.querySelector("#ties");

  let f = (choice) => {
    if (wins >= 5 || losses >= 5) {
      return;
    }

    let computerChoice = getComputerChoice();
    let result = playRound(choice, computerChoice);
    let resultMessage = "";
    if (result == -1) {
      resultMessage = `You lose! ${computerChoice} beats ${choice}`;
      losses += 1;
    } else if (result == 0) {
      resultMessage = `You win! ${choice} beats ${computerChoice}`;
      wins += 1;
    } else {
      resultMessage = "You tied!";
      ties += 1;
    }

    if (wins >= 5) {
      resultMessage = "Congratulations! You were the first to 5 wins!";
    }
    if (losses >= 5) {
      resultMessage = "You lose! You get nothing! Good day sir!";
    }

    resultsDiv.textContent = resultMessage;
    winsDiv.textContent = wins.toString();
    lossesDiv.textContent = losses.toString();
    tiesDiv.textContent = ties.toString();
  };

  rockButton.addEventListener("click", () => f("rock"));
  paperButton.addEventListener("click", () => f("paper"));
  scissorsButton.addEventListener("click", () => f("scissors"));
}

game()
