const gridWidth = getComputedStyle(document.body).getPropertyValue("--grid-width");
const accentColor = getComputedStyle(document.body).getPropertyValue("--accent-color");
const inactiveColor = getComputedStyle(document.body).getPropertyValue("--inactive-color");

const container = document.querySelector(".container");
const sketchArea = document.getElementById("sketch-area");
const sliderContainer = document.getElementById("slider-container");
const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");
const gridToggle = document.getElementById("grid-toggle");

let squaresPerSide = 16;
let gridVisible = false;
let isDrawing = false;

function toggleGrid() {
    gridVisible = !gridVisible;
    gridToggle.style.color = gridVisible ? accentColor : inactiveColor;
    removeGridCells();
    createGridCells();
}

function setBackgroundColor(e) {
    if (e.type === "mousedown") {
        isDrawing = true;
        e.target.style.backgroundColor = "black";
    } else if (e.type === "mouseover" && isDrawing) {
        e.target.style.backgroundColor = "black";
    } else {
        isDrawing = false;
    }
}

function createGridCells() {
    const numOfSquares = squaresPerSide * squaresPerSide;
    
    for (let i = 0; i < numOfSquares; i++) {
        const gridCell = document.createElement("div");
        
        let widthHeight = `${parseInt(gridWidth) / squaresPerSide}px`;
        if (gridVisible) {
            widthHeight = `${parseInt(gridWidth) / squaresPerSide - 2}px`;
            gridCell.style.border = "1px solid whitesmoke";
        } else {
            gridCell.style.border = "none";
        }

        gridCell.style.width = gridCell.style.height = widthHeight;
        sketchArea.appendChild(gridCell);

        gridCell.addEventListener('mousedown', (e) => setBackgroundColor(e));
        gridCell.addEventListener('mouseover', (e) => setBackgroundColor(e));
        gridCell.addEventListener('mouseup', () => isDrawing = false);
    }
}

function removeGridCells() {
    while (sketchArea.firstChild) {
        sketchArea.removeChild(sketchArea.firstChild);
    }
}

slider.oninput = function() {
    sliderValue.innerHTML = `${this.value} x ${this.value} (Resolution)`;
    squaresPerSide = parseInt(this.value);  // Update the squaresPerSide variable
    removeGridCells();
    createGridCells();
};

gridToggle.addEventListener("click", toggleGrid);

createGridCells();
