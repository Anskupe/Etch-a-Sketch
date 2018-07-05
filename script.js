let container = document.querySelector(".grid-container");
let square = document.querySelectorAll(".square");

defaultGrid(16);

function defaultGrid(size){
    
    container.style.setProperty('--grid', size);
    for(let i =0; i < size * size; i++){
        square=document.createElement("div");
        square.classList.add("square");
        square.setAttribute("id", "divs");
    square.addEventListener("mouseover",mouseOver);
    container.appendChild(square);
    }
 } 

 function getRandomColor () {
    
    const hueValue = Math.floor(Math.random() * 360);
    return `hsl(${hueValue}, 50%, 51%)`;
  }
function mouseOver(){
        this.style.backgroundColor=getRandomColor();
    }
    
    function clear(){
        while(container.firstChild){
        container.removeChild(container.firstChild);
        }}

    

    let reset = document.getElementById("reset");
    reset.addEventListener("click", () => {
        clear();
        let userSelect=parseInt(prompt("How many squares per side?"));
        defaultGrid(userSelect);
        ;
    }
);

