const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients');
const listRefToAdd = [];

ingredients.map(ingredient => {
  const createRef = document.createElement('li');
  createRef.classList.add('item');
  createRef.textContent = ingredient;
  listRefToAdd.push(createRef);
});

listRef.append(...listRefToAdd);