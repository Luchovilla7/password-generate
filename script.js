function randomPassword() {
    let displayPassword = document.getElementById('display-password');
    let passwordLength = document.getElementById('password-length').value;
    let error = document.getElementById('error-info');
    let password = '';
    let characters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ!@#$%^&*()_+~`|}{[];:?><,./-=';

    // Si no selecciona la longitud del password
    parseInt(passwordLength);
    if (passwordLength == 0) {
        error.innerHTML = 'Por favor selecciona la longitud de tu contraseña';
        error.style.padding = '10px 15px';
        setTimeout(() => {
            error.style.visibility = 'hidden';
            window.location.reload()
        }, 2500);
    }
    
    // Generando contraseña de forma random
    for (let i = 0; i < passwordLength; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    displayPassword.value = password;
}