const BtnClear = document.querySelector("#btn-clear");
const BtnEnterAmount = document.querySelector("#btn-createCanvas");
const BtnRandomColours = document.querySelector("#btn-random");
const CONTAINER = document.querySelector("#container");

let randomMode = false;

BtnRandomColours.addEventListener("click", () => {
    randomMode = !randomMode;
    });


BtnEnterAmount.addEventListener("click", enterSquareAmount);

    function randomHsl() {
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 70%)`;
}



function enterSquareAmount () {
    CONTAINER.innerHTML = "";
    let gridSize = prompt ("Please enter how many squares you want", "16")
    gridSize = Number(gridSize);

    if (
        Number.isNaN(gridSize) ||
        !Number.isInteger(gridSize) ||
        gridSize < 1 ||
        gridSize > 100
    ) {
        alert("Please enter a whole number between 1 and 100.");
        return;
    }

    for (let i = 0; i < (gridSize * gridSize); i++) {
        addSquare ();
        console.log(gridSize);
        
        CONTAINER.style.setProperty("--grid-size", gridSize);
    }
}




function addSquare () {
    const newSquare = document.createElement("div");

    newSquare.style.backgroundColor = "white";

    newSquare.addEventListener("click", clickSquare, false);
    newSquare.addEventListener("mouseover", hoverSquare, false);


    newSquare.classList.add("div-square")
    CONTAINER.appendChild(newSquare);

    function clickSquare () {
        newSquare.style.backgroundColor = "black";
    }

    function hoverSquare () {
        if (randomMode) {
            newSquare.style.backgroundColor = randomHsl();
        } else {
            newSquare.style.backgroundColor = "gray";
        }
    }

        function clearSquares () {
        newSquare.setAttribute("style", "background-color:white")
    }

BtnClear.addEventListener("click", clearSquares);


}



