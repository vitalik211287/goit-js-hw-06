const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsElements = ingredients.map((item)=>{
  const liRef = document.createElement('li')
  liRef.textContent = item
  liRef.classList.add('item')
  return liRef
})
console.log(ingredientsElements);
document.querySelector("ul#ingredients").append(...ingredientsElements)
