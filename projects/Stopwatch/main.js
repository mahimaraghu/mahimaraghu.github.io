let f = new Intl.NumberFormat('en-US', { minimumIntegerDigits: 2, useGrouping: false });

let display = document.getElementById('display');
let pause = document.getElementById('pause');
let start = document.getElementById('start');
let reset = document.getElementById('reset');
let tl = document.getElementById('tl');
let tl_display = document.getElementById('tl_display');

let isRunning = false;

let GlobalTimerInterval;
start.addEventListener('click', () => {
    // console.log(display.innerHTML);

    let [hr, min, sec, ms] = display.innerHTML.split(':');

    if (!isRunning) {
        isRunning = true
        GlobalTimerInterval = timer(hr, min, sec, ms);
    }

})


function timer(hour, minute, second, milisecond) {
    let h = parseInt(hour);
    let m = parseInt(minute);
    let s = parseInt(second);
    let ms = parseInt(milisecond);


    let timerInterval = setInterval(() => {
        ms += 1;
        if (ms === 10) {
            s += 1;
            ms = 0;
        }
        if (s === 60) {
            m += 1;
            s = 0;
        }
        if (m === 60) {
            h += 1;
            m = 0;
        }


        display.innerHTML = `${f.format(h)}:${f.format(m)}:${f.format(s)}:${f.format(ms)}`
    }, 100);

    return timerInterval;
}
pause.addEventListener('click', () => {
    if (isRunning) {
        isRunning = false
        clearInterval(GlobalTimerInterval);
    }
})
reset.addEventListener('click', () => {
    isRunning = false
    clearInterval(GlobalTimerInterval);
    display.innerHTML = "00:00:00:00";
    tl_array = [];
    tl_display.innerHTML = "";
})

let tl_array = []
tl.addEventListener('click', () => {
    if (!tl_array.includes(display.innerHTML) && display.innerHTML !== "00:00:00:00") {
        tl_array.push(display.innerHTML);
        tl_display.innerHTML += display.innerHTML + "<br>"
    }
})