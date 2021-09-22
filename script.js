// Function: computer chooses a move
function computerPlay() {
  const dieRoll = Math.floor(Math.random() * 3);
  let computerMove;

  if (dieRoll === 0) {
    computerMove = 'rock';
  } else if (dieRoll === 1) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }

  return computerMove;
}

// Function: player chooses a move
function playerPlay() {
  let playerSelection;

  let input = window.prompt('Please enter your choice ("rock", "paper", or "scissors")').toLowerCase();

  if (input === 'rock' || input === 'paper' || input === 'scissors') {
    playerSelection = input;
  } else {
    playerSelection = null;
  }

  return playerSelection;
}

// Function: moves are compared to determine winner
function findWinner(playerSelection, computerSelection) {
  let playerNumericChoice = (playerSelection === 'rock') ? 0 :
    (playerSelection === 'paper') ? 1 : 2;

  let compNumericChoice = (computerSelection === 'rock') ? 0 :
    (computerSelection === 'paper') ? 1 : 2;

  if (playerSelection === computerSelection) {
    return (`It's a draw! ${playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1)} matches ${computerSelection}.`);
  } else if (playerNumericChoice === (compNumericChoice + 1) % 3) {
    return (`You win! ${playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}.`);
  } else {
    return (`You lose! ${computerSelection.slice(0, 1).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`);
  }
}

// Function: plays a single round
function playRound() {
  let playerSelection = playerPlay(); // player chooses a move
  let computerSelection = computerPlay(); // computer chooses a move
  let announcement = findWinner(playerSelection, computerSelection); // winner is determined
  console.log('You chose ' + playerSelection + '.'); // announce results
  console.log('Computer chose ' + computerSelection + '!');
  console.log(announcement);
}

// Function: plays a five-round game
function game() {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
}

game();
