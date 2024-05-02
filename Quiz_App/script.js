// Selecting necessary HTML elements
const questionElement = document.querySelector('h2');
const optionALabel = document.getElementById('option-a-text');
const optionBLabel = document.getElementById('option-b-text');
const optionCLabel = document.getElementById('option-c-text');
const optionDLabel = document.getElementById('option-d-text');
const submitButton = document.getElementById('submit');
const scoreDisplay = document.querySelector('h3');

// Initializing variables for current question index and score
let currentQuestionIndex = 0;
let userScore = 0;

// Adding event listener to the submit button
submitButton.addEventListener('click', (detailsofEvnt) => {
    detailsofEvnt.preventDefault()
    
    // Checking if any option is selected
    let selectedOption = document.querySelector("input[type='radio']:checked");

    if (selectedOption === null) {
        alert('Please select at least one option!');
    } else {
        // Checking if the selected option is correct and updating the score
        if (selectedOption.nextElementSibling.innerHTML === quiz[currentQuestionIndex].answer) {
            userScore++;
        }

        // Moving to the next question
        currentQuestionIndex++;
        if (currentQuestionIndex < quiz.length) {

            // Resetting the previous selected option to ensure that the user starts each question with no pre-selected options.
            selectedOption.checked = false;

            // Displaying the next question and its options
            questionElement.innerHTML = quiz[currentQuestionIndex].question;
            optionALabel.innerHTML = quiz[currentQuestionIndex].ans1text;
            optionBLabel.innerHTML = quiz[currentQuestionIndex].ans2text;
            optionCLabel.innerHTML = quiz[currentQuestionIndex].ans3text;
            optionDLabel.innerHTML = quiz[currentQuestionIndex].ans4text;

        } else {
            // Displaying the final score
            scoreDisplay.style.display = 'block';
            scoreDisplay.innerHTML = `Your Score is ${userScore} out of ${quiz.length}`;

            // Coloring the score based on performance
            if (userScore === 1) {
                scoreDisplay.style.color = '#F1C40E'; // Yellow
            } else if (userScore === 2) {
                scoreDisplay.style.color = '#F39C12'; // Orange
            } else if (userScore === 3) {
                scoreDisplay.style.color = 'blue';
            } else if (userScore === 4) {
                scoreDisplay.style.color = 'green';
            } else {
                scoreDisplay.style.color = 'red'; // Red color for 0 score
            }
            submitButton.innerHTML = `Quiz has been Ended!`
        }
    }
});