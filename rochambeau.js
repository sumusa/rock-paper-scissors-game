function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
  
    if (
      (playerSelection === 'rock' && computerSelection === 'Scissors') ||
      (playerSelection === 'paper' && computerSelection === 'Rock') ||
      (playerSelection === 'scissors' && computerSelection === 'Paper')
    ) {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (
      (playerSelection === 'scissors' && computerSelection === 'Rock') ||
      (playerSelection === 'rock' && computerSelection === 'Paper') ||
      (playerSelection === 'paper' && computerSelection === 'Scissors')
    ) {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      return "It's a Tie! Play again.";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt('Enter your choice: Rock, Paper, or Scissors');
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
      
      console.log(result);
  
      if (result.includes('Win')) {
        playerScore++;
      } else if (result.includes('Lose')) {
        computerScore++;
      }
    }
  
    console.log(`Final Score: You ${playerScore} - ${computerScore} Computer`);
  
    if (playerScore > computerScore) {
      console.log('Congratulations! You win the game!');
    } else if (playerScore < computerScore) {
      console.log('Sorry! You lose the game. Try again!');
    } else {
      console.log('The game is a tie. Play again to determine the winner.');
    }
}
  
// Start the game
game();
