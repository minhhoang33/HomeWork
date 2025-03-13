let divide = document.getElementById("divide");
let plus = document.getElementById("plus");
let counter = document.getElementById("counter");

divide.onclick = function() {
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
    updateCounterColor();
}
plus.onclick = function() {
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
    updateCounterColor();
}

function updateCounterColor() {
  if (parseInt(counter.innerHTML) == 0) {
    counter.style.color = "#333333";
  } else if (parseInt(counter.innerHTML) > 0) {
    counter.style.color = "green";
  } else {
    counter.style.color = "red";
  }
}