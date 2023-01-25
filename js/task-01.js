const numOfCategoriesRef = document.querySelectorAll('.item');
console.log('Number of categories: ', numOfCategoriesRef.length);

numOfCategoriesRef.forEach(category => {
  console.log('Category:', category.firstElementChild.textContent);
  console.log('Elements:', category.lastElementChild.children.length);
});
