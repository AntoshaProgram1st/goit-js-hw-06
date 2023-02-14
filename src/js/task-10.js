const controls = document.querySelector("#controls");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
controls.addEventListener("click", (event) => {
  if (event.target.dataset.create) {
    const amount = +controls.querySelector("input").value;
    createBoxes(amount);
  } else if (event.target.dataset.destroy) {
    destroyBoxes();
  }
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i += step) {
    const size = 30 + i * 10;
    const box = document.createElement("div");
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
