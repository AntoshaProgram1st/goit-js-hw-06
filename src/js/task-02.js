const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
const ingredientUp = ingredients
  .map((ingredient) => `<li>${ingredient}</li>`)
  .join("");
ingredientsList.innerHTML = ingredientUp;





// Adding all the markup in one operation
