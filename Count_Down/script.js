const endDate = '26 May 2024 06:00 PM'
document.getElementById('end-date').innerHTML = endDate

const inputs = document.querySelectorAll('input')

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = Math.floor((end - now) / 1000);  // miliSeconds to seconds
    if (diff < 0) return;

    // convert into days;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}

setInterval(
    () => {
        clock()
    },
    1000
)

//  *  1 sec = 1000 miliseconds
//  *  1 day = 24 hrs
//  *  1 hr = 60 mins
//  *  60 min = 3600 sec
