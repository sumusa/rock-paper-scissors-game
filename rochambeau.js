// function getComputerChoice() {
//     const choices = ['Rock', 'Paper', 'Scissors'];
//     const randomIndex = Math.floor(Math.random() * choices.length);
//     return choices[randomIndex];
// }

// // console.log(getComputerChoice())

// function playRound(playerSelection, computerSelection) {
//     playerSelection = playerSelection.toLowerCase();
  
//     if (
//       (playerSelection === 'rock' && computerSelection === 'Scissors') ||
//       (playerSelection === 'paper' && computerSelection === 'Rock') ||
//       (playerSelection === 'scissors' && computerSelection === 'Paper')
//     ) {
//       return `You Win! ${playerSelection} beats ${computerSelection}`;
//     } else if (
//       (playerSelection === 'scissors' && computerSelection === 'Rock') ||
//       (playerSelection === 'rock' && computerSelection === 'Paper') ||
//       (playerSelection === 'paper' && computerSelection === 'Scissors')
//     ) {
//       return `You Lose! ${computerSelection} beats ${playerSelection}`;
//     } else {
//       return "It's a Tie! Play again.";
//     }
// }

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
  
//     for (let i = 0; i < 5; i++) {
//       const playerSelection = prompt('Enter your choice: Rock, Paper, or Scissors');
//       const computerSelection = getComputerChoice();
//       const result = playRound(playerSelection, computerSelection);
      
//       console.log(result);
  
//       if (result.includes('Win')) {
//         playerScore++;
//       } else if (result.includes('Lose')) {
//         computerScore++;
//       }
//     }
  
//     console.log(`Final Score: You ${playerScore} - ${computerScore} Computer`);
  
//     if (playerScore > computerScore) {
//       console.log('Congratulations! You win the game!');
//     } else if (playerScore < computerScore) {
//       console.log('Sorry! You lose the game. Try again!');
//     } else {
//       console.log('The game is a tie. Play again to determine the winner.');
//     }
// }
  
// // Start the game
// game();
let playerScore = 0;
let computerScore = 0;
let playerName = '';

function startGame() {
  playerName = document.getElementById('player-name').value;
  if (playerName.trim() === '') {
    alert('Please enter your name to start the game.');
    return;
  }

  document.getElementById('name-input').style.display = 'none';
  document.getElementById('choices-container').style.display = 'flex';
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(playerSelection) {
  if (playerScore >= 5 || computerScore >= 5) {
    announceWinner();
    return;
  }

  const computerSelection = getComputerChoice();

  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    displayResult(`${playerName} Wins! ${playerSelection} beats ${computerSelection}`);
  } else if (
    (playerSelection === 'scissors' && computerSelection === 'rock') ||
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors')
  ) {
    computerScore++;
    displayResult(`${playerName} Loses! ${computerSelection} beats ${playerSelection}`);
  } else {
    displayResult(`It's a Tie! Try again, ${playerName}.`);
  }

  updateScore();
}

function displayResult(message) {
  const resultElement = document.getElementById('result');
  resultElement.textContent = message;
}

function updateScore() {
  const scoreElement = document.getElementById('score');
  scoreElement.textContent = `${playerName}: ${playerScore} - Computer: ${computerScore}`;

  if (playerScore >= 5 || computerScore >= 5) {
    announceWinner();
  }
}

function announceWinner() {
  const winnerMessage = document.getElementById('winner-message');
  const winnerText = document.getElementById('winner-text');

  if (playerScore > computerScore) {
    winnerText.textContent = `🎉 ${playerName} is the winner! 🏆`;
  } else if (computerScore > playerScore) {
    winnerText.textContent = '🎉 Computer is the winner! 🏆';
  } else {
    winnerText.textContent = 'It\'s a tie! No winner.';
  }

  winnerMessage.style.display = 'block';
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerName = '';

  document.getElementById('name-input').style.display = 'block';
  document.getElementById('choices-container').style.display = 'none';
  document.getElementById('winner-message').style.display = 'none';

  // updateScore();
}