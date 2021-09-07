// =========================================================
// Warn if overriding existing method
if (Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function(array) {
        // if the other array is a falsy value, return
        if (!array)
            return false;

        // compare lengths - can save a lot of time 
        if (this.length != array.length)
            return false;

        for (var i = 0, l = this.length; i < l; i++) {
            // Check if we have nested arrays
            if (this[i] instanceof Array && array[i] instanceof Array) {
                // recurse into the nested arrays
                if (!this[i].equals(array[i]))
                    return false;
            } else if (this[i] != array[i]) {
                // Warning - two different object instances will never be equal: {x:20} != {x:20}
                return false;
            }
        }
        return true;
    }
    // Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", { enumerable: false });
// =========================================================
let logs = [];
let spl = "";
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
console.log(logs);
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