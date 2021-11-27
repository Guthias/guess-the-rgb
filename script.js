const rgbColor = document.getElementById('rgb-color');
const answer = document.getElementById('answer');
const updateColors = document.getElementById('reset-game');
const score = document.getElementById('score');
function randomRGB() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}

function increaseScore() {
  const currentPoints = parseInt(score.innerText, 10);
  score.innerText = currentPoints + 3;
}

function checkRight(event) {
  let clickedColor = event.target.style.backgroundColor;
  clickedColor = clickedColor.replace('rgb', '');
  const rightColor = rgbColor.innerText;

  if (clickedColor === rightColor) {
    increaseScore();
    answer.innerText = 'Acertou!';
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}

function colorBalls() {
  const elements = document.querySelectorAll('.ball');
  for (let i = 0; i < elements.length; i += 1) {
    elements[i].style.backgroundColor = randomRGB();
    elements[i].addEventListener('click', checkRight);
  }
}

function sayColor() {
  const elements = document.querySelectorAll('.ball');
  const colors = [];

  for (let i = 0; i < elements.length; i += 1) {
    colors.push(elements[i].style.backgroundColor);
  }

  const position = Math.floor(Math.random() * colors.length);
  let colorAnswer = colors[position];
  colorAnswer = colorAnswer.replace('rgb', '');

  rgbColor.innerText = colorAnswer;
}

function newRound() {
  colorBalls();
  sayColor();
  answer.innerText = 'Escolha uma cor';
}
updateColors.addEventListener('click', newRound);

window.onload = () => {
  newRound();
};
