const rock = {
  asString: 'Rock',
  beats: (option) => option.asString.toLowerCase() === 'scissor',
  innerText: '✊',
};

const paper = {
  asString: 'Paper',
  beats: (option) => option.asString.toLowerCase() === 'rock',
  innerText: '✋',
};

const scissor = {
  asString: 'Scissor',
  beats: (option) => option.asString.toLowerCase() === 'paper',
  innerText: '✌',
};

let playerHealth;
let computerHealth;

const options = [rock, paper, scissor];

const buttons = document.querySelectorAll('button');

function getComputerChoice() {
  return options[Math.floor(Math.random() * 3)];
}

function playRound(event) {
  const playerChoice = getUsersChoice(event);
  const computerChoice = getComputerChoice();

  drawChoices(playerChoice, computerChoice);

  if (playerChoice.asString === computerChoice.asString) {
    return;
  }

  playerChoice.beats(computerChoice)
    ? (computerHealth = computerHealth - 20)
    : (playerHealth = playerHealth - 20);

  changeHealth('goku', playerHealth);
  changeHealth('vegeta', computerHealth);

  computerHealth <= 0 || (playerHealth <= 0 && endGame());
}

function endGame() {
  buttons.forEach((b) => b.removeEventListener('click', playRound));
}

function getUsersChoice(event) {
  const userInput = event.target.id;

  return options.find(
    (e) => e.asString.toLowerCase() === userInput.toLowerCase()
  );
}

function drawChoices(playerChoice, computerChoice) {
  const playerOption = document.querySelector('#gokuOption');
  const computerOption = document.querySelector('#vegetaOption');

  playerOption.innerText = playerChoice.innerText;
  computerOption.innerText = computerChoice.innerText;
}

function clearChoices() {
  const choices = document.querySelectorAll('.choice p');
  choices.forEach((p) => (p.innerText = '❔'));
}

function changeHealth(char, percent) {
  const healthBar = document.querySelector(`#${char}-health-bar`);
  healthBar.classList = `health-bar health-${percent}`;
}

function startGame() {
  clearChoices();
  playerHealth = 100;
  computerHealth = 100;
  changeHealth('goku', playerHealth);
  changeHealth('vegeta', computerHealth);
  buttons.forEach((b) => b.addEventListener('click', playRound));
}

function game() {
  startGame();
}

game();
