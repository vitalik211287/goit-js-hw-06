const inputEl = document.querySelector('#validation-input')

const requiredValueLength = inputEl.dataset.length
inputEl.addEventListener('blur', (event) => {
  const isNeededLength = event.target.value.length === Number(requiredValueLength)
  isNeededLength ?
    inputEl.setAttribute('class', 'valid') :
    inputEl.setAttribute('class', 'invalid')
})