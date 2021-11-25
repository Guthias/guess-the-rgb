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

window.onload = () => {
  colorBalls();
};
