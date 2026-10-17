const container = document.getElementById("container");
const newGridButton = document.getElementById("new-grid-button");

function getRandomValue() {
  return Math.floor(Math.random() * 256);
}

function createGrid(squaresPerSide) {
  const totalSquares = squaresPerSide * squaresPerSide;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = 100 / squaresPerSide + "%";

    let red;
    let green;
    let blue;
    let passes = 0;

    square.addEventListener("mouseenter", () => {
      if (passes === 0) {
        red = getRandomValue();
        green = getRandomValue();
        blue = getRandomValue();
      }

      if (passes < 10) {
        passes = passes + 1;
      }

      square.style.backgroundColor =
        "rgba(" + red + ", " + green + ", " + blue + ", " + passes / 10 + ")";
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
