const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");
console.log(inputEl.value);
inputEl.value = Number.parseInt(window.getComputedStyle(spanEl).fontSize);
// spanEl.style.fontSize = `${inputEl.value}px`;
const handleInput = (event) => {
    spanEl.style.fontSize = `${event.currentTarget.value}px`
}
inputEl.addEventListener("input", handleInput);