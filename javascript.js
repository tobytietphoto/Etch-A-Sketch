const createGrid = (amtOfGrid) => {
    for (let i = 0; i < amtOfGrid; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');
    
        for( let j = 0; j < amtOfGrid; j++) {
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            row.appendChild(gridBox);
        }
      container.appendChild(row);
    }
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
}

function gridPrompt() {
    let userPrompt = prompt("please input number between 1-100 for dimension:");
    while (userPrompt > 100 || userPrompt <= 0 || isNaN(userPrompt)) {
        userPrompt = prompt("INPUT ONLY between 1-100 >:( :");
    }
    createGrid(userPrompt);
}

gridPrompt();

const gridBoxes = document.querySelectorAll('.grid-box');

function blackBox() {
    gridBoxes.forEach(gridBox => {
        gridBox.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "black";
        });
    });
}

 const blackbtn = document.querySelector(".blackBtn");

 blackbtn.addEventListener("click", blackBox);

function rainbowBox() {
    const colors = ["red", "green", "blue", "cyan", "purple", "yellow", "pink", "orange"];

    function randomColors() {
        const random = Math.floor(Math.random() * colors.length);
        return colors[random];
    }

        gridBoxes.forEach(gridBox => {
            gridBox.addEventListener("mouseover", (event) => {
                event.target.style.backgroundColor = randomColors();
            });
        });
}

const rainbowBtn = document.querySelector(".rainbowBtn");

rainbowBtn.addEventListener("click", rainbowBox);

function eraseBox() {
    gridBoxes.forEach(gridBox => {
        gridBox.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "white";
        });
    });
}

const eraseBtn = document.querySelector(".eraseBtn");

eraseBtn.addEventListener("click", eraseBox);

function shadeBox() {
    gridBoxes.forEach(gridBox => {
        gridBox.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "grey";
            event.target.style.opacity = .10;
        });
    });
}

const shadeBtn = document.querySelector(".shadeBtn");

shadeBtn.addEventListener("click", shadeBox);

function reset(gridBoxes) {
    const resetContainer = document.createElement('div');
    resetContainer.classList.add('resetContainer');
    const resetBtn = document.createElement('button');
    resetBtn.classList.add('resetBtn');
    resetBtn.textContent = "Reset";

    resetContainer.appendChild(resetBtn);
    const buttonContainer = document.getElementById('buttonContainer');
    document.body.insertAdjacentElement('beforeend', resetContainer);
    resetContainer.style.display = 'flex';
    resetContainer.style.flexDirection = 'column';
    resetContainer.style.justifyContent = 'center';
    resetContainer.style.alignItems = 'center';

    resetBtn.addEventListener("click", () => { 
        gridBoxes.forEach(gridBox => {
            gridBox.style.backgroundColor = "white";
        });
    });

}

reset(gridBoxes);
