const gridWidth =getComputedStyle(document.body).getPropertyValue("--grid-width")
const accentColor =getComputedStyle(document.body).getPropertyValue("--accent-color")
const inactiveColor =getComputedStyle(document.body).getPropertyValue("--inactive-color")


const container = document.querySelector(".container");

const sketchArea = document.getElementById("sketch-area");
const sliderContainer = document.getElementById("slider-container");
const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");


const gridToggle = document.getElementById("grid-toggle");

// sliderValue.textContent = `${slider.value} x ${slider.value} (Resolution)`;
// sketchArea.style.width = sketchArea.style.height =`${GRIDSIDE}px`;

let squaresPerSide = 16;
let gridVisible = false;

function toggleGrid(){
    gridVisible = gridVisible ? false : true;
    gridToggle.style.color = gridVisible ? accentColor : inactiveColor;

    removeGridCells();
    createGridCells();
}

function setBackgroundColor(){
    this.style.backgroundColor = "pink";
}

function createGridCells() {

    const numOfSquares = (squaresPerSide * squaresPerSide);
    //const widthHeight = `${(gridWidth/squaresPerSide)-2}px`; 
    for(let i = 0; i < numOfSquares; i++){
        const gridCell = document.createElement("div");
      
        if(gridVisible){
            widthHeight = `${(parseInt(gridWidth)/squaresPerSide)-2}px`;
            gridCell.style.border = "1px solid whitesmoke";
        } else if (!gridVisible){
            widthHeight = `${(parseInt(gridWidth)/squaresPerSide)}px`;
        }
        gridCell.style.width = gridCell.style.height = widthHeight;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener('mouseenter', setBackgroundColor);
    }
}

function removeGridCells(){
    while(sketchArea.firstChild){
        sketchArea.removeChild(sketchArea.firstChild);
    }
}


slider.oninput = function(){
    let txt = `${this.value} x ${this.value} (Resolution)`;
    sliderValue.innerHTML = txt;
    removeGridCells();
    createGridCells(this.value);
}


createGridCells();


//29:57 