const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const itemEl = ingredients.map(el => {
  const listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.textContent = el;
  return listItem;
});
  list.append(...itemEl);
console.log(list);