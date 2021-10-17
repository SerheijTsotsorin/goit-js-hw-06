function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesRef = document.querySelector("#boxes");
const inputRef = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
console.log(createButton);
let sizeBox = 30;
const createBoxes = (amount) => {
  for (let i = 0; i < amount; i++) {
    const boxEl = document.createElement("div");
    console.log(boxEl);
    sizeBox += 10;
    boxEl.style.width = `${sizeBox}px`;
    boxEl.style.height = `${sizeBox}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    boxesRef.append(boxEl);
  }
};

const onButtonClick = () => {
  createBoxes(inputRef.value);
  inputRef.value = "";
};

createButton.addEventListener("click", onButtonClick);
destroyButton.addEventListener("click", () => {
  boxesRef.innerHTML = "";
  sizeBox = 30;
});