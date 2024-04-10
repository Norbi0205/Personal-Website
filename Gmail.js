const button = document.querySelector('.button'); //Primul element care are clasa CSS "button" 

let timeoutId; // Variabila pentru a retine ID-ul timeout-ului
let originalBorderColor; // Variabila pentru a retine culoarea originala a bordurii

function changeBorderColor() {
    // Setam prima culoare a bordurii pentru 0.5 secunde
    button.style.borderColor = '#191970';
    timeoutId = setTimeout(() => {
        // Setam a doua culoare a bordurii pentru 0.5 secunde
        button.style.borderColor = '#00BFFF';
        timeoutId = setTimeout(() => {
            // Set ultima culoare a bordurii pentru 0.5 secunde
            button.style.borderColor = '#4169E1';
            timeoutId = setTimeout(changeBorderColor, 500); // Repetam secventa dupa 0.5 secunde
        }, 500);
    }, 500); 
}

changeBorderColor();

button.addEventListener('mouseenter', () => {
    clearTimeout(timeoutId); // Oprire
    originalBorderColor = button.style.borderColor; // Salvam culoarea
});

