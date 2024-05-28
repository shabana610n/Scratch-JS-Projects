const btn = document.querySelector('button')
const color = document.getElementById('color')
const body = document.querySelector('body')

btn.addEventListener('click', () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    console.log(`${randomColor}`);

    color.innerHTML = randomColor
    body.style.backgroundColor = color.innerHTML
})