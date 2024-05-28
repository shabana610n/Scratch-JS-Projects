const allBtns = document.querySelectorAll('button')
const input = document.querySelector('input')

let displayValue = ''

allBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.id === 'ac') {
            displayValue = ''
            input.value = displayValue
        }
        else if (btn.id === 'equalBtn') {
            let result = eval(displayValue)
            displayValue = result.toFixed(3);  // works properly
            // console.log(typeof displayValue);  // STRING
            input.value = displayValue
            
            // let result = eval(displayValue)
            // displayValue = result;
            // console.log(typeof displayValue);  // NUMBER, and substring method only works on string
            // input.value = displayValue 
        }
        else if (btn.id === 'del') {
            let result = displayValue.substring(0, displayValue.length - 1)
            displayValue = result
            input.value = displayValue
        }
        else {
            displayValue += btn.innerHTML
            input.value = displayValue
        }
    })
})