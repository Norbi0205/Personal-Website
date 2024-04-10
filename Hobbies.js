const button = document.querySelector('.button'); // Selectează butonul după clasă
let timeoutId; // Variabila pentru a retine ID-ul timeout-ului
let originalBorderColor; // Variabila pentru a retine culoarea originala a bordurii

function changeBorderColor() {
    button.style.borderColor = '#191970';
    timeoutId = setTimeout(() => {
        button.style.borderColor = '#00BFFF';
        timeoutId = setTimeout(() => {
            button.style.borderColor = '#4169E1';
            timeoutId = setTimeout(changeBorderColor, 5000); // Repetam secventa dupa 0.5 secunde
        }, 500); 
    }, 500); 
}

changeBorderColor();

button.addEventListener('mouseenter', () => {
    clearTimeout(timeoutId); // Stop 
    originalBorderColor = button.style.borderColor; // Salvam culoarea 
});

function changeText(element) {
    element.textContent = "Free time";
    element.style.color = "darkgreen";
}

function revertText(element) {
    element.textContent = "Hobbies";
    element.style.color = "red";
}

hobbies.addEventListener('mouseenter', () => {
    changeText(hobbies)
});

hobbies.addEventListener('mouseleave', () => {
    revertText(hobbies)
});
