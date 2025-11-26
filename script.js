const BtnAdd4x4 = document.querySelector("#btn-4x4");
const BtnClear = document.querySelector("#btn-clear");
const CONTAINER = document.querySelector("#container");
const gridSize = 16;

CONTAINER.style.setProperty("--grid-size", gridSize);
CONTAINER.innerHTML = "";

BtnAdd4x4.addEventListener("click", add4X4Squares);


function add4X4Squares () {
    //CONTAINER.removeChild(newSquare)
    for (let i = 0; i < gridSize * gridSize; i++) {
    addSquare ();
}

}

   



function addSquare () {
    const newSquare = document.createElement("div");
    newSquare.addEventListener("click", clickSquare, false);
    newSquare.addEventListener("mouseover", hoverSquare, false);

    newSquare.classList.add("div-border")
    CONTAINER.appendChild(newSquare);

    function clickSquare () {
    newSquare.setAttribute("style", "background-color:black")
}

function hoverSquare () {
    newSquare.setAttribute("style", "background-color:gray")
}



    function clearSquares () {
    newSquare.setAttribute("style", "background-color:white")
}

BtnClear.addEventListener("click", clearSquares);


}



