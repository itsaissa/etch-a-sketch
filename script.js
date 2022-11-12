function setupGrid(size){
    const grid = document.querySelector(".grid");
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(let i = 0; i < size*size; i++){
        const gridElem = document.createElement("div");
        gridElem.style.backgroundColor = "black";
        grid.appendChild(gridElem);
    }
}

setupGrid(16)