// Get references to HTML elements
const changeCounter = document.getElementById('output');
const plusButton = document.getElementById('plus');
const resetButton = document.getElementById('reset');
const minusButton = document.getElementById('minus');

// Function to update the counter display
function updateCounter(value) {
    changeCounter.textContent = value;
}

// Function to handle button clicks
function handleButtonClick(action) {
    if (action === 'plus') {
        counter++;
    } else if (action === 'reset') {
        counter = 0;
    } else if (action === 'minus') {
        counter--;
    }
    updateCounter(counter);
}

// Initialize counter variable
let counter = 0;

// Add event listeners to buttons
plusButton.addEventListener('click', () => handleButtonClick('plus'));
resetButton.addEventListener('click', () => handleButtonClick('reset'));
minusButton.addEventListener('click', () => handleButtonClick('minus'));