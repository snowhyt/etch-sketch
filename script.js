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
let isDrawing = false;

function toggleGrid(){
    gridVisible = gridVisible ? false : true;
    gridToggle.style.color = gridVisible ? accentColor : inactiveColor;

    removeGridCells();
    createGridCells();
}

function setBackgroundColor(e){
    if(e.type === "mousedown"){
        isDrawing = true;
        e.target.style.backgroundColor = "black"
    }
    else if (e.type === "mouseover" && isDrawing){
        e.target.style.backgroundColor = "black"
    }
    else isDrawing = false;
    

}

function createGridCells() {

    const numOfSquares = (squaresPerSide * squaresPerSide);
    for(let i = 0; i < numOfSquares; i++){
        const gridCell = document.createElement("div");
      
        if(gridVisible){
            widthHeight = `${(parseInt(gridWidth)/squaresPerSide)-2}px`;
            gridCell.style.border = "1px solid whitesmoke";
        } else if (!gridVisible){
            widthHeight = `${(parseInt(gridWidth)/squaresPerSide)}px`;
            gridCell.style.border = "none";
        }
        gridCell.style.width = gridCell.style.height = widthHeight;
       // gridCell.classList.add("cell");

       

        gridCell.addEventListener('mousedown', (e) => setBackgroundColor (e));
        gridCell.addEventListener('mouseover', (e) => setBackgroundColor (e));
        gridCell.addEventListener('mouseup', () => isDrawing = false);
        gridCell.addEventListener('drag', (e) => {e. preventDefault()} );
         sketchArea.appendChild(gridCell);
    }
}

function removeGridCells(){
    while(sketchArea.firstChild){
        sketchArea.removeChild(sketchArea.firstChild);
    }
}


slider.oninput = function(){
    sliderValue.innerHTML = `${this.value} x ${this.value} (Resolution)`;
    squaresPerSide = parseInt(this.value);
    removeGridCells();
    createGridCells(this.value);
}

gridToggle.addEventListener("click",toggleGrid);



createGridCells();



//29:57 