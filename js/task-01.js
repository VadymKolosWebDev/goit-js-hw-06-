const numOfCategoriesRef = document.querySelectorAll('.item');
console.log('Number of categories: ', numOfCategoriesRef.length);
numOfCategoriesRef.forEach(category => {
  const group = [...category.children];
  // console.log(group);

  group.forEach(reference => {
    if (reference.tagName === 'H2') {
      console.log('Category:', reference.textContent);
    }
  });

  group.forEach(reference => {
    if (reference.tagName === 'UL') {
      console.log('Elements:', reference.children.length);
    }
  });
});