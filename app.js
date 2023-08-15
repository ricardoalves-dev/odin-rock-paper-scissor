const rock = {
  asString: 'Rock',
  beats: (option) => option.asString.toLowerCase() === 'scissor',
};

const paper = {
  asString: 'Paper',
  beats: (option) => option.asString.toLowerCase() === 'rock',
};

const scissor = {
  asString: 'Scissor',
  beats: (option) => option.asString.toLowerCase() === 'paper',
};

const options = [rock, paper, scissor];

function getComputerChoice() {
  return options[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice, computerChoice) {
  if (typeof playerChoice === 'undefined') {
    return 'Please, pick one option between rock, paper or scissor';
  }

  if (playerChoice.asString === computerChoice.asString) {
    return "It's a draw!";
  }

  return playerChoice.beats(computerChoice)
    ? `You win! ${playerChoice.asString} beats ${computerChoice.asString}`
    : `You lose! ${computerChoice.asString} beats ${playerChoice.asString}`;
}

function getUsersChoice() {
  const userInput = prompt('Rock, Paper or Scissor?');
  if (userInput === null) {
    return undefined;
  }

  return options.find(
    (e) => e.asString.toLowerCase() === userInput.toLowerCase()
  );
}

function game() {
  const numberOfRounds = 5;
  for (let round = 0; round < numberOfRounds; round++) {
    console.log(playRound(getUsersChoice(), getComputerChoice()));
  }
}

game();
