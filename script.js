const gridWidth =getComputedStyle(document.body).getPropertyValue("--grid-width")
const accentColor =getComputedStyle(document.body).getPropertyValue("--accent-color")
const inactiveColor =getComputedStyle(document.body).getPropertyValue("--inactive-color")


//sarili kong code eraser

//end

const container = document.querySelector(".container");

const sketchArea = document.getElementById("sketch-area");
const sliderContainer = document.getElementById("slider-container");
const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");


const gridToggle = document.getElementById("grid-toggle");

//sarili kong code eraser
const eraserToggle = document.getElementById("eraser-toggle");
const paletteToggle = document.getElementById("palette-toggle");
let eraserVisible = false;
let paletteVisible = false;

//paletteFunction

function togglePalette(){
    paletteVisible = paletteVisible ? false : true;
    paletteToggle.style.color = paletteVisible ? accentColor : inactiveColor;
    paletteInterface();
}

function toggleEraser(){
    eraserVisible = eraserVisible ? false : true;
    eraserToggle.style.color = eraserVisible ? accentColor : inactiveColor;
    setBackgroundColor();

}


//end

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
    
    
    if (eraserVisible){
        this.style.backgroundColor = "white";
    } else {
        this.style.backgroundColor = "pink";
    }

    //sarili kong code

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
            gridCell.style.border = "none";
        }
        gridCell.style.width = gridCell.style.height = widthHeight;
       // gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener('mouseover', setBackgroundColor);
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

gridToggle.addEventListener("click",toggleGrid);

//sarili kong edit
eraserToggle.addEventListener("click", toggleEraser);
paletteToggle.addEventListener("click", togglePalette);

createGridCells();



//29:57 