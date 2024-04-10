var playerWins = 0;
var computerWins = 0;

function play(userChoice) {
    var choices = ['rock', 'scissors', 'paper'];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];//Aceasta generează un index aleatoriu în intervalul array-ului choices
    //Math.floor() îl convertește la un număr întreg.
    //Deci, computerChoice va conține un element selectat aleatoriu din array-ul choices
    var result;

    if (userChoice === computerChoice) {
        result = 'Draw!';
        document.getElementById('result').textContent = result;//paragraful p
        //modifică clasele CSS ale elementului cu id-ul 'result'
        document.getElementById('result').classList.add('draw');
        document.getElementById('result').classList.remove('win', 'lose');
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')) {
        result = 'You won!';
        playerWins++;
        document.getElementById('result').textContent = result;//paragraful p
        //modifică clasele CSS ale elementului cu id-ul 'result'
        document.getElementById('result').classList.add('win');
        document.getElementById('result').classList.remove('lose', 'draw');
    } else {
        result = 'You lost!';
        computerWins++;
        document.getElementById('result').textContent = result;//paragraful p
        //modifică clasele CSS ale elementului cu id-ul 'result'
        document.getElementById('result').classList.add('lose');
        document.getElementById('result').classList.remove('win', 'draw');
    }


    var computerChoiceImage = document.createElement('img');
    //Variabila computerChoiceImage va conține acest element imagine nou creat
    computerChoiceImage.src = computerChoice + ".jpg";//computerChoice este o valoare care reprezintă numele unei imagini (fără extensie)
    computerChoiceImage.alt = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    //concatenarea celor două rezultate împreună creează un string în care prima literă este transformată în majusculă, iar restul rămân neschimbate.
    //afișarea unui text alternativ în cazul în care imaginea nu poate fi afișată 
    computerChoiceImage.classList.add('image');
    //Acest fragment de cod adaugă clasa CSS 'image' la lista de clase a elementului imagine computerChoiceImage
    computerChoiceImage.classList.add(computerChoice); // Adăugare clasă pentru a diferenția imaginile calculatorului

    document.getElementById('userChoice').innerHTML = 'You: ' + userChoice;
    document.getElementById('computerChoice').innerHTML = 'Computer:';
    document.getElementById('computerChoice').appendChild(computerChoiceImage);
    // elementul imagine computerChoiceImage va fi adăugat ca fiu al elementului cu id-ul 'computerChoice', astfel încât să fie afișat în interiorul acestuia

    document.getElementById('score').textContent = 'Score: You - ' + playerWins + '        | Computer - ' + computerWins;

    // Adăugare eveniment pentru a schimba bordura la hover pe imaginea calculatorului
    computerChoiceImage.addEventListener('mouseenter', function () {
        if (computerChoice === "scissors") {
            this.style.border = "4px solid yellow"; // Setare bordură galbenă pentru foarfecă
        } else if (computerChoice === "rock") {
            this.style.border = "4px solid magenta"; // Setare bordură roz pentru piatră
        } else if (computerChoice === "paper") {
            this.style.border = "4px solid cyan"; // Setare bordură albastră pentru hârtie
        }
    });

    // Adăugare eveniment pentru a elimina bordura la mouseleave de pe imaginea calculatorului
    computerChoiceImage.addEventListener('mouseleave', function () {
        this.style.border = "2px solid transparent"; // Dacă nu este nicio alegere, revenire la bordură transparentă
    });

}

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

r.addEventListener('click', () => {
    play('rock');
});

s.addEventListener('click', () => {
    play('scissors');
});

p.addEventListener('click', () => {
    play('paper');
});

