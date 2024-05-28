// Selecting the textarea, button, and output elements from the DOM
const textArea = document.querySelector('textarea');
const Btn = document.querySelector('button');
const output = document.querySelector('h3');

// Initializing a variable to count vowels
let count = 0;

// Adding a click event listener to the button
Btn.addEventListener('click', () => {
    // Resetting the count for each click
    count = 0;

    // Getting the value of the textarea
    let textAreaVal = textArea.value;

    // Looping through each character in the textarea value
    for (let i = 0; i < textAreaVal.length; i++) {
        // Converting the current character to lowercase for case insensitivity
        var inputVal = textAreaVal.charAt(i).toLowerCase();

        // Checking if the current character is a vowel
        if (inputVal === 'a' || inputVal === 'e' || inputVal === 'i' || inputVal === 'o' || inputVal === 'u') {
            // Incrementing the count if a vowel is found
            count++;
        }
    }

    // Updating the output based on the count of vowels
    if (count === 0) {
        output.innerHTML = `You didn't use any vowel!`;
    } else if (count === 1) {
        output.innerHTML = `You have used ${count} vowel!`;
    } else {
        output.innerHTML = `You have used ${count} vowels!`;
    }
});