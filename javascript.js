const container = document.querySelector('#container');

function userPrompt() {
    let userPrompt = prompt('please input number between 1 to 100:')
    while (userPrompt < 1 || userPrompt > 100 || isNaN(userPrompt) || userPrompt === null) {
        userPrompt = prompt("Let's try again! Please input ONLY 1 to 100")
    }
    createGrid(userPrompt)
}

userPrompt();

function createGrid(amtOfGrid) {
    for (let i = 0; i < amtOfGrid; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('gridRow');
        for (let j = 0; j < amtOfGrid; j++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('gridBox');
        gridRow.appendChild(gridBox);    
        }
      container.appendChild(gridRow);
    } 
}

const gridBoxes = document.querySelectorAll('.gridBox');

function blackBox() {
    gridBoxes.forEach(gridBox => {
        gridBox.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = "black";
        })
    })
}

const blackBtn = document.getElementById('blackBtn');

blackBtn.addEventListener("click", blackBox);

function colorRandomizer() {
    const colors = ["red", "blue", "green", "cyan", "yellow", "purple", "orange",]
    const randomizer = Math.floor(Math.random() * colors.length);
    return colors[randomizer];
}

function rainbowBox() {
    gridBoxes.forEach(gridBox => {
        gridBox.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = colorRandomizer();
        })
    })
}

const rainbowBtn = document.getElementById('rainbowBtn');
rainbowBtn.addEventListener("click", rainbowBox);

function test() {
    console.log('Hello World');
}

const shadeBtn = document.getElementById('shadeBtn');
currentOpacity = 0;
function shadeBox() {
    gridBoxes.forEach(gridBox => {
        gridBox.addEventListener('mouseover', (event) => {
           currentOpacity += 0.1;
           event.target.style.background = 'rgba(0, 0, 0, ' + currentOpacity + ')';
        });
    });
}

shadeBtn.addEventListener("click", shadeBox);

function eraseBox() {
    gridBoxes.forEach(gridBox => {
        gridBox.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = "white";
        })
    })
}

const eraseBtn = document.getElementById('eraseBtn');
eraseBtn.addEventListener("click", eraseBox);

const resetBtn = document.getElementById('resetBtn');

function resetGrid() {
   resetBtn.addEventListener("click", () => { 
        gridBoxes.forEach(gridBox => {
        gridBox.style.backgroundColor = "white";
        });
    });
}

resetGrid(gridBoxes);