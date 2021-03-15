for (let i = 1; i <= 100; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  document.querySelector(".container").appendChild(box);
}

const btn = document.querySelector(".btn");
const randomPalette = document.querySelectorAll(".box");
function Color() {
  var chars = "0123456789abcdef";
  var colorLength = 6;
  var color = "";
  for (let i = 0; i < colorLength; i++) {
    var randomColor = Math.floor(Math.random() * chars.length);
    color += chars.substring(randomColor, randomColor + 1);
  }
  return "#" + color;
}

function addColor() {
  let RGB = (el) => {
    let el_1 = parseInt(el.substr(1, 2), 16);
    let el_2 = parseInt(el.substr(3, 2), 16);
    let el_3 = parseInt(el.substr(5, 2), 16);
    return el_1 + "," + el_2 + "," + el_3;
  };
  randomPalette.forEach((el) => {
    var newColor = Color();
    el.style.backgroundColor = newColor;
    el.innerHTML =
      newColor +
      "<br>rgb(" +
      RGB(newColor) +
      ")<br>rgba(" +
      RGB(newColor) +
      ",1)";
  });
}
