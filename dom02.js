document.addEventListener("DOMContentLoaded", function () {
  let paragraph = document.getElementById("text");
  let text = paragraph.innerHTML;


  text = text.replace(/,/g, "🤔").replace(/\./g, "😲");

  
  let words = text.split(/\s+/);
  let highlightedText = words
    .map((word) =>
      word.length >= 5
        ? `<span style="background-color: yellow;">${word}</span>`
        : word
    )
    .join(" ");

  paragraph.innerHTML = highlightedText;

 
  let facebookLink = document.createElement("a");
  facebookLink.href = "https://facebook.com";
  facebookLink.textContent = " Facebook";
  paragraph.insertAdjacentElement("afterend", facebookLink);

  
  let wordCount = words.length;
  document.getElementById(
    "wordCount"
  ).textContent = `Số từ trong đoạn văn: ${wordCount}`;
});
