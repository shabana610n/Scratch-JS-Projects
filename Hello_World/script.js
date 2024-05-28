const btn = document.querySelector('button')
const userName = document.getElementById('userName')

btn.addEventListener('click', () => {
    const yourName = prompt('Please enter your name: ');
    userName.innerHTML = `${yourName}!`
})