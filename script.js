document.getElementById('signupBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission if inside a form
    alert('Sign Up button clicked!');
});

document.getElementById('showSignup').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('formTitle').textContent = 'Sign Up';
    document.getElementById('signupText').style.display = 'none';
});

// Optionally, add a way to go back to login (add a link in the signup form if you want)