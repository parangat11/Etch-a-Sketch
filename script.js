let dimension = Number(prompt("Enter the dimension for canvas"));

// Ensuring that the canvas dimension is a number between 10 and 100
dimension = Math.max(16, dimension);
dimension = Math.min(100, dimension);
if(isNaN(dimension)) {
    dimension = 16;
}
console.log(dimension);

// Creating the canvas
const container = document.querySelector(".container");
const height = 960 / dimension;
const width = height;

for(let col = 0; col < dimension; col++) {
    const div = document.createElement("div");
    container.appendChild(div);
    div.classList.add("rect");
    div.classList.add(`rect-${col}`);
    div.setAttribute("margin", 0);
    div.style.height = `${height}px`;
    for(let row = 0; row < dimension; row++) {
        const childDiv = document.createElement("div");
        childDiv.classList.add("square");
        childDiv.classList.add(`square-${row}-${col}`);
        childDiv.style.width = `${width}px`;
        childDiv.style.height = `${height}px`;
        div.appendChild(childDiv);
    }
}

// Logic to change color of the element
const pixels = document.querySelectorAll(".square");

let flag = false;
pixels.forEach((pixel) => {
    pixel.addEventListener('click', () => {
        flag = !flag;
    })
    pixel.addEventListener('mouseover', () => {
        if(flag) {
            const randomColor = generateRandomColor();
            pixel.style.backgroundColor = randomColor;
        }
    })
});

//Utility function to generate random color
function generateRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
    const rgbValue = `#${r}${g}${b}`;
    return rgbValue;
}

// Resetting the canvas
const reset = document.querySelector("#reset");

reset.addEventListener('click', () => {
    for(let i = 0; i < dimension; i++) {
        for(let j = 0; j < dimension; j++) {
            const pixel = document.querySelector(`.square-${i}-${j}`);
            pixel.style.backgroundColor = "white";
        }
    }
});