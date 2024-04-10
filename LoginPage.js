document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); //  ajută la gestionarea formularului într-un mod personalizat, fără a se baza pe comportamentul implicit al browser-ului
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === 'example@example.com' && password === 'password') {
        alert('Login successful!');
        window.location.href = 'MainPage.html'; // Main page
    } else {
        alert('Incorrect email or password. Please try again.');
    }
});