const inputEl = document.querySelector('#name-input');
const newEl = document.querySelector('#name-output')


inputEl.addEventListener('input', (event) => {
  const inputValue = event.target.value
  newEl.textContent = inputValue || "Anonymous"
})

