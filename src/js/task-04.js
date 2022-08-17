let counterValue = 0

const decrementButton = document.querySelector("[data-action='decrement']")
const incrementButton = document.querySelector("[data-action='increment']")
const valueEl = document.querySelector('#value')

const renderCounterToEl = () => valueEl.textContent = counterValue

decrementButton.addEventListener('click', () => {
  counterValue -= 1
  renderCounterToEl()
})

incrementButton.addEventListener('click', () => {
  counterValue += 1
  renderCounterToEl()
})
