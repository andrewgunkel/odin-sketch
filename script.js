//const BtnAdd4x4 = document.querySelector("#btn-4x4");
const BtnClear = document.querySelector("#btn-clear");
const BtnEnterAmount = document.querySelector("#btn-other");
const CONTAINER = document.querySelector("#container");
const isNumber = Number.isInteger || function(number){ return !isNaN(parseFloat(n)) && isFinite(n) }

//const gridSize = 16;

//BtnAdd4x4.addEventListener("click", add4X4Squares);


/* function add4X4Squares () {
    for (let i = 0; i < gridSize * gridSize; i++) {
    addSquare ();
    document.getElementById("btn-4x4").disabled = true;

}

} */

BtnEnterAmount.addEventListener("click", enterSquareAmount);


function enterSquareAmount () {
    CONTAINER.innerHTML = "";
    const gridSize = prompt ("Please enter how many squares you want", "16")
    //document.getElementById("gridSize").max = "100";


/*     if (!isNumber(gridSize)){
   prompt("Please try again and enter a number");
} else if (gridSize > 100) {
    prompt("The number must be less than 100");
} */

  /*   if (gridSize > 100) {
            const gridSize = prompt ("Number must be less than 100", "16")

    } */

    //const gridSquared = Math.sqrt(gridSize);
    for (let i = 0; i < (gridSize * gridSize); i++) {
    addSquare ();
    console.log(gridSize);
    //console.log(gridSquared);
    //document.getElementById("btn-other").disabled = true;
    CONTAINER.style.setProperty("--grid-size", gridSize);


}

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

/* function hoverOffSquare () {

    if (newSquare.style.backgroundColor === "black") {
        newSquare.dataset.prevColor = "black";
    } else if (newSquare.style.backgroundColor === "gray") {
        newSquare.style.backgroundColor = "white";
    }
    else if (newSquare.dataset.prevColor==="gray") {
    newSquare.style.backgroundColor = "white";
    }

    // Below prevents stuck squares if the user overlaps their path. 
    // Without this, the squares get stuck as gray.



} */



    function clearSquares () {
    newSquare.setAttribute("style", "background-color:white")
}

BtnClear.addEventListener("click", clearSquares);


}



