'use strict';
//etch-a-sketch psuedo code
//genorate a 16x16 grid (look up how to create multiple without repeating code)
//hovering over the square should highlight it black
//button should reset all the squares back to white

// Creates a default grid sized 16x16
const container = document.querySelector("#container");
const clearButton = document.querySelector('.clearGrid');

function greateGrid(rows = 16, columns = 16) {
  let total = (rows * columns);
  for(let i = 0; i < total; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => colorGrid(square));
    container.style.setProperty('grid-template-columns', `repeat(${columns}, 2fr)`);
    container.style.setProperty('grid-template-rows', `repeat(${rows}, 2fr)`);
    container.appendChild(square);
  };
};
greateGrid(16,16);

function clearGrid(amount = 16) {
  container.innerHTML = '';
  amount = Number(prompt('How many squares would you like? (1 -100)', ''));
  if(amount > 100) {
    alert('Too Many Squares! Try Again.');
  } else if (amount <= 0) {
    amount = 16;
  }
  greateGrid(amount, amount)
}

function colorGrid(square) {
 return square.classList.add('black');
}

clearButton.addEventListener('click', clearGrid);