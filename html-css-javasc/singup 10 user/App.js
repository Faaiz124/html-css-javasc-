// Create an array of email addresses
var emailAddresses = [
  "ali123@gmail.com",
  "ahmedkhan99@hotmail.com",
  "mohsinawan55@yahoo.com",
  "usman.malik@gmail.com",
  "kamran.abbasi@hotmail.com",
  "saadullah12@yahoo.com",
  "rashid.ali@gmail.com",
  "zubairahmed32@hotmail.com",
  "amir.khan@yahoo.com",
  "waqasqasim45@gmail.com"
];

var Password = [
  "12345"
];
// Convert the array to JSON
var emailAddressesJSON = JSON.stringify(emailAddresses);
var Password = JSON.stringify(Password);

// Store the JSON in the local storage
localStorage.setItem('emailAddresses', emailAddressesJSON);
localStorage.setItem('Password', Password);


  function Login() {
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('Password');

    var enteredEmail = emailInput.value;
    var enteredPassword = passwordInput.value;

    // Check if the entered email is in the list of email addresses
    var emailAddresses = [
      "ali123@gmail.com",
      "ahmedkhan99@hotmail.com",
      "mohsinawan55@yahoo.com",
      "usman.malik@gmail.com",
      "kamran.abbasi@hotmail.com",
      "saadullah12@yahoo.com",
      "rashid.ali@gmail.com",
      "zubairahmed32@hotmail.com",
      "amir.khan@yahoo.com",
      "waqasqasim45@gmail.com"
    ];

    if (emailAddresses.includes(enteredEmail)) {
      // Email is correct, navigate to index.html
      window.location.href = "wellcom.html";
    } else {
      // Email is incorrect, display an error message
      alert("Invalid email. Please try again.");
      emailInput.value = ""; // Clear the email input field
      passwordInput.value = ""; // Clear the password input field
      emailInput.focus(); // Set focus back to the email input field
    }
  }



alert('Wellcome user')
