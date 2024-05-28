const month = document.querySelector('.month')
const day = document.querySelector('.day')
const date = document.querySelector('.date')
const year = document.querySelector('.year')

window.addEventListener('DOMContentLoaded', () => {
    const jsDate = new Date()

    month.innerHTML = jsDate.toLocaleDateString('en-US', { month: "long" })
    day.innerHTML = jsDate.toLocaleDateString('en-US', { weekday: "long" })
    date.innerHTML = jsDate.getDate()
    year.innerHTML = jsDate.getFullYear()
})
