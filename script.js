const container = document.getElementById("container");

function createGrid(squaresPerSide) {
  const totalSquares = squaresPerSide * squaresPerSide;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseenter", () => {
      square.classList.add("painted");
    });

    container.appendChild(square);
  }
}

createGrid(16);
