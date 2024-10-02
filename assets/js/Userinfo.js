

  function handleLogin(event) {
    event.preventDefault(); 
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const confirmationDiv = document.getElementById('loginConfirmation');


    if (email && password) {
      confirmationDiv.textContent = `Login successful! Welcome back, ${email}.`;
      confirmationDiv.className = 'text-success'; 
    } else {
      confirmationDiv.textContent = 'Please fill in all fields.';
      confirmationDiv.className = 'text-danger'; 
    }
  }


  function handleRegister(event) {
    event.preventDefault(); 
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    const confirmationDiv = document.getElementById('registerConfirmation');


    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        confirmationDiv.textContent = `Registration successful! Welcome, ${email}.`;
        confirmationDiv.className = 'text-success'; 
      } else {
        confirmationDiv.textContent = 'Passwords do not match. Please try again.';
        confirmationDiv.className = 'text-danger'; 
      }
    } else {
      confirmationDiv.textContent = 'Please fill in all fields.';
      confirmationDiv.className = 'text-danger'; 
    }
  }

  // Event listeners for form submissions
  document.getElementById('login').querySelector('form').addEventListener('submit', handleLogin);
  document.getElementById('register').querySelector('form').addEventListener('submit', handleRegister);

