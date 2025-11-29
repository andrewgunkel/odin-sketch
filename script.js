//const BtnAdd4x4 = document.querySelector("#btn-4x4");
const BtnClear = document.querySelector("#btn-clear");
const BtnEnterAmount = document.querySelector("#btn-other");
const BtnRandomColours = document.querySelector("#btn-random");
const CONTAINER = document.querySelector("#container");

//const gridSize = 16;

//BtnAdd4x4.addEventListener("click", add4X4Squares);


/* function add4X4Squares () {
    for (let i = 0; i < gridSize * gridSize; i++) {
    addSquare ();
    document.getElementById("btn-4x4").disabled = true;

}

} */

BtnEnterAmount.addEventListener("click", enterSquareAmount);


BtnRandomColours.addEventListener("click", randomColourGenerator);

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

function randomColourGenerator () {

}


function addSquare () {
    const newSquare = document.createElement("div");

    newSquare.style.backgroundColor = "white";

    newSquare.addEventListener("click", clickSquare, false);
    newSquare.addEventListener("mouseover", hoverSquare, false);
    //newSquare.addEventListener("mouseout", hoverOffSquare, false);

    newSquare.classList.add("div-square")
    CONTAINER.appendChild(newSquare);

 function clickSquare () {
    newSquare.style.backgroundColor = "black";
}

function hoverSquare () {
    //newSquare.dataset.prevColor = newSquare.style.backgroundColor;
    newSquare.style.backgroundColor = "gray";

    
    //const hoverFadeMs = setTimeout(hoverOffSquare, 2000);

    

}





    function clearSquares () {
    newSquare.setAttribute("style", "background-color:white")
}

BtnClear.addEventListener("click", clearSquares);


}



