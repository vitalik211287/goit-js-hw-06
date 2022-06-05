
const navEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${navEl.length}`); 

const navElItems = document.querySelectorAll("h2");
// const navElTitle = navElItems.forEach(
//     (navElItems) => (navElItems = console.log(`Category: ${navElItems.textContent}`)));
  
const navElList = document.querySelectorAll("li.item > ul");
// const navElList1 = navElList.forEach(
//   (navElList) =>
//         (navElList = console.log(`Elements: ${navElList.children.length}`))
// );
// const animal = {
//     category() {`Elements: ${navElList[0].children.length} `},
//     elItems() {`Category: ${navElItems[0].textContent}`},
// };
// console.log(animal.category);
console.log(`Category: ${navElItems[0].textContent}`);
console.log(`Elements: ${navElList[0].children.length}`);

console.log(`Category: ${navElItems[1].textContent}`);
console.log(`Elements: ${navElList[1].children.length}`);

console.log(`Category: ${navElItems[2].textContent}`);
console.log(`Elements: ${navElList[2].children.length}`);