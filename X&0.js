var currentPlayer = 'X';
var board = ['', '', '', '', '', '', '', '', ''];
var winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rânduri
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // coloane
    [0, 4, 8], [2, 4, 6] // diagonale
];

var xWins = 0;
var oWins = 0;

function checkDraw() {
    return board.every(cell => cell !== '');
    //Dacă toate celulele sunt pline, expresia va returna true, altfel va returna false
}

// makeMove() pentru a verifica remiza și a reseta jocul
function makeMove(index) {

    if (!board[index]) {//verifică dacă celula de la indexul specificat de pe tabla de joc (board) este goală
        board[index] = currentPlayer;// această linie atribuie simbolul jucătorului curent (de exemplu, 'X' sau 'O') acelei celule din tabla de joc 
        document.getElementsByClassName('cell')[index].textContent = currentPlayer;

        if (checkWin()) {
            document.getElementById('message').textContent = 'Player ' + currentPlayer + ' won!';
            updateWins(currentPlayer);
            hideBoard();
            setTimeout(resetGame, 1500); 
            //Această funcție din JavaScript este folosită pentru a amâna executarea unei funcții 
            //(sau a unei expresii) după o anumită perioadă de timp specificată
        } else if (checkDraw()) { // Verifică remiza
            document.getElementById('message').textContent = 'The game ended in a draw!';
            hideBoard();
            setTimeout(resetGame, 1500); 
        } else {
            currentPlayer = currentPlayer === 'X' ? '0' : 'X';
            //Acestă linie de cod schimbă valoarea variabilei currentPlayer între 'X' și '0' la fiecare apel
            //operator ternar 
        }

    }
}

function checkWin() {
    return winningCombinations.some(combination =>
        combination.every(index => board[index] === currentPlayer)
    );
}
//winningCombinations.some(): Această metodă verifică dacă cel puțin o combinație din lista winningCombinations satisface condiția dată.
//combination.every(): Această metodă verifică dacă toate elementele dintr-o combinație specifică sunt conforme cu o anumită condiție.
//board[index] === currentPlayer: Această expresie verifică dacă toate celulele dintr-o anumită combinație sunt ocupate de simbolul jucătorului curent.
//returneaza true sau false

function hideBoard() {
    document.getElementById('board').style.display = 'none';
    document.querySelector('.winning-image').style.display = 'block';
    //selectează primul element HTML care are clasa 'winning-image' și îi schimbă stilul de afișare la 'block'. 
    //Acest lucru face ca elementul să fie afișat pe pagina.
}

function updateWins(player) {
    if (player === 'X') {
        xWins++;
        document.getElementById('xWins').textContent = xWins;//actualizam textul
    } else {
        oWins++;
        document.getElementById('oWins').textContent = oWins;//actualizam textul
    }
}

function resetGame() {

    document.getElementById('message').textContent = '';
    document.getElementById('board').style.display = 'block';
    document.querySelector('.winning-image').style.display = 'none';
    
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';

    var cells = document.getElementsByClassName('cell');
    // selectează toate elementele HTML care au clasa CSS 'cell' și le stochează într-o variabilă numită cells

    for (var i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
    }

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
            timeoutId = setTimeout(changeBorderColor, 500); // Se repeta secventa
        }, 500); 
    }, 500); 
}

changeBorderColor();

button.addEventListener('mouseenter', () => {
    clearTimeout(timeoutId); // Stop 
    originalBorderColor = button.style.borderColor; // Salvam culoarea
});

