const gridContainer = document.querySelector(".grid-container");
let gridNumber = 16;

function createDiv() {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    gridContainer.appendChild(gridSquare);
}

createDiv();

/*
- variable to hold number of columns
- create function that places a div
- loop function based on column number variable
- 
*/