'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const containerEl = document.getElementById("boxes");

function createBoxes(amount) {
  const boxes = [];
  let side = 30;
  for (let i = 1; i <= amount; i += 1) {
    const newBox = document.createElement("div");
    newBox.style.width = `${side}px`;
    newBox.style.height = `${side}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.style.margin = '5px'; 
    boxes.push(newBox);
    side += 10;
  }

  containerEl.append(...boxes);
}

function destroyBoxes() {
  inputEl.value = "";
  containerEl.innerHTML = "";
}

btnCreate.addEventListener("click", () => {
  inputEl.focus();
  const amount = parseInt(inputEl.value, 10);
  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
  inputEl.value = "";
});

btnDestroy.addEventListener("click", destroyBoxes);









