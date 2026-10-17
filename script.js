const container = document.getElementById("container");
const newGridButton = document.getElementById("new-grid-button");

function createGrid(squaresPerSide) {
  const totalSquares = squaresPerSide * squaresPerSide;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = 100 / squaresPerSide + "%";

    square.addEventListener("mouseenter", () => {
      square.classList.add("painted");
    });

    container.appendChild(square);
  }
}

newGridButton.addEventListener("click", () => {
  const answer = prompt("How many squares per side? (1 to 100)");

  if (answer === null) {
    return;
  }

  const squaresPerSide = Number(answer);

  if (
    !Number.isInteger(squaresPerSide) ||
    squaresPerSide < 1 ||
    squaresPerSide > 100
  ) {
    alert("Please enter a whole number from 1 to 100.");
    return;
  }

  container.innerHTML = "";
  createGrid(squaresPerSide);
});

createGrid(16);
