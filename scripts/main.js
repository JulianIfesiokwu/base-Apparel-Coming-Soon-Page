const emailBar = document.querySelector('.email-bar');
const submitBtn = document.querySelector('.submit-btn');
const errorMessage = document.getElementById('error');
const exclamation = document.querySelector('.exclamation');

// Functions
function validateEmail(e) {
    // Prevent default 
    e.preventDefault();

    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailBar.value))
  {
    alert('Thank you! You will hear from us soon');
  } else {
    // alert("You have entered an invalid email address!");
    displayWarnings();
    setTimeout(removeWarnings, 3000)    
  }
}

// Display both error message and exclamation mark

function displayWarnings() {
    errorMessage.style.display = 'block';
    exclamation.style.display = 'block';
}

// Remove both error message and exclamation mark

function removeWarnings() {
    errorMessage.style.display = 'none';
    exclamation.style.display = 'none';
}

submitBtn.addEventListener('click', validateEmail)