const button = document.querySelector('.main-page-button'); //Primul element care are clasa CSS "main-page-button" 
let timeoutId; // Variabila pentru a retine ID-ul timeout-ului
let originalBorderColor; // Variabila pentru a retine culoarea originala a bordurii

function changeBorderColor() {
    button.style.borderColor = '#191970';
    timeoutId = setTimeout(() => {
        button.style.borderColor = '#00BFFF';
        timeoutId = setTimeout(() => {
            button.style.borderColor = '#4169E1';
            timeoutId = setTimeout(changeBorderColor, 500); // Repeta secventa dupa 0.5 secunde
        }, 500); 
    }, 500); 
}

changeBorderColor();

button.addEventListener('mouseenter', () => {
    clearTimeout(timeoutId); // Se opreste
    originalBorderColor = button.style.borderColor; // Salvam culoarea
});

var colors = ['red', 'green', 'blue']; // Tablou unidimensional de culori pentru modificare h1
var colorIndex = 0; 

setInterval(changeColor, 1000); // Schimba culoarea in fiecare secunda

function changeColor() {
    var gamesText = document.getElementById("games"); //h1 are ID-ul games
    gamesText.style.color = colors[colorIndex]; // Schimbam culoarea textului
    colorIndex = (colorIndex + 1) % colors.length; // daca s-a ajuns la ultima culoare, se revine la prima culoare din sir
}

function changeText(button) {
    switch (button.classList[1]) {//activa
        case "border-blue":
            button.textContent = "X&0";
            break;
        case "border-green":
            button.textContent = "Rock&Scissors&Paper";
            break;
        case "border-yellow":
            button.textContent = "Guess The Word";
            break;
        default:
            button.textContent = "Default Text";
            break;
    }
}

function revertText(button) {
    button.textContent = "?"; 
}

//Schimbam pentru butoane

blue.addEventListener('mouseenter', () => {
    changeText(blue)
});

blue.addEventListener('mouseleave', () => {
    revertText(blue)
});

green.addEventListener('mouseenter', () => {
    changeText(green)
});

green.addEventListener('mouseleave', () => {
    revertText(green)
});

yellow.addEventListener('mouseenter', () => {
    changeText(yellow)
});

yellow.addEventListener('mouseleave', () => {
    revertText(yellow)
});


