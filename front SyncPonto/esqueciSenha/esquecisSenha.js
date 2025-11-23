document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('forgotEmailForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value.trim();

        if (!email) {
            alert('Por favor, insira o email.');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];

        const user = users.find(u => u.email === email);

        if (!user) {
            alert('Email não encontrado. Verifique e tente novamente.');
            return;
        }

        localStorage.setItem('resetEmail', email);

        window.location.href = 'esqueciSenha2.html';
    });

});
