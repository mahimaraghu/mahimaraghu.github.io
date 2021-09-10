let logs = [];
document.querySelectorAll('.calc_btn').forEach(item => {
    item.addEventListener('click', e => {
        let data = document.getElementById('display').innerText

        if (data === "Invalid Expression" || data === "Infinity" || (JSON.stringify(logs) === (JSON.stringify(data.split(','))))) {
            document.getElementById('display').innerText = e.target.dataset.val;
        } else {
            document.getElementById('display').innerText += e.target.dataset.val;
        }
    })
})
document.getElementById('eql').addEventListener('click', () => {
    if (document.getElementById('display').innerText) {
        try {


            let res = eval(document.getElementById('display').innerText);
            if (res != "Infinity" || res != "undefined") {
                let h = document.getElementById('display').innerText + "=" + res;
                logs.push(h);
            }
            document.getElementById('display').innerText = res;


        } catch (err) {
            // console.log("Not valid expression");
            console.dir(err.message);
            document.getElementById('display').innerText = "Invalid Expression";
        }
    }
});
document.getElementById('AC').addEventListener('click', () => {
    document.getElementById('display').innerText = '';
});

document.getElementById('DEL').addEventListener('click', () => {
    let data = document.getElementById('display').innerText
    if (data === "Invalid Expression" || data === "Infinity") {
        document.getElementById('display').innerText = "";
    } else {
        document.getElementById('display').innerText = data.slice(0, -1);
    }
});
document.getElementById('history').addEventListener('click', () => {
    if (document.getElementById('display').innerText === '') {


        document.getElementById('display').innerText = logs;

    } else {
        document.getElementById('display').innerText = "";
        document.getElementById('display').innerText = logs;

    }
});
window.addEventListener('keyup', (e) => {
    const acceptedKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '+', '-', '*', '/', '%', '(', ')'];
    console.log(e)
        // Add to Display
    if (acceptedKeys.includes(e.key)) {
        document.getElementById('display').innerText = document.getElementById('display').innerText + e.key;
    }
    // Clear Display
    if (e.key === 'c') {
        document.getElementById('display').innerText = ""
    }
    // Delete from Display
    if (e.key === 'Backspace' || e.key === 'Delete') {
        document.getElementById('display').innerText = document.getElementById('display').innerText.slice(0, -1)
    }

    // Evaluate
    if (e.key === 'Enter' || e.key === '=') {
        document.getElementById('display').innerText = eval(document.getElementById('display').innerText)
    }

})
logs = [];