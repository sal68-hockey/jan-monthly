// Initialize player and computer scores
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = '';


  if (playerChoice === computerChoice) {
    result = `It's a tie! Both chose ${playerChoice}.`;
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = `You win! ${playerChoice} beats ${computerChoice}.`;
    playerScore++;
  } else {
    result = `You lose! ${computerChoice} beats ${playerChoice}.`;
    computerScore++;
  }

  
  document.getElementById('player-score').innerText = playerScore;
  document.getElementById('computer-score').innerText = computerScore;

  
  document.getElementById('result').innerText = result;

  if (playerScore === 3 || computerScore === 3) {
    showWinner(playerScore > computerScore ? 'Player' : 'Computer');
  }
}


function showWinner(winner) {
  document.getElementById('winner-message').innerText = `${winner} wins the game!`;
  document.getElementById('popup').classList.remove('hidden');
}

// Reset the game
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById('player-score').innerText = playerScore;
  document.getElementById('computer-score').innerText = computerScore;
  document.getElementById('result').innerText = '';
  document.getElementById('popup').classList.add('hidden');
}