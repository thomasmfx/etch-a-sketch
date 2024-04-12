const container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    container.insertBefore(square, container.firstElementChild);
    square.classList.add("square");
}

// Next task: adicionar as funções respectivas aos botões



