
// Basitleştirilmiş script.js başlangıcı
const emojis = ['🍒','🍇','🍉','🍍','🥝','🍎'];
let grid = [];
let score = 0;
let time = 300;
let first = null;
let second = null;

function createGrid() {
  const gridElement = document.getElementById('grid');
  grid = [];
  for (let i = 0; i < 64; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.dataset.index = i;
    cell.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    cell.addEventListener('click', () => selectCell(cell));
    grid.push(cell);
    gridElement.appendChild(cell);
  }
}

function selectCell(cell) {
  if (!first) {
    first = cell;
    cell.style.border = '2px solid red';
  } else if (!second && cell !== first) {
    second = cell;
    swapAndCheck();
  }
}

function swapAndCheck() {
  const temp = first.textContent;
  first.textContent = second.textContent;
  second.textContent = temp;
  resetSelection();
}

function resetSelection() {
  first.style.border = 'none';
  second.style.border = 'none';
  first = null;
  second = null;
}

function resetGame() {
  document.getElementById('grid').innerHTML = '';
  score = 0;
  time = 300;
  document.getElementById('score').textContent = 'Score: 0';
  createGrid();
}

resetGame();
