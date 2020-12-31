//etch-a-sketch psuedo code
//genorate a 16x16 grid (look up how to create multiple without repeating code)
//hovering over the square should highlight it black
//button should reset all the squares back to white
'use strict';

// Creates a default grid sized 16x16
const container = document.querySelector("#container");
const clearButton = document.querySelector('.clearGrid');

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  let gridSize = rows * cols;
  for (let c = 0; c < gridSize; c++) {
    let cell = document.createElement("div");
    cell.addEventListener('mouseover', () => sketch(cell))
    container.appendChild(cell).className = "grid-item";
    clearButton.addEventListener('click',  () => clearGrid(cell));
  };
};

makeRows(16,16);
function sketch(cell) {
  cell.style.backgroundColor = 'black';
}

function clearGrid(cell) {
  cell.style.backgroundColor = 'white';
}

function newGridSize() {
  container.innerHTML = '';
  let amount = Number(prompt('how many squares do you want?', ''));
  if(amount > 100) {
    alert('Number is too high');
    return newGridSize();
  } else if (amount < 1) {
    amount = 16;
  }
  console.log(amount);
  return makeRows(amount, amount);
}

clearButton.addEventListener('click', () => newGridSize());

