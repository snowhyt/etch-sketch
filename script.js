const GRIDESIDE= 600;
let rows = 16;
let cols = 16;

const sketchArea = document.getElementById("sketch-area");
sketchArea.style.width = `${GRIDESIDE}px`;
sketchArea.style.height =`${GRIDESIDE}px`;


function changeBackground(){
    this.style.backgroundColor = "black";
}

function createGridCells() {
    for(let i = 0; i < (rows * cols); i++){
        const gridCell = document.createElement("div");

        gridCell.style.width = `${(GRIDESIDE / cols)-2}px`;
        gridCell.style.height = `${(GRIDESIDE / rows)-2}px`;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener('mouseover', changeBackground);
    }
}

createGridCells();