function validateForm(event) {
  event.preventDefault();

  // Clear previous errors
  clearErrors();

  // Get form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var password = document.getElementById('password').value;
  var age = document.getElementById('age').value;
  var gender = document.getElementById('gender').value;
  var dob = document.getElementById('dob').value;
  var color = document.getElementById('color').value;

  // Validate name (at least 2 characters)
  if (name.length < 2) {
    displayError('nameError', 'Name must be at least 2 characters');
  }

  // Validate email (using a simple regular expression)
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    displayError('emailError', 'Invalid email address');
  }

  // Validate phone number (10 digits)
  var phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    displayError('phoneError', 'Invalid phone number');
  }

  // Validate password (at least 6 characters)
  if (password.length < 6) {
    displayError('passwordError', 'Password must be at least 6 characters');
  }

  // Validate age (between 18 and 120)
  if (age < 18 || age > 120) {
    displayError('ageError', 'Invalid age');
  }

  // Validate gender (not empty)
  if (gender === '') {
    displayError('genderError', 'Please select a gender');
  }

  // Validate date of birth (not empty)
  if (dob === '') {
    displayError('dobError', 'Please enter a valid date of birth');
  }

  // Validate favorite color (not empty)
  if (color === '') {
    displayError('colorError', 'Please select a favorite color');
  }

  // If there are no errors, submit the form
  if (!document.getElementsByClassName('error').length) {
    document.getElementById('registrationForm').submit();
  }
}

function displayError(elementId, errorMessage) {
  var errorElement = document.getElementById(elementId);
  errorElement.textContent = errorMessage;
}

function clearErrors() {
  var errorElements = document.getElementsByClassName('error');
  for (var i = 0; i < errorElements.length; i++) {
    errorElements[i].textContent = '';
  }
}
