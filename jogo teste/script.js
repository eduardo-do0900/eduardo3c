const startButton = document.getElementById('startButton');
const settingsButton = document.getElementById('settingsButton');
const settingsMenu = document.getElementById('settingsMenu');
const difficultyMenu = document.getElementById('difficultyMenu');
const easyButton = document.getElementById('easyButton');
const mediumButton = document.getElementById('mediumButton');
const hardButton = document.getElementById('hardButton');
const backToMainMenuButton = document.getElementById('backToMainMenuButton');
const backToMainMenuFromSettingsButton = document.getElementById('backToMainMenuFromSettingsButton');

startButton.addEventListener('click', () => {
  menu.style.display = 'none';
  difficultyMenu.style.display = 'block';
});

settingsButton.addEventListener('click', () => {
  menu.style.display = 'none';
  settingsMenu.style.display = 'block';
});

easyButton.addEventListener('click', () => {
  console.log('Dificuldade: Fácil');
  // Adicione aqui o código para iniciar o jogo com a dificuldade fácil
});

mediumButton.addEventListener('click', () => {
  console.log('Dificuldade: Médio');
  // Adicione aqui o código para iniciar o jogo com a dificuldade média
});

hardButton.addEventListener('click', () => {
  console.log('Dificuldade: Difícil');
  // Adicione aqui o código para iniciar o jogo com a dificuldade difícil
});

backToMainMenuButton.addEventListener('click', () => {
  difficultyMenu.style.display = 'none';
  menu.style.display = 'block';
});

backToMainMenuFromSettingsButton.addEventListener('click', () => {
  settingsMenu.style.display = 'none';
  menu.style.display = 'block';
});