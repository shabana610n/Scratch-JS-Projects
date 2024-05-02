// Get references to HTML elements
const lengthInput = document.getElementById('length'); // Input for password length
const uppercaseCheckbox = document.getElementById('uppercase'); // Checkbox for uppercase letters
const lowercaseCheckbox = document.getElementById('lowercase'); // Checkbox for lowercase letters
const numbersCheckbox = document.getElementById('numbers'); // Checkbox for numbers
const symbolsCheckbox = document.getElementById('symbols'); // Checkbox for symbols
const passwordOutput = document.getElementById('password'); // Output field for generated password
const copyButton = document.getElementById('copy'); // Button to copy password to clipboard
const generateButton = document.getElementById('generate'); // Button to generate password

// Define character sets
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+';

// Event listener for clicking the generate button
generateButton.addEventListener('click', () => {
    // Get the selected password length
    const passwordLength = parseInt(lengthInput.value);

    // Initialize an empty string to store the characters to be used in the password
    let characterSet = '';

    // Check if checkboxes are checked and add corresponding character sets to the characterSet string
    if (uppercaseCheckbox.checked) {
        characterSet += uppercaseChars;
    }
    if (lowercaseCheckbox.checked) {
        characterSet += lowercaseChars;
    }
    if (numbersCheckbox.checked) {
        characterSet += numberChars;
    }
    if (symbolsCheckbox.checked) {
        characterSet += symbolChars;
    }

    // Initialize an empty string to store the generated password
    let generatedPassword = '';

    // Generate the password by randomly selecting characters from the character set
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        generatedPassword += characterSet[randomIndex];
    }

    // Display the generated password in the output field
    passwordOutput.value = generatedPassword;
});

// Event listener for clicking the copy button
copyButton.addEventListener('click', () => {
    // Check if there is a generated password to copy
    if (passwordOutput.value === '') {
        alert('Please generate a password first.');
    } else {
        // Create a temporary textarea element to copy the password to clipboard
        const tempTextarea = document.createElement('textarea');
        tempTextarea.value = passwordOutput.value;
        document.body.appendChild(tempTextarea);
        tempTextarea.select();
        document.execCommand('copy');
        // Alert the user that the password has been copied to clipboard
        alert('Password copied to clipboard.');
        // Remove the temporary textarea element
        tempTextarea.remove();
    }
});