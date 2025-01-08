let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result;

  if (playerChoice === computerChoice) {
    result = `It's a tie! Both chose ${playerChoice}.`;
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    playerScore++;
    result = `Victory! ${playerChoice} defeats ${computerChoice}.`;
  } else {
    computerScore++;
    result = `Defeat! ${computerChoice} overpowers ${playerChoice}.`;
  }

  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
  document.getElementById('result').textContent = result;

  if (playerScore === 3 || computerScore === 3) {
    declareWinner(playerScore > computerScore ? 'Player' : 'Computer');
  }
}

function declareWinner(winner) {
  const popup = document.getElementById('popup');
  const winnerMessage = document.getElementById('winner-message');

  winnerMessage.textContent = `${winner} has won the battle!`;
  popup.classList.remove('hidden');
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
  document.getElementById('result').textContent = '';
  document.getElementById('popup').classList.add('hidden');
}