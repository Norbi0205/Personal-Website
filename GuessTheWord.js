// Lista de cuvinte
var words = ["javascript", "html", "css", "game", "programming", "computer", "internet", "code"];
var chosenWord = '';
/* Această variabilă poate fi ulterior actualizată pentru a stoca un cuvânt 
ales sau folosită în alte operațiuni și calcule în cadrul codului JavaScript */
var attempts = 2;

function resetGame() {
    var randomIndex = Math.floor(Math.random() * words.length);
    /* MAth.floor ia un număr și îl rotunjește la cel mai mic număr întreg mai mic sau egal cu acel număr */
    /* un index aleatoriu valid în intervalul [0, lungimea tabloului words] */
    chosenWord = words[randomIndex]; //initializam
    attempts = 2;
    var displayWord = '';
    for (var i = 0; i < chosenWord.length; i++) {
        displayWord += '_ '; /* atatea _ cat e lungimea cuvantului ales */
    }
    document.getElementById('word').textContent = displayWord;
    /* se actualizează conținutul elementului cu ID-ul 'word' cu textul din variabila displayWord */
    document.getElementById('message').textContent = '';
    /* se actualizează conținutul elementului cu ID-ul 'message' cu un șir vid */
    document.getElementById('submit').disabled = false;
    /* se activează butonul cu ID-ul 'submit', permițând utilizatorului să îl folosească */
}

document.getElementById('submit').addEventListener('click', function () {
    var guess = document.getElementById('input').value.toLowerCase();
    /* valoarea introdusă în câmpul de introducere de text este obținută, convertită la litere mici și stocată în variabila guess */
    if (guess === chosenWord) {
        document.getElementById('message').textContent = 'Congratulations! You guessed the word right.';
        document.getElementById('submit').disabled = true; /* dezactiveaza butonul */
        setTimeout(resetGame, 2000); // Așteaptă 2 secunde înainte de a reseta jocul
    } else {
        attempts--;
        if (attempts > 0) {
            document.getElementById('message').textContent = 'The word is not correct. You have ' + attempts + ' more attempt.';
        } else {
            document.getElementById('message').textContent = 'You ran out of attempts. The correct word was : ' + chosenWord;
            document.getElementById('submit').disabled = true; /* dezactiveaza butonul */
            setTimeout(resetGame, 2000); // Așteaptă 2 secunde înainte de a reseta jocul
        }
    }

    // Trecem la următorul cuvânt în cazul în care ghicirea a fost corectă, indiferent de numărul de încercări rămase
    if (guess === chosenWord) {
        var index = words.indexOf(chosenWord); 
        /* se caută în tabloul words indexul la care se găsește valoarea chosenWord, iar acest index este stocat în variabila index */
        /* dacă două valori sunt diferite și dacă sunt de același tip de date */
        if (index !== -1) { /* daca cuvantul a fost gasit */
            words.splice(index, 1); /* elementul din tabloul words de la poziția specificată de index este eliminat */
            /* specifică numărul de elemente pe care dorim să le eliminăm începând de la poziția specificată de index */
            if (words.length === 0) {
                // Dacă nu mai sunt cuvinte, reinițializăm lista
                var words = ["javascript", "html", "internet", "game", "programming", "css", "computer", "code"];
            }
        }
        resetGame();
    }
});

resetGame();

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



