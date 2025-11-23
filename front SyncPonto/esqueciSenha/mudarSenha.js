document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('resetPasswordForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const newPassword = document.getElementById('newPassword').value.trim();
        const confirmNewPassword = document.getElementById('confirmNewPassword').value.trim();

        if (!newPassword || !confirmNewPassword) {
            alert('Preencha todos os campos.');
            return;
        }

        if (newPassword !== confirmNewPassword) {
            alert('As senhas não coincidem.');
            return;
        }

        const resetEmail = localStorage.getItem("resetEmail");

        if (!resetEmail) {
            alert("Nenhum email selecionado para redefinição de senha.");
            window.location.href = "esqueciSenha.html";
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];

        const user = users.find(u => u.email === resetEmail);

        if (!user) {
            alert("Usuário não encontrado.");
            return;
        }

        user.password = newPassword;

        localStorage.setItem('users', JSON.stringify(users));

        localStorage.removeItem("resetEmail");

        alert("Senha alterada com sucesso!");
        window.location.href = "../login/login.html";
    });

});
