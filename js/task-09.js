const textColorEl = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
const changeBodyColor = document.querySelector('body')

const onColorChange = function () {
  const resColor = getRandomHexColor();
  changeBodyColor.style.backgroundColor = resColor;
  textColorEl.textContent = resColor;
}

changeColorBtn.addEventListener('click', onColorChange);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}