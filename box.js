let colors = ["#3498db", "#9b59b6", "#e74c3c", "#2c3e50", "#d35400"];

let boxesContainer = document.querySelector(".boxes");
let totalBoxSpan = document.querySelector(".points");
let btnMore = document.getElementById("btn");


function updateTotalBox() {
  totalBoxSpan.textContent = boxesContainer.children.length;
}

function createBoxes() {
  colors.forEach((color) => {
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = color;

   
    box.addEventListener("click", function () {
      box.remove();
      updateTotalBox();
    });

    boxesContainer.appendChild(box);
  });
  updateTotalBox();
}

createBoxes();

btnMore.addEventListener("click", function () {
  createBoxes();
});
