const colors = ['#4682B4', '#1E90FF', '#6495ED', '#87CEEB', '#ADD8E6']; // Diferite nuante de albastru
let index = 0;

function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length; /*  dacă index atinge lungimea array-ului colors, va începe din nou de la început */
}

setInterval(changeBackgroundColor, 2000); // Schimbam culoarea fundalului la fiecare 2 secunde

const buttons = document.querySelectorAll('.button'); // pentru a selecta toate elementele care au clasa CSS "button"

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        // Generam o culoare random pentru bordura
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        /* Math.floor() trunchiază numărul generat de Math.random() la cel mai apropiat întreg mai mic sau egal cu numărul respectiv */
        /*  generează un număr aleator între 0 și 16777215, care este echivalentul valorii RGB maxime (ffffff în format hexazecimal) */
        /* toString(16) converteste valoarea generată în format hexadecimal */
        /* # pentru a forma o reprezentare validă a culorii CSS */
        button.style.borderColor = randomColor;
        button.style.borderRadius = '50%'; // buton rotunjit
    });

    button.addEventListener('mouseleave', () => {
        // Resetam bordura si culoarea
        button.style.borderColor = 'transparent';
        button.style.borderRadius = '5px';
    });
});

const button = document.querySelector('.lbutton'); // Selectează butonul după clasă

let timeoutId; // Variabila pentru a retine ID-ul timeout-ului
let originalBorderColor; // Variabila pentru a retine culoarea originala a bordurii

function changeBorderColor() {
    button.style.borderColor = '#191970';
    timeoutId = setTimeout(() => {
        button.style.borderColor = '#00BFFF';
        timeoutId = setTimeout(() => {
            button.style.borderColor = '#4169E1';
            timeoutId = setTimeout(changeBorderColor, 500); // Repetam secventa
        }, 500); 
    }, 500); 
}

changeBorderColor();

button.addEventListener('mouseenter', () => {
    clearTimeout(timeoutId); // Stop 
    originalBorderColor = button.style.borderColor; // Salvam culoarea
});




