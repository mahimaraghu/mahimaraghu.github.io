'use strict';
let guess = document.querySelector('.guess')
let message = document.querySelector('.message')
let check = document.querySelector('.check')
let number = document.querySelector('.number')
let score = document.querySelector('.score')
let highscore = document.querySelector('.highscore')

let scorr = 20
let HighSc = 0
let num = function() { return Math.trunc(Math.random() * 20 + 1); }
let num1 = num()

check.addEventListener('click', () => {
    if (!guess.value || guess.value > 20 || guess.value < 0) {
        message.textContent = "Type any num between 0 to 20"
    } else if (Number(guess.value) === num1) {
        document.body.style.backgroundColor = '#60b347';
        // document.querySelector('body').style.backgroundColor = 'green';
        number.style.width = '30rem'
        message.textContent = "Correct Number..."
        number.textContent = num1
            // console.log(highscore.textContent);
        if (scorr > HighSc) {
            HighSc = scorr
            highscore.textContent = HighSc
        }

    } else if (Number(guess.value) !== num1) {
        if (score.textContent > 1) {
            message.textContent = Number(guess.value) > num1 ? "value too high..." : "value too low"
                // score.textContent = Number(score.textContent) - 1;
            scorr--;
            score.textContent = scorr;
        } else {
            message.textContent = "You lost..."
            score.textContent = 0;


        }
    }

})

document.querySelector('.again').addEventListener('click', () => {
    guess.value = '';
    num1 = num();
    number.textContent = '?';
    score.textContent = '20';
    scorr = 20;
    document.body.style.backgroundColor = '#222'
    number.style.width = '15rem'


    message.textContent = "Start Guessing..."
})