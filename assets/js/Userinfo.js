// Function to switch to the login tab
function loginTabFun() {
    document.getElementById('login').style.display = 'block'; // Show login form
    document.getElementById('register').style.display = 'none'; // Hide register form
    document.getElementById('lt').textContent = 'Login'; // Set left tab text
    document.getElementById('rt').textContent = 'Register'; // Set right tab text
}

// Function to switch to the registration tab
function regTabFun() {
    document.getElementById('login').style.display = 'none'; // Hide login form
    document.getElementById('register').style.display = 'block'; // Show register form
    document.getElementById('lt').textContent = 'Login'; // Set left tab text
    document.getElementById('rt').textContent = 'Register'; // Set right tab text
}

// Function to handle login
function login() {
    const email = document.getElementById('se').value;
    const password = document.getElementById('sp').value;

    // Simple validation (replace with real authentication logic)
    if (email && password) {
        alert(`Logged in successfully! Welcome, ${email}`);
        // Here you can add logic to redirect or perform further actions
    } else {
        alert('Please enter valid credentials.');
    }
}

// Function to handle registration
function register() {
    const email = document.getElementById('re').value;
    const password = document.getElementById('rp').value;
    const confirmPassword = document.getElementById('rrp').value;

    // Simple validation (replace with real registration logic)
    if (email && password && confirmPassword) {
        if (password === confirmPassword) {
            alert(`Registration successful! Welcome, ${email}`);
            // Here you can add logic to redirect or perform further actions
        } else {
            alert('Passwords do not match. Please try again.');
        }
    } else {
        alert('Please fill in all fields.');
    }
}

// Function to handle forgot password (optional)
function forTabFun() {
    alert('Forgot password functionality can be implemented here.');
}
