$(document).ready(function(){
    const loginForm = document.getElementById('login-form'),
    registerForm = document.getElementById('register-form'),
    loginBtn = document.getElementById('login-btn'),
    registerBtn = document.getElementById('register-btn');

    if (registerBtn) {
        registerBtn.addEventListener('click', () => {
            loginForm.classList.remove('form-active');
            registerForm.classList.add('form-active');
        });
    }

    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            loginForm.classList.add('form-active');
            registerForm.classList.remove('form-active');
        });
    }

    const showHiddenPass = (loginPass, loginEye) => {
        const input = document.getElementById(loginPass),
        iconEye = document.getElementById(loginEye);
      
        iconEye.addEventListener('click', () => {
            if (input.type === 'password') {
                input.type = 'text';
                
                iconEye.classList.add('ri-eye-line');
                iconEye.classList.remove('ri-eye-off-line');
            }
            else {
                input.type = 'password';
                iconEye.classList.remove('ri-eye-line');
                iconEye.classList.add('ri-eye-off-line');
            }
        });
    };

    showHiddenPass('login-pass', 'login-eye');
    showHiddenPass('register-pass', 'register-eye');
});