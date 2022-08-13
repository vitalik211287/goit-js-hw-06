const categoriesListRef = document.querySelector('#categories')
const categoriesItems = categoriesListRef.children

// 1.
const categoriesAmount = categoriesItems.length
console.log(`Number of categories: ${categoriesAmount}`);

// 2.
[...categoriesItems].forEach((item)=>{
  const titleRef = item.querySelector("h2")
  console.log(`Category: ${titleRef.textContent}`);
  const items = item.querySelectorAll("li")
  console.log(`Elements: ${items.length}`);
})