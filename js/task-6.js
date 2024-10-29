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
  containerEl.innerHTML = "";
  let side = 30;
  for (let i = 1; i <= amount; i += 1) {
    const newBox = document.createElement("div");
    newBox.style.width = `${side}px`;
    newBox.style.height = `${side}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    containerEl.append(newBox);
    side += 10;
  }
}

function destroyBoxes() {
  inputEl.value = "";
  containerEl.innerHTML = "";
}

btnCreate.addEventListener("click", () => {
  inputEl.focus();
  if (inputEl.value > 0 && inputEl.value <= 100) {
    createBoxes(inputEl.value);
  }
  inputEl.value = "";
});
btnDestroy.addEventListener("click", destroyBoxes);