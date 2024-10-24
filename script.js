const GRIDSIDE= 600;
const squaresPerSide = 16;

const sketchArea = document.getElementById("sketch-area");
const sliderContainer = document.getElementById("slider-container");
const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");



sliderValue.textContent = `${slider.value} x ${slider.value} (Resolution)`;
sketchArea.style.width = sketchArea.style.height =`${GRIDSIDE}px`;


function setBackgroundColor(){
    this.style.backgroundColor = "black";
}

function createGridCells(squaresPerSide) {

    const numOfSquares = (squaresPerSide * squaresPerSide);
    const widthHeight = `${(GRIDSIDE/squaresPerSide)-2}px`; 
    for(let i = 0; i < numOfSquares; i++){
        const gridCell = document.createElement("div");
        gridCell.style.width = widthHeight;
        gridCell.style.height = widthHeight;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener('mouseover', setBackgroundColor);
    }
}

function removeCell(){
    while(sketchArea.firstChild){
        sketchArea.removeChild(sketchArea.firstChild);
    }
}


createGridCells(squaresPerSide);