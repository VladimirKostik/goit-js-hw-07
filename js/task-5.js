function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const changeColorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

changeColorButton.addEventListener("click", () =>{
    const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
})

