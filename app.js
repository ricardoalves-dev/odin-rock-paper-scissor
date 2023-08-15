const rock = {
  asString: 'rock',
  beats: (option) => option.asString === 'scissor',
};

const paper = {
  asString: 'paper',
  beats: (option) => option.asString === 'rock',
};

const scissor = {
  asString: 'scissor',
  beats: (option) => option.asString === 'paper',
};

const options = [rock, paper, scissor];

function getComputerChoice() {
  return options[Math.floor(Math.random() * 3)];
}
