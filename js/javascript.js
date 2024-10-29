const gridContainer = document.querySelector(".grid-container");
let gridNumber = 16;

function createDiv() {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    gridContainer.appendChild(gridSquare);
}

function getUserNumber() {
    let userNumber = prompt("Enter a number from 1-100");
    if (isNaN(userNumber)) {
        alert(`Error - "${userNumber}" is not a number!`);
        return;
    } else {
        userNumber = parseInt(userNumber);
        return userNumber;
    }
}

/*
- variable to hold number of columns
- create function that places a div
- loop function based on column number variable
- 
*/