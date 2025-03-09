// Câu 1
let p = document.createElement("p");
p.id = "text";
p.innerHTML = "Tôi có thể làm <em>bất cứ điều gì</em> tôi muốn với JavaScript.";
p.style.color = "#777";
p.style.fontSize = "2rem";
document.body.prepend(p);

// Câu 2
let listItems = document.querySelectorAll("ul li");
listItems.forEach((item) => {
  item.style.color = "blue";
});

// Câu 3
let ul = document.getElementById("list");
for (let i = 8; i <= 10; i++) {
  let li = document.createElement("li");
  li.textContent = "Item " + i;
  ul.appendChild(li);
}

ul.children[0].style.color = "red";

ul.children[2].style.backgroundColor = "green";

ul.children[3].remove();

let newLi = document.createElement("li");
newLi.textContent = "New Item";
ul.insertBefore(newLi, ul.children[3]);

