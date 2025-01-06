// Initialize player and computer scores
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = '';

  // Determine the winner
  if (playerChoice === computerChoice) {
    result = `It's a tie! Both chose ${playerChoice}.`;
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = `You win! ${playerChoice} beats ${computerChoice}.`;
    playerScore++;
    showPopup();
  } else {
    result = `You lose! ${computerChoice} beats ${playerChoice}.`;
    computerScore++;
  }

  // Update the scores on the screen
  document.getElementById('player-score').innerText = playerScore;
  document.getElementById('computer-score').innerText = computerScore;

  // Display the result
  document.getElementById('result').innerText = result;
}

// Show popup when the player wins
function showPopup() {
  document.getElementById('popup').classList.remove('hidden');
}

// Close popup
function closePopup() {
  document.getElementById('popup').classList.add('hidden');
}