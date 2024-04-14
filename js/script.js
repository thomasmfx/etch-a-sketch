const container = document.querySelector("#container");
const resetBtn = document.querySelector("#reset-btn")
const btn16x16 = document.querySelector("#btn-16x16")
const btn32x32 = document.querySelector("#btn-32x32");
const btn64x64 = document.querySelector("#btn-64x64")
const customBtn = document.querySelector("#custom-btn")

for (let i = 0; i < 256; i++) {
    const newSquare = document.createElement("div");
    container.insertBefore(newSquare, container.firstElementChild);
    newSquare.classList.add("square");
    newSquare.style.flexBasis = "calc(100%/16)";
};

// Reset Button
resetBtn.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.backgroundColor = "white"
    });
});

// 16x16 Button
btn16x16.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.remove()
    });
    for (let i = 0; i < 256; i++) {
        const newSquare = document.createElement("div");
        container.insertBefore(newSquare, container.firstElementChild);
        newSquare.classList.add("square");
        newSquare.setAttribute("style", "flex-basis: calc(100%/16)")
    };
});

// 32x32 Button
btn32x32.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.remove()
    });
    for (let i = 0; i < 1024; i++) {
        const newSquare = document.createElement("div");
        container.insertBefore(newSquare, container.firstElementChild);
        newSquare.classList.add("square");
        newSquare.setAttribute("style", "flex-basis: calc(100%/32)")
    };
});

// 64x64 Button
btn64x64.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.remove()
    });
    for (let i = 0; i < 4096; i++) {
        const newSquare = document.createElement("div");
        container.insertBefore(newSquare, container.firstElementChild);
        newSquare.classList.add("square");
        newSquare.setAttribute("style", "flex-basis: calc(100%/64)")
    };
});

// Custom Button
customBtn.addEventListener("click", () => {
    customValue = prompt("How many squares per row do you want? Example: 32 = 32x32");
    totalCustomSquares = customValue * customValue;
    const squares = document.querySelectorAll(".square");

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
        alert("The limit of squares is 100!")
    }
});


const squares = document.querySelectorAll(".square")
squares.forEach((square) => {
    square.onmouseover = function () {
        if (square.style.backgroundColor == "white") {
            square.style.backgroundColor = "red"
        };
    };
});


