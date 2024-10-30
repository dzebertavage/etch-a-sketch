const gridContainer = document.querySelector(".grid-container");
const containerDim = "800px";
let userNumber = 20;
addHoverStyle();
gridContainer.style.height = containerDim;
gridContainer.style.width = containerDim;

function addHoverStyle() {
    const squareHover = `.grid-square:hover {
    background-color: grey;
}`
    const newStyle = document.createElement("style");
    newStyle.textContent = squareHover;
    document.head.appendChild(newStyle);
}

function createDiv(userNumber) {
    let squareDim = gridContainer.offsetHeight / userNumber;
    const gridSquare = document.createElement("div");
    gridContainer.appendChild(gridSquare);
    gridSquare.classList.add("grid-square");
    gridSquare.style.width = squareDim + "px";
    gridSquare.style.height = squareDim + "px";
    gridSquare.style.flexBasis = 100 / userNumber + "%";

}

function getUserNumber() {
    let userNumber = prompt("Enter a number from 1-100");
    if (isNaN(userNumber)) {
        alert(`Error - "${userNumber}" is not a number!`);
        return;
    } else {
        userNumber = parseInt(userNumber);;
        return userNumber;
    }
}

function generateGrid(userNumber) {
    for (i = 0; i < Math.pow(userNumber, 2); i++) {
        createDiv(userNumber);
    }
}

generateGrid(userNumber);

/*
- variable to hold number of columns
- create function that places a div
- loop function based on column number variable
- 
*/