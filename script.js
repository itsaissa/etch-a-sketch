const GRID_SIZE = 16;

const grid = document.querySelector(".grid");
const input = document.querySelector(".sizeSelect");

input.addEventListener("input", () =>{
    clearGrid()
    setupGrid(input.value);
})
function setupGrid(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(let i = 0; i < size*size; i++){
        const gridElem = document.createElement("div");
        gridElem.style.backgroundColor = "white";
        gridElem.style.border = "1px solid black"
        grid.appendChild(gridElem);
    }
}
function clearGrid(){
    while(grid.hasChildNodes()){
        grid.removeChild(grid.firstChild);
    }
}
window.onload = () => {
    setupGrid(GRID_SIZE);
}