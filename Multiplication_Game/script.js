// Selecting DOM elements
const numObj1 = document.getElementById('num1');
const numObj2 = document.getElementById('num2');
const submitBtn = document.querySelector('button');
const scoreDisplay = document.querySelector('h3');

// Initialize score
let score = 0;
let expected = 0;

// Function to generate a random integer within a specified range
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Function to display the question with random numbers and return the expected product
function displayQuestion() {
    // Generate random numbers
    const operand1 = generateRandomNumber(1, 20);
    const operand2 = generateRandomNumber(1, 20);

    // Update DOM elements with generated numbers
    numObj1.textContent = operand1;
    numObj2.textContent = operand2;

    // Return the expected product
    return operand1 * operand2;

}
// Event listener for button click
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Get user's input value and parse it as an integer
    const inputVal = parseInt(document.querySelector('input').value);

    // Check if the user's input is a valid number
    if (isNaN(inputVal)) {
        alert('Please write a valid answer in number format!');
    }
    else {
        // Calculate the expected product after displaying the question

        // Check if the user's input matches the expected product

        if (inputVal == expected) {
            // console.log("increment ");
            score++; // Increment score if the answer is correct
        } else {

        }

        expected = displayQuestion();
        // Reset the input field value
        document.querySelector('input').value = '';

        // Update the score result displayed on the page
        scoreDisplay.innerHTML = `Your Score is ${score}`;
    }
});

// Initial display of the question when the page loads
expected = displayQuestion();