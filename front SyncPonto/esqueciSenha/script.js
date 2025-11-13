document.addEventListener('DOMContentLoaded', function() {
    
    const loginForm = document.getElementById('loginForm');
    
    
    loginForm.addEventListener('submit', function(event) {
        
        event.preventDefault();
        
        
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const remember = document.getElementById('remember').checked;
        
    
        if (!email || !password) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }
        
        
        const validEmail = 'admin@syncponto.com';
        const validPassword = '123456';
        
        if (email === validEmail && password === validPassword) {
            
            alert('Login realizado com sucesso! Bem-vindo ao SyncPonto.');
            
            
            if (remember) {
                localStorage.setItem('rememberedEmail', email);
            }
            
            
            window.location.href = 'dashboard.html'; 
        } else {
            
            alert('Email ou senha incorretos. Tente novamente.');
        }
    });
    
    
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
        document.getElementById('email').value = rememberedEmail;
        document.getElementById('remember').checked = true;
    }
    
});
