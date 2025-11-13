document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();
        
        if (!name || !email || !password || !confirmPassword) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('As senhas não coincidem. Tente novamente.');
            return;
        }
        
       
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser = users.find(user => user.email === email);
        
        if (existingUser) {
            alert('Este email já está cadastrado. Tente fazer login.');
            return;
        }
        
        users.push({ name, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        
        alert('Cadastro realizado com sucesso! Faça login para continuar.');
        window.location.href = 'login.html';
    });
});