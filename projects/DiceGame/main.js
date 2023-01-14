const img = document.querySelector('.image');
const rollDice = document.querySelector('.rollDice');
const newGame = document.querySelector('.newGame');
const hold = document.querySelector('.hold');
const Tscore1 = document.querySelector('.Tscore__1');
const Tscore2 = document.querySelector('.Tscore__2');
const score1 = document.querySelector('.score__1');
const score2 = document.querySelector('.score__2');

let Score, currentScore, activePlayer, player;
const init = function() {
    Score = [0, 0];
    currentScore = 0;
    activePlayer = 1;
    playing = true;
    score1.innerHTML = '0'
    score2.innerHTML = '0'
    Tscore1.innerHTML = '0'
    Tscore2.innerHTML = '0'
    img.classList.add('hidden');
    document.querySelector(`.box_item__1`).classList.remove('wining-player');
    document.querySelector(`.box_item__2`).classList.remove('wining-player');
    document.querySelector(`.box_item__1`).classList.add('active');
    document.querySelector(`.box_item__2`).classList.remove('active');
}
init();

let switchPlayer = function() {
    document.querySelector(`.score__${activePlayer}`).innerHTML = '0'
    activePlayer = (activePlayer === 1) ? 2 : 1;
    document.querySelector(`.box_item__1`).classList.toggle('active');
    document.querySelector(`.box_item__2`).classList.toggle('active');

    currentScore = 0;
}
let diceRolled = function() {
    if (playing) {
        let dice = Math.floor(Math.random() * 6) + 1;
        img.src = `./images/dice-${dice}.png`
        img.alt = `dice-${dice}`
            // img.setAttribute('alt', dice);
        img.classList.remove('hidden');
        if (dice !== 1) {
            currentScore += dice;
            document.querySelector(`.score__${activePlayer}`).innerHTML = currentScore;
        } else {
            switchPlayer();
        }
    }
}

let holdDice = function() {
    if (playing) {
        Score[activePlayer - 1] += currentScore
        console.log(Score[activePlayer - 1]);
        document.querySelector(`.Tscore__${activePlayer}`).innerHTML = Score[activePlayer - 1];

        // check if score>=100
        if (Score[activePlayer - 1] >= 10) {
            playing = false;
            img.classList.add('hidden');

            document.querySelector(`.box_item__${activePlayer}`).classList.add('wining-player');
            document.querySelector(`.box_item__${activePlayer}`).classList.remove('active');

            console.log(`player-${activePlayer} Won`)

        } else {

            // change player
            switchPlayer();
        }
    }

}


rollDice.addEventListener('click', diceRolled);
hold.addEventListener('click', holdDice)
newGame.addEventListener('click', init);