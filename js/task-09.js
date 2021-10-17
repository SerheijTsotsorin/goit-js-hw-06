function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonRef = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");

const onButtonClick = () => {
  const color = getRandomHexColor();
 
  document.body.style.backgroundColor = color;
  spanRef.textContent = color;
}

buttonRef.addEventListener("click", onButtonClick)
