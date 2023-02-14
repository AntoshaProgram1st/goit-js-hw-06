function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const color = document.querySelector(".color");
const changeColor = document.querySelector(".change-color");

changeColor.addEventListener("click", (event) => {
  event.preventDefault();
  const colorValue = getRandomHexColor();
  document.body.style.backgroundColor = colorValue;
  color.text = colorValue;
});
