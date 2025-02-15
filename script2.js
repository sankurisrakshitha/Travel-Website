// script.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent!');
});

document.getElementById('sign-in-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Welcome back!');
});

document.getElementById('sign-up-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Account created successfully!');
});