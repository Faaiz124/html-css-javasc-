function Login() {
  var emailInput = document.getElementById('email');
  var passwordInput = document.getElementById('Password');

  var enteredEmail = emailInput.value;
  var enteredPassword = passwordInput.value;

  // Retrieve the stored email addresses and passwords from local storage
  var storedEmailAddressesJSON = localStorage.getItem('emailAddresses');
  var storedEmailAddresses = JSON.parse(storedEmailAddressesJSON);

  var storedPasswordsJSON = localStorage.getItem('Password');
  var storedPasswords = JSON.parse(storedPasswordsJSON);

  // Check if the entered email and password are in the stored data
  var emailIndex = storedEmailAddresses.indexOf(enteredEmail);
  var passwordIndex = storedPasswords.indexOf(enteredPassword);

  if (emailIndex !== -1 && passwordIndex !== -1 && emailIndex === passwordIndex) {
    // Email and password are correct, navigate to QuizApp.html
    window.location.href = "QuizApp/QuizApp.html";
  } else {
    // Email or password is incorrect, display an error message
    alert("Invalid email or password. Please try again.");
    emailInput.value = ""; // Clear the email input field
    passwordInput.value = ""; // Clear the password input field
    emailInput.focus(); // Set focus back to the email input field
  }
}

