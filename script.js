let dimension = Number(prompt("Enter the dimension for canvas"));

// Logic to ensure that the canvas dimension is a number between 10 and 100
dimension = Math.max(16, dimension);
dimension = Math.min(100, dimension);
console.log(dimension);

// Creating the canvas
const container = document.querySelector(".container");

for(let col = 0; col < dimension; col++) {
    const div = document.createElement("div");
    container.appendChild(div);
    div.classList.add(`rect-${col}`)
    for(let row = 0; row < dimension; row++) {
        const childDiv = document.createElement("div");
        childDiv.classList.add(`square-${row}-${col}`);
        div.appendChild(childDiv);
    }
}