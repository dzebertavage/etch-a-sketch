const gridContainer = document.querySelector(".grid-container");
const containerDim = "800px";
const body = document.querySelector("body");
let userNumber = 2;
gridContainer.style.height = containerDim;
gridContainer.style.width = containerDim;

function getRandomHex() {
    var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    return randomColor;
}

function createDiv(userNumber) {
    let squareDim = gridContainer.offsetHeight / userNumber;
    const gridSquare = document.createElement("div");
    gridContainer.appendChild(gridSquare);
    gridSquare.classList.add("grid-square");
    gridSquare.style.width = squareDim + "px";
    gridSquare.style.height = squareDim + "px";
    gridSquare.style.flexBasis = 100 / userNumber + "%";
    gridSquare.style.backgroundColor = "#23222a";
    gridSquare.style.opacity = "1.0";
    let newHoverColor;
    gridSquare.addEventListener("mouseenter", () => {
        newHoverColor = getRandomHex();
        let squareOpacity = gridSquare.style.opacity;
        squareOpacity = Number(squareOpacity).toFixed(1);
        squareOpacity = squareOpacity - 0.1;
        gridSquare.style.opacity = squareOpacity;
        gridSquare.style.backgroundColor = newHoverColor;
    });
    gridSquare.addEventListener("mouseleave", () => {
        gridSquare.style.backgroundColor = "transparent";
    });
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

