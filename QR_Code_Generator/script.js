const qrInput = document.getElementById('qr-input')
const qrImg = document.getElementById('qr-img')
const qrBtn = document.getElementById('qr-button')

qrBtn.addEventListener('click', () => {
    const inputVal = qrInput.value
    
    if (inputVal === '' || inputVal <= 0) {
        alert('Please Enter a Valid Value!')
    }
    else {
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputVal}`
        qrImg.alt = `QR Code for ${inputVal}`
    }
})