const container = document.querySelector("#container");
const clearBtn = document.querySelector("#clear-btn")
const btn16x16 = document.querySelector("#btn-16x16")
const btn32x32 = document.querySelector("#btn-32x32");
const btn64x64 = document.querySelector("#btn-64x64");
const customBtn = document.querySelector("#custom-btn");
let squares;

// Paint squares
function painstSquares() {
    squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        let brightness = 1;
        square.onmouseover = function () {
            if (square.getAttribute("style").indexOf("background-color:") == -1) {
                square.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            } else {
                square.style.filter = `brightness(${brightness -= 0.1})`;
            }
        };
    });
};

// Create default 16x16 divs when page loads
for (let i = 0; i < 256; i++) {
    const newSquare = document.createElement("div");
    container.insertBefore(newSquare, container.firstElementChild);
    newSquare.classList.add("square");
    newSquare.style.flexBasis = "calc(100%/16)";
    painstSquares();
};

// Reset Button
clearBtn.addEventListener("click", () => {
    squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.backgroundColor = null;
        square.style.removeProperty("filter");
    });
});

// 16x16 Button
btn16x16.addEventListener("click", () => {
    squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.remove()
    });
    for (let i = 0; i < 256; i++) {
        const newSquare = document.createElement("div");
        container.insertBefore(newSquare, container.firstElementChild);
        newSquare.classList.add("square");
        newSquare.style.flexBasis = "calc(100%/16)";
    };
    painstSquares();
});

// 32x32 Button
btn32x32.addEventListener("click", () => {
    squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.remove()
    });
    for (let i = 0; i < 1024; i++) {
        const newSquare = document.createElement("div");
        container.insertBefore(newSquare, container.firstElementChild);
        newSquare.classList.add("square");
        newSquare.style.flexBasis = "calc(100%/32)";
    };
    painstSquares();
});

// 64x64 Button
btn64x64.addEventListener("click", () => {
    squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.remove()
    });
    for (let i = 0; i < 4096; i++) {
        const newSquare = document.createElement("div");
        container.insertBefore(newSquare, container.firstElementChild);
        newSquare.classList.add("square");
        newSquare.style.flexBasis = "calc(100%/64)";
    };
    painstSquares();
});

// Custom Button
customBtn.addEventListener("click", () => {
    squares = document.querySelectorAll(".square");
    customValue = prompt("Type a custom grid size (16 = 16x16)");
    totalCustomSquares = customValue * customValue;

    if (customValue <= 100) {
        squares.forEach((square) => {
            square.remove()
        });
        for (let i = 0; i < totalCustomSquares; i++) {
            const newSquare = document.createElement("div");
            container.insertBefore(newSquare, container.firstElementChild);
            newSquare.classList.add("square");
            newSquare.style.flexBasis = `calc(100%/${customValue})`
        };
    } else {
        alert("The limit is 100!")
    };
    painstSquares();
});