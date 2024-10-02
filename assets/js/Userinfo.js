
  // Function to handle form submission for Login
  function handleLogin(event) {
    event.preventDefault(); // Prevent default form submission
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const confirmationDiv = document.getElementById('loginConfirmation');

    // Check if fields are filled
    if (email && password) {
      confirmationDiv.textContent = `Login successful! Welcome back, ${email}.`;
      confirmationDiv.className = 'text-success'; // Add success class
    } else {
      confirmationDiv.textContent = 'Please fill in all fields.';
      confirmationDiv.className = 'text-danger'; // Add error class
    }
  }

  // Function to handle form submission for Registration
  function handleRegister(event) {
    event.preventDefault(); // Prevent default form submission
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    const confirmationDiv = document.getElementById('registerConfirmation');

    // Check if fields are filled and if passwords match
    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        confirmationDiv.textContent = `Registration successful! Welcome, ${email}.`;
        confirmationDiv.className = 'text-success'; // Add success class
      } else {
        confirmationDiv.textContent = 'Passwords do not match. Please try again.';
        confirmationDiv.className = 'text-danger'; // Add error class
      }
    } else {
      confirmationDiv.textContent = 'Please fill in all fields.';
      confirmationDiv.className = 'text-danger'; // Add error class
    }
  }

  // Event listeners for form submissions
  document.getElementById('login').querySelector('form').addEventListener('submit', handleLogin);
  document.getElementById('register').querySelector('form').addEventListener('submit', handleRegister);

