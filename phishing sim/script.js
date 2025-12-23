document.getElementById('loginForm').addEventListener('submit', function(e) {
e.preventDefault();

const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

// Log credentials (for simulation purposes)
console.log('Email:', email);
console.log('Password:', password);

// Store in localStorage (optional)
localStorage.setItem('phishing_email', email);
localStorage.setItem('phishing_password', password);

// Redirect to a fake "error" page or educational landing page
alert('This was a phishing simulation. Your credentials were not sent anywhere.');
window.location.href = 'https://example.com/phishing-education';
});