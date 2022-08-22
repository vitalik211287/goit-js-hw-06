function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divEl = document.querySelector("#controls");
const boxEl = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const inputEl = document.querySelector("input");

createBtn.addEventListener("click", (event) => {
    createBoxes();
});

destroyBtn;

function createBoxes(amount) {
  amount = inputEl.value;
  for (let i = 0; i < amount ; i += 1) {
    const createEl = document.createElement("div");
    boxEl.append(createEl);
    console.log(createEl);
  }
}

