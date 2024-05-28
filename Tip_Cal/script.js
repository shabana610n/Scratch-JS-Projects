const btn = document.querySelector('button'); // Calculate button
const output = document.getElementById('output'); // Output or Result
const billamount = document.getElementById('bill')
const tippercentage = document.getElementById('tip')

btn.addEventListener('click', () => {
    const billamountvalue = parseFloat(billamount.value);
    const tippercentagevalue = parseFloat(tippercentage.value);

    if (billamount.value === "" || tippercentage.value === "") {
        alert("Please enter the values");
        return;
    } else if (billamount.value < 0 || tippercentage.value < 0) {
        alert("Please enter positive values");
        return;
    } else {

        const tipamount = billamountvalue * (tippercentagevalue / 100);
        const totalbill = billamountvalue + tipamount;
        output.innerText = totalbill;
    }
})