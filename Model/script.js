const btn = document.querySelector('button')
const model = document.querySelector('.text')

btn.addEventListener('click', () => {
    model.style.display = 'block'
    model.addEventListener('click', () => {
        model.style.display = 'none'
    })
})