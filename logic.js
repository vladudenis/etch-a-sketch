const gridContainer = document.querySelector(".grid-container");
const sizer = document.querySelector(".sizer");

window.addEventListener("load", defaultSize);
sizer.addEventListener("click", changeSize);

function defaultSize(){
    setGridSize(16);
    fillGrid(16);
}

function setGridSize(size){
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size){
    for(i = 0; i < size * size; i++){
        const gridElement = document.createElement("div");
        gridElement.classList = "grid-element";
        gridElement.addEventListener("mouseover", changeColor);
        gridContainer.appendChild(gridElement);
    }
}

function clearGrid(){
    const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((element) => {
        gridContainer.removeChild(element);
    });
}

function changeColor(e){
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function changeSize(){
    let newSize = prompt("Enter new size: ");
    if(newSize != null){
        newSize = parseInt(newSize);
        if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
            alert("Enter a number between 1 and 64");
            changeSize();
        }
        else{
            clearGrid();
            setGridSize(newSize);
            fillGrid(newSize);
        }
    }
}