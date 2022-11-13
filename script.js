let color = "black";
const grid = document.querySelector(".grid");
const input = document.querySelector(".sizeSelect");
const blackBtn = document.querySelector("#blackBtn");
const eraseBtn = document.querySelector("#eraseBtn");
const resetBtn = document.querySelector("#resetBtn");
input.addEventListener("input", () =>{
    clearGrid()
    setupGrid(input.value);
})

blackBtn.onclick = () => changeColor("black");
eraseBtn.onclick = () => changeColor("white");
resetBtn.onclick = () => {
    clearGrid()
    setupGrid(input.value);
};
function setupGrid(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(let i = 0; i < size*size; i++){
        let gridElem = document.createElement("div");
        gridElem.addEventListener("mouseover", colorSquares);
        gridElem.style.backgroundColor = "white";
        gridElem.style.border = "1px solid black"
        grid.appendChild(gridElem);
    }
}

function colorSquares(){
    this.style.backgroundColor = color;
}
function clearGrid(){
    while(grid.hasChildNodes()){
        grid.removeChild(grid.firstChild);
    }
}
function changeColor(choice){
    color = choice
}

window.onload = () => {
    setupGrid(input.value);
}