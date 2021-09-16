let add = document.getElementById('add');
let input = document.getElementById('input');
let num = document.getElementById('num');
let b1 = document.getElementById('b1');
let income = document.getElementById('income');
let expenditure = document.getElementById('expenditure');
let arr = []

let updateUI = (arr) => {
    income.innerHTML = '';
    expenditure.innerHTML = '';
    for (let i of arr) {

        if (i.type === 'income') {
            income.innerHTML += `<div class="item">
                <p>${i.description}</p>
                 <p>+${i.value}</p>
            </div>`;
        } else {
            expenditure.innerHTML += `<div class="item">
            <p>${i.description}</p>
            <p>-${i.value}</p>
        </div>`;

        }
    }

}

let storedData = localStorage.getItem('BudgetData')
if (storedData) {
    arr = JSON.parse(storedData);
    updateUI(arr);
}


add.addEventListener('click', () => {
    let typeInfo = ''
    if (b1.value === '-') {
        typeInfo = 'expenditure'
        if (input.value && num.value) {
            arr.push({
                type: typeInfo,
                description: input.value,
                value: num.value

            })
        } else {
            console.warn('value and description should not be empty.')
        }
    } else {
        typeInfo = 'income'
        if (input.value && num.value) {
            arr.push({
                type: typeInfo,
                description: input.value,
                value: num.value

            })

        } else {
            console.warn('value and description should not be empty.')
        }
    }
    updateUI(arr);

    localStorage.setItem('BudgetData', JSON.stringify(arr));

    let sum = 0;
    for (const i of arr) {
        if (i.type === 'income') {
            sum += parseFloat(i.value);
        } else {
            sum -= parseFloat(i.value);
        }
    }

    console.log(sum);

    document.querySelector('#res').innerHTML = sum.toFixed(2);
});
document.getElementById('month').innerHTML = new Date().toLocaleDateString('en-us', { month: 'long', year: 'numeric' })


function clearData() {
    updateUI([]);
    localStorage.removeItem('BudgetData');
    document.getElementById('input').value = ''
    document.getElementById('num').value = ''
    document.getElementById('res').innerHTML = "0.00"
    arr = []
}



// var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// var today  = new Date();

// console.log(today.toLocaleDateString("en-US")); // 9/17/2016
// console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
// console.log(today.toLocaleDateString("hi-IN", options)); // शनिवार, 17 सितंबर 2016