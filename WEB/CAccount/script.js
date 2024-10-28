// Toggle visibility of password fields
function togglePasswordVisibility(inputId, element) {
  const inputField = document.getElementById(inputId);
  if (inputField.type === 'password') {
      inputField.type = 'text';
      element.textContent = '🙈'; // Change icon to closed-eye
  } else {
      inputField.type = 'password';
      element.textContent = '👁️'; // Change icon to open-eye
  }
}

// Password validation function
function validatePassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers;
}

// Check if passwords match and validate them on form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const errorElement = document.getElementById('password-error');

  if (password !== confirmPassword) {
      errorElement.textContent = 'Passwords do not match!';
      errorElement.style.display = 'block';
      event.preventDefault(); // Prevent form submission
  } else if (!validatePassword(password)) {
      errorElement.textContent = 'Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, and a number.';
      errorElement.style.display = 'block';
      event.preventDefault(); // Prevent form submission
  } else {
      errorElement.style.display = 'none';
  }
});
