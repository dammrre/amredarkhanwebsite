document.addEventListener("DOMContentLoaded", function() {

    if (document.getElementById('login-form')) {
        initLoginPage();
    }

    if (document.getElementById('register-form')) {
        initRegisterPage();
    }

});

function initLoginPage() {
    const form = document.getElementById('login-form');
    const username = document.getElementById('login-username');
    const password = document.getElementById('login-password');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        validateLoginForm(form, username, password);
    });
}

function validateLoginForm(form, username, password) {
    let isValid = true;
    clearAllErrors(form);

    if (username.value.trim() === '') {
        isValid = false;
        showError(username, 'Username/Email is required');
    }

    if (password.value.trim() === '') {
        isValid = false;
        showError(password, 'Password is required');
    }

    if (isValid) {
        console.log('Login form is valid. Submitting...');
        // form.submit(); // Uncomment this line to allow form submission
    }

    return isValid;
}

function initRegisterPage() {
    const form = document.getElementById('register-form');
    const email = document.getElementById('register-username');
    const password = document.getElementById('register-password');
    const confirmPassword = document.getElementById('register-confirm-password');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        validateRegisterForm(form, email, password, confirmPassword);
    });
}

function validateRegisterForm(form, email, password, confirmPassword) {
    let isValid = true;
    clearAllErrors(form);

    if (email.value.trim() === '') {
        isValid = false;
        showError(email, 'Email is required');
    } else if (!isValidEmail(email.value)) {
        isValid = false;
        showError(email, 'Please enter a valid email address');
    }

    if (password.value.trim() === '') {
        isValid = false;
        showError(password, 'Password is required');
    } else if (password.value.length < 8) {
        isValid = false;
        showError(password, 'Password must be at least 8 characters long');
    }

    if (confirmPassword.value.trim() === '') {
        isValid = false;
        showError(confirmPassword, 'Please confirm your password');
    } else if (password.value !== confirmPassword.value) {
        isValid = false;
        showError(confirmPassword, 'Passwords do not match');
    }
    
    if (isValid) {
        console.log('Registration form is valid. Submitting...');
        // form.submit(); // Uncomment this line to allow form submission
    }

    return isValid;
}

function showError(inputElement, message) {
    const formGroup = inputElement.parentElement;
    if (formGroup && formGroup.classList.contains('form-group')) {
        formGroup.classList.add('error');
        const errorDisplay = formGroup.querySelector('.error-message');
        if (errorDisplay) {
            errorDisplay.textContent = message;
        }
    }
}

function clearAllErrors(formElement) {
    const errorGroups = formElement.querySelectorAll('.form-group.error');
    errorGroups.forEach(function(group) {
        group.classList.remove('error');
        const errorDisplay = group.querySelector('.error-message');
        if (errorDisplay) {
            errorDisplay.textContent = '';
        }
    });
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}