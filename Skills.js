const button = document.querySelector('.button'); //Primul element care are clasa CSS "button"

let timeoutId; // Variabila pentru a retine ID-ul timeout-ului
let originalBorderColor; // Variabila pentru a retine culoarea originala a bordurii

function changeBorderColor() {
    button.style.borderColor = '#191970';
    timeoutId = setTimeout(() => {
        button.style.borderColor = '#00BFFF';
        timeoutId = setTimeout(() => {
            button.style.borderColor = '#4169E1';
            timeoutId = setTimeout(changeBorderColor, 500); // Se repeta secventa
        }, 500); 
    }, 500); 
}

changeBorderColor();

button.addEventListener('mouseenter', () => {
    clearTimeout(timeoutId); // Stop 
    originalBorderColor = button.style.borderColor; 
});

function changeText(element) {
    element.textContent = "Abilities";
    element.style.color = "yellow";
}

function revertText(element) {
    element.textContent = "Skills";
    element.style.color = "red";
}

skills.addEventListener('mouseenter', () => {
    changeText(skills)
});

skills.addEventListener('mouseleave', () => {
    revertText(skills)
});
