const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');
console.log(`Number of categories ${items.length}`);

items.forEach(function(item) {
  const header = item.querySelector('h2');
  const elements = item.querySelectorAll('li');
  console.log(`Category: ${header.textContent}, Elements: ${elements.length}`)
});