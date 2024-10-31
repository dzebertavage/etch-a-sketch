const gridContainer = document.querySelector(".grid-container");
const containerDim = "800px";
const body = document.querySelector("body");
let userNumber = 2;
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
        alert(`Error: "${userNumber}" is not a number!`);
        return;
    } else {
        if (userNumber % 1 != 0) {
            alert("Error: Number must be a whole number!")
            return;
        } else {
            userNumber = parseInt(userNumber);
            if (userNumber > 100 || userNumber < 1) {
                alert("Error: Number must be from 1-100!")
                return;
            } else {
                return userNumber;
            }
        }
    }
}

function generateGrid(userNumber) {
    for (i = 0; i < Math.pow(userNumber, 2); i++) {
        createDiv(userNumber);
    }
}

function removeGrid() {
    document.querySelectorAll(".grid-square").forEach(e => e.remove());
}

const btnContainer = document.createElement("div");
body.insertBefore(btnContainer, gridContainer);
btnContainer.classList.toggle("btn-container");
const btn = document.createElement("button");
btnContainer.appendChild(btn);
btn.classList.toggle("btn");
btn.textContent = "Change Grid Size";

generateGrid(userNumber);

btn.addEventListener("click", () => {
    removeGrid();
    userNumber = getUserNumber();
    generateGrid(userNumber)
});