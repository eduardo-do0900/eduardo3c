const startButton = document.getElementById('startButton');
const settingsButton = document.getElementById('settingsButton');
const settingsMenu = document.getElementById('settingsMenu');
const screenButton = document.getElementById('screenButton');
const graphicsButton = document.getElementById('graphicsButton');
const audioButton = document.getElementById('audioButton');
const backButton = document.getElementById('backButton');

startButton.addEventListener('click', () => {
  console.log('Jogo iniciado!');
  // Adicione aqui o código para iniciar o jogo
});

settingsButton.addEventListener('click', () => {
  settingsMenu.style.display = 'block';
});

screenButton.addEventListener('click', () => {
  console.log('Configurações de tela abertas!');
  // Adicione aqui o código para abrir as configurações de tela
});

graphicsButton.addEventListener('click', () => {
  console.log('Configurações de gráficos abertas!');
  // Adicione aqui o código para abrir as configurações de gráficos
});

audioButton.addEventListener('click', () => {
  console.log('Configurações de áudio abertas!');
  // Adicione aqui o código para abrir as configurações de áudio
});

backButton.addEventListener('click', () => {
  settingsMenu.style.display = 'none';
});