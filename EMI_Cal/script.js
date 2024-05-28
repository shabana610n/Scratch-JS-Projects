const btn = document.querySelector('button'); // Calculate button
const output = document.getElementById('output'); // Output or Result

// Function to calculate EMI
function calculateEMI(loan, annualRate, months) {
    // Convert annual interest rate to monthly rate
    let monthlyRate = annualRate / 12 / 100;

    // Calculate EMI using the formula
    let emi = (loan * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);

    return emi.toFixed(2); // Round the EMI to 2 decimal places
}

btn.addEventListener('click', () => {
    // Get input values
    const loanAmount = parseFloat(document.getElementById('loan').value); // Parse loan amount to float
    const annualInterestRate = parseFloat(document.getElementById('rate').value); // Parse interest rate to float
    const loanTenureMonths = parseFloat(document.getElementById('months').value); // Parse loan tenure to float

    // Check if all input values are valid numbers
    if (isNaN(loanAmount) || isNaN(annualInterestRate) || isNaN(loanTenureMonths)) {
        output.textContent = "Please enter valid numerical values.";
    } else {
        // Call calculateEMI function with input values
        const emi = calculateEMI(loanAmount, annualInterestRate, loanTenureMonths);

        // Display the calculated EMI
        output.textContent = `Your EMI is ${emi} per month.`;
    }
});