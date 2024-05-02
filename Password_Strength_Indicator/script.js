const input = document.getElementById('password-input')
const indicator = document.querySelector('h3')

input.addEventListener('input', () => {
    const inputVal = input.value

    if (inputVal.length < 8) {
        indicator.innerHTML = `Password must has 8 characters!`
    }

    else if (inputVal.search(/[a-z]/) == -1) {
        indicator.innerHTML = `Password is missing a lower-case letter!`
    }

    else if (inputVal.search(/[A-Z]/) == -1) {
        indicator.innerHTML = `Password is missing a upper-case letter!`
    }

    else if (inputVal.search(/[0-9]/) == -1) {
        indicator.innerHTML = `Password is missing a number!`
    }

    else if (inputVal.search(/[!/@/#/$/%/^/&/*/(/)/*/_/+/{/}/:/"/</>/?/|/[/"\]/\;/\,/./]/) == -1) {
        indicator.innerHTML = `Password is missing a special character!`
    }

    else {
        indicator.innerHTML = `Your Password is Strong!`
        indicator.style.color = 'green'
    }
})