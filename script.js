//etch-a-sketch psuedo code
//genorate a 16x16 grid (look up how to create multiple without repeating code)
//hovering over the square should highlight it black
//button should reset all the squares back to white
'use strict';

// Creates a default grid sized 16x16
const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (let c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);