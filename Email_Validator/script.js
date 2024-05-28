let resultContainer = document.getElementById('resultCont');
let emailInput = document.getElementById('username');
let submitButton = document.getElementById('submitBtn');

submitButton.addEventListener('click', async (event) => {
    event.preventDefault();

    // Display a loading image while the API request is being processed
    resultContainer.innerHTML = `<img src="img/loading.svg" width="113px">`;

    // API key for the email validation service
    let apiKey = `ema_live_tKuW8dai91tkHTyEBYuuzGqQKME0MhDfd3p2coGO`;
    // Get the email address entered by the user
    let email = emailInput.value;
    // Construct the API request URL with the email address and API key
    let apiUrl = `https://api.emailvalidation.io/v1/info?apikey=${apiKey}&email=${email}`;

    try {
        let response = await fetch(apiUrl);
        let emailData = await response.json();

        let resultHtml = ``;
        for (const field in emailData) {
            if (emailData[field] !== '' && emailData[field] !== ' ') {
                resultHtml += `<div>${field}: ${emailData[field]}</div>`;
            }
        }

        resultContainer.innerHTML = resultHtml;

    }
    catch (error) {
        // Handle any errors that occur during the fetch operation
        console.error('Error fetching email validation data:', error);
        resultContainer.innerHTML = `<div>Error fetching data. Please try again later.</div>`;
    }
});