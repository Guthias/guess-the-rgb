const rgbColor = document.getElementById('rgb-color');

function randomRGB() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}

function colorBalls() {
  const elements = document.querySelectorAll('.ball');
  for (let i = 0; i < elements.length; i += 1) {
    elements[i].style.backgroundColor = randomRGB();
  }
}

function sayColor() {
  const elements = document.querySelectorAll('.ball');
  const colors = [];

  for (let i = 0; i < elements.length; i += 1) {
    colors.push(elements[i].style.backgroundColor);
  }

  const position = Math.round(Math.random() * colors.length);
  let colorAnswer = colors[position];
  colorAnswer = colorAnswer.replace('rgb', '');

  rgbColor.innerText = colorAnswer;
}

window.onload = () => {
  colorBalls();
  sayColor();
};
