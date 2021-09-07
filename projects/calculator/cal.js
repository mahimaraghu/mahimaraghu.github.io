let logs = [];
document.querySelectorAll('.calc_btn').forEach(item => {
    item.addEventListener('click', e => {
        let data = document.getElementById('display').innerText

        if (data === "Invalid Expression" || (JSON.stringify(logs) === (JSON.stringify(data.split(','))))) {
            document.getElementById('display').innerText = e.target.dataset.val;
        } else {
            document.getElementById('display').innerText += e.target.dataset.val;
        }
    })
})
document.getElementById('eql').addEventListener('click', () => {
    try {


        let res = eval(document.getElementById('display').innerText);
        if (res) {
            let h = document.getElementById('display').innerText + "=" + res;
            logs.push(h);
        }
        document.getElementById('display').innerText = res;


    } catch (err) {
        // console.log("Not valid expression");
        console.dir(err.message);
        document.getElementById('display').innerText = "Invalid Expression";
    }
});
document.getElementById('AC').addEventListener('click', () => {
    document.getElementById('display').innerText = '';
});

document.getElementById('DEL').addEventListener('click', () => {
    let data = document.getElementById('display').innerText
    if (data === "Invalid Expression") {
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
logs = [];