document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Simple validation (you can add more here)
    if (email === '' || password === '') {
      alert('Please fill in all fields.');
    } else {
      alert('Logged in successfully!');
      // Add actual login logic here (e.g., sending data to a server)
    }
  });
  