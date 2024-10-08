const submit = document.querySelector('#submit');

submit.addEventListener('click', () => {
    event.preventDefault();
});

function sendForm() {
    const newPath = 'thanks.html';

    // Get the input value
    const emailInput = document.getElementById('email').value;

    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the input against the regular expression
    if (emailRegex.test(emailInput)) {
        document.getElementById('result').textContent = '';
        window.location.href = newPath;
    } else {
        document.getElementById('result').textContent =
            'Неверный адрес электронной почты. Пожалуйста, введите действительный адрес электронной почты.';
    }
}

function subscribe() {
    const newPath = 'thanks.html';

    // Get the input value
    const emailInput = document.getElementById('newsletter').value;

    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the input against the regular expression
    if (emailRegex.test(emailInput)) {
        document.getElementById('validation').textContent = '';
        window.location.href = newPath;
    } else {
        document.getElementById('validation').textContent =
            'Неверный адрес электронной почты. Пожалуйста, введите действительный адрес электронной почты.';
    }
}

function sendApply() {
    const newPath = 'thanks.html';

    // Get the input value
    const emailInput = document.getElementById('apply').value;

    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the input against the regular expression
    if (emailRegex.test(emailInput)) {
        document.getElementById('result1').textContent = '';
        window.location.href = newPath;
    } else {
        document.getElementById('result1').textContent =
            'Неверный адрес электронной почты. Пожалуйста, введите действительный адрес электронной почты.';
    }
}
