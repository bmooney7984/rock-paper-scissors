// Function: computer chooses a move
function computerPlay() {
  const dieRoll = Math.floor(Math.random() * 3);
  let computerMove;

  if (dieRoll === 0) {
    computerMove = 'Rock';
  } else if (dieRoll === 1) {
    computerMove = 'Paper';
  } else {
    computerMove = 'Scissors';
  }

  return computerMove;
}

// Function: moves are compared to determine winner
function findWinner(playerSelection, computerSelection) {
  let playerNumericChoice = (playerSelection === 'Rock') ? 0 :
    (playerSelection === 'Paper') ? 1 : 2;

  let compNumericChoice = (computerSelection === 'Rock') ? 0 :
    (computerSelection === 'Paper') ? 1 : 2;

  if (playerSelection === computerSelection) {
    return 'neither';
  } else if (playerNumericChoice === (compNumericChoice + 1) % 3) {
    return 'player';
  } else {
    return 'computer';
  }
}

// Function: creates announcement to describe results of round
function describeRound(playerSelection, computerSelection) {
  const winner = findWinner(playerSelection, computerSelection);

  if (winner === 'neither') {
    return (`It's a draw! ${playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1)} matches ${computerSelection}.`);
  } else if (winner === 'player') {
    return (`You win! ${playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}.`);
  } else {
    return (`You lose! ${computerSelection.slice(0, 1).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`);
  }
}

// Function: keeps track of the scores
function updateScore(currentScore, playerSelection, computerSelection) {
  const winner = findWinner(playerSelection, computerSelection);
  if (winner === 'player') {
    currentScore[0] = currentScore[0] + 1;
    return currentScore;
  } else if (winner === 'computer') {
    currentScore[1] = currentScore[1] + 1;
    return currentScore;
  } else {
    return currentScore;
  }
}

// Function: plays a single round
function playRound(playerSelection) {
  let computerSelection = computerPlay(); // computer chooses a move
  let announcement = describeRound(playerSelection, computerSelection); // winner is determined
  const resultsHolder = document.querySelector('#resultsHolder');

  let scoreHolder;
  let youChose;
  let theyChose;
  let announcer;
  let winDeclaration

  if (winDeclaration = document.querySelector('#resultsHolder p:nth-child(5)')) {  // delete win declaration if it already exists
    winDeclaration.remove();
    currentScore = [0,0];
  }

  if (document.querySelector('#resultsHolder p') === null) {
    youChose = document.createElement('p');
    theyChose = document.createElement('p');
    announcer = document.createElement('p');
    scoreHolder = document.createElement('p');
  }  else {
    scoreHolder = document.querySelector('#resultsHolder p:nth-child(1)');
    youChose = document.querySelector('#resultsHolder p:nth-child(2)');
    theyChose = document.querySelector('#resultsHolder p:nth-child(3)');
    announcer = document.querySelector('#resultsHolder p:nth-child(4)');

  }

  youChose.textContent = 'You chose ' + playerSelection + '.';
  theyChose.textContent = 'Computer chose ' + computerSelection + '!';
  announcer.textContent = announcement;
  updateScore(currentScore, playerSelection, computerSelection);
  scoreHolder.textContent = `Score - Player: ${currentScore[0]}, Computer: ${currentScore[1]}`

  resultsHolder.append(scoreHolder);
  resultsHolder.append(youChose);
  resultsHolder.append(theyChose);
  resultsHolder.append(announcer);

  if (currentScore[0] === 5) {
    winDeclaration = document.createElement('p');
    winDeclaration.textContent = 'You did it! You won five rounds!';
    resultsHolder.append(winDeclaration);
  }

  if (currentScore[1] === 5) {
    winDeclaration = document.createElement('p');
    winDeclaration.textContent = 'Oh no! You lost five rounds!';
    resultsHolder.append(winDeclaration);
  }
}



let currentScore = [0, 0];

const buttons = document.querySelectorAll('button');

function activateButton(button) {
  button.addEventListener('click', function(event) {
    playRound(event.target.textContent);
  });
};

buttons.forEach(function(button) {
  activateButton(button);
});
