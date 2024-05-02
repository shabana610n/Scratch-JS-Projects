// Select the button element using querySelector
const convertBtn = document.querySelector('button');

// Select the input field and output paragraph by their IDs
const kgInput = document.getElementById("kgInput");
const output = document.getElementById("output");

// Function to handle weight conversion
function convertWeight() {
    // Get the value from the input field and convert it to a number
    const kgValue = parseFloat(kgInput.value);

    // Check if the input is a valid number (not NaN)
    if (!isNaN(kgValue)) {
        // Convert kilograms to pounds (1 kg = 2.205 pounds)
        const poundValue = kgValue * 2.205;

        // Display the formatted conversion result
        output.textContent = `${kgValue} kg is equal to ${poundValue.toFixed(2)} pounds.`;
    } else {
        // Display an error message for invalid input
        output.textContent = "Please enter a valid weight.";
    }
}

// Add click event listener to the button
convertBtn.addEventListener('click', convertWeight);