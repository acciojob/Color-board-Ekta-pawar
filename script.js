const board = document.getElementById('board');

for (let i = 0; i < 800; i++) {
  const box = document.createElement('div');
  box.className = 'box';

  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = colorGenerator();
  });

  box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "#444"; // reset color
  });

  board.appendChild(box);
}

function colorGenerator() {
  const colors = ["#e74c3c", "#8e44ad", "#3498db", "#1abc9c", "#f39c12", "#2ecc71"];
return colors[Math.floor(Math.random()*colors.length)]
}
