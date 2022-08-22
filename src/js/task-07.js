const inputValueEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputValueEl.addEventListener('input', (event) => {
     spanEl.style.fontSize = `${inputValueEl.value}px`;
});