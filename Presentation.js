const button = document.querySelector('.button'); //Primul element care are clasa CSS "button"

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

const h1 = document.querySelector('h1'); //pentru a selecta primul element <h1> din documentul HTML
const p = document.querySelector('p'); //pentru a selecta primul element <p> din documentul HTML
const circle = document.getElementById('circle'); //pentru a selecta un element din documentul HTML care are un atribut id cu valoarea 'circle'

const images = [
    'img1.jpg', // Poza 1
    'img2.jpg', // Poza 2
    'img3.jpg', // Poza 3
];

let currentImageIndex = 0;

h1.addEventListener('mouseenter', () => {
    h1.style.color = 'white';
});

h1.addEventListener('mouseleave', () => {
    h1.style.color = '#00FFFF'; //culoarea originala
});

p.addEventListener('mouseenter', () => {
    p.style.color = 'red';
});

p.addEventListener('mouseleave', () => {
    p.style.color = 'white'; //culoarea originala
});

// Schimbarea imaginilor la click pe cerc
circle.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    //% images.length
    //Acest lucru asigură că indexul rămâne în limitele vectorului de imagini. Dacă indexul depășește lungimea vectorului,
    //acesta va începe de la începutul vectorului din nou.
    circle.querySelector('img').src = images[currentImageIndex];
    //element <img> care este un copil al elementului circle.
    //actualizează sursa imaginii pentru elementul <img> din interiorul elementului cu id-ul 'circle', 
    //folosind sursa imaginii curente din vectorul de imagini
});