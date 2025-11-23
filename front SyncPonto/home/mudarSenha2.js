document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('changePasswordForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const currentPassword = document.getElementById('currentPassword').value.trim();
        const newPassword = document.getElementById('newPassword').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();

        if (!currentPassword || !newPassword || !confirmPassword) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (newPassword !== confirmPassword) {
            alert('A nova senha e a confirmação não coincidem.');
            return;
        }
        
        const currentUserEmail = localStorage.getItem('currentUser');

        if (!currentUserEmail) {
            alert('Nenhum usuário logado. Faça login novamente.');
            window.location.href = "../login/login.html";
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === currentUserEmail);

        if (!user) {
            alert('Usuário não encontrado.');
            return;
        }

        if (user.password !== currentPassword) {
            alert('Senha atual incorreta.');
            return;
        }

        user.password = newPassword;
        localStorage.setItem('users', JSON.stringify(users));

        alert('Senha alterada com sucesso!');
        window.location.href = 'perfil.html';
    });

});
