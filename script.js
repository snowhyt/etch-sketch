const GRIDSIDE= 600;
const squaresPerSide = 16;

const sketchArea = document.getElementById("sketch-area");
sketchArea.style.width = sketchArea.style.height =`${GRIDSIDE}px`;


function setBackgroundColor(){
    this.style.backgroundColor = "black";
}

function createGridCells() {

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

createGridCells();