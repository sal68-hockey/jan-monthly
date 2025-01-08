let playerScore = 0;
let computerScore = 0;
let playerName = 'Player';

function startGame() {
  const inputName = document.getElementById('player-name').value.trim();
  playerName = inputName || 'Player';
  document.getElementById('player-label').textContent = playerName;
  document.getElementById('welcome-popup').classList.add('hidden');
  document.getElementById('game-content').classList.remove('hidden');
}

function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result;

  if (playerChoice === computerChoice) {
    result = `It's a draw! Both chose ${playerChoice}.`;
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    playerScore++;
    result = `Victory! ${playerChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    result = `Defeat! ${computerChoice} beats ${playerChoice}.`;
  }

  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
  document.getElementById('result').textContent = result;

  if (playerScore === 3 || computerScore === 3) {
    declareWinner(playerScore > computerScore ? playerName : 'Computer');
  }
}

function declareWinner(winner) {
  const popup = document.getElementById('winner-popup');
  const winnerMessage = document.getElementById('winner-message');
  winnerMessage.textContent = `${winner} is victorious! Mission Accomplished!`;
  popup.classList.remove('hidden');
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
  document.getElementById('result').textContent = '';
  document.getElementById('winner-popup').classList.add('hidden');
}