let f = new Intl.NumberFormat('en-US', { minimumIntegerDigits: 2, useGrouping: false });

let display = document.getElementById('display');
let pause = document.getElementById('pause');
let start = document.getElementById('start');
let reset = document.getElementById('reset');

let timeMin = document.getElementById('timeMin');
let timeSec = document.getElementById('timeSec');

let GlobalTimerInterval;

for (let t = 0; t < 60; t++) {

    t = f.format(t);

    if (t === '00') {
        timeMin.innerHTML += `<option value="${t}" selected>${t}</option>`;
        timeSec.innerHTML += `<option value="${t}" selected>${t}</option>`
    } else {
        timeMin.innerHTML += `<option value="${t}">${t}</option>`;
        timeSec.innerHTML += `<option value="${t}">${t}</option>`;
    }
}


start.addEventListener('click', () => {

    let [min, sec] = display.innerHTML.split(':');
    if (min === '--' || sec === '--') {
        if (timeMin.value === '00' && timeSec.value === '00') { alert('Please select a Time to start StopWatch!') } else { GlobalTimerInterval = timer(timeMin.value, timeSec.value); }
    } else {
        clearInterval(GlobalTimerInterval);
        GlobalTimerInterval = timer(min, sec);
    }
})


function timer(minute, second) {
    let m = parseInt(minute);
    let s = parseInt(second);

    display.innerHTML = `${minute}:${second}`;

    let timerInterval = setInterval(() => {
        if (m === 0 && s === 0) {
            // stop
            clearInterval(timerInterval);
        } else if (s === 0) {
            m = m - 1
            s = 59
        } else {
            s = s - 1
        }

        display.innerHTML = `${f.format(m)}:${f.format(s)}`
    }, 1000);

    return timerInterval;
}

pause.addEventListener('click', () => {
    clearInterval(GlobalTimerInterval);
})
reset.addEventListener('click', () => {
    clearInterval(GlobalTimerInterval);
    display.innerHTML = "--:--";
})