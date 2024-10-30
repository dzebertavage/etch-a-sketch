const gridContainer = document.querySelector(".grid-container");
const containerDim = "800px";
gridContainer.style.height = containerDim;
gridContainer.style.width = containerDim;
let userNumber = 16;

function createDiv(userNumber) {
    let squareDim = gridContainer.offsetHeight / userNumber;
    const gridSquare = document.createElement("div");
    gridContainer.appendChild(gridSquare);
    gridSquare.classList.add("grid-square");
    gridSquare.style.width = squareDim + "px";
    gridSquare.style.height = squareDim + "px";
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
    for (i = 0; i < userNumber; i++) {
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