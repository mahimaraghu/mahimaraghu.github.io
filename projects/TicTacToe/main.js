if(window.NodeList && !NodeList.prototype.filter && !NodeList.prototype.map){
    NodeList.prototype.filter = Array.prototype.filter
    NodeList.prototype.map = Array.prototype.map
}

const Oname = document.querySelector('#Oname');
const Xname = document.querySelector('#Xname');
const Oscore = document.querySelector('#Oscore');
const Xscore = document.querySelector('#Xscore');
const info = document.querySelector('#info');
const form = document.querySelector('#playerNameForm');
const boxes = document.querySelectorAll('.box');
const reset = document.querySelector('.reset');
let scoreBoard = {
	'O': ["",0],
	'X':["",0]
}
let activeTurn = 'O';

const updateScoreboard = score =>{
	Oname.textContent = score['O'][0];
	Xname.textContent = score['X'][0];
	Oscore.textContent = score['O'][1];
	Xscore.textContent = score['X'][1];
}
const resetGame = () => {
	boxes.forEach(m=>{
		m.disabled = false
		m.textContent = ''
	})
	activeTurn ='O';
	info.textContent = `${scoreBoard[activeTurn][0]}'s turn (${activeTurn})`;
}
reset.addEventListener('click',resetGame);

const startGame = () => {
	resetGame();
	scoreBoard['O'][1] = 0
	scoreBoard['X'][1] = 0
	updateScoreboard(scoreBoard);
}
boxes.forEach(b=>{
	b.addEventListener('click',e=>{
		if(!e.target.textContent){
			e.target.textContent = activeTurn;
			const winner = calcWinner(activeTurn);
			if(winner && winner === 'win'){
				//win
				info.textContent=`${scoreBoard[activeTurn][0]} Wins`
				scoreBoard[activeTurn][1]++;
				updateScoreboard(scoreBoard);
				boxes.forEach(b=>b.disabled=true)
			}else if(winner && winner === 'draw'){
				//draw
				info.textContent=`Draw`
				boxes.forEach(b=>b.disabled=true)
			}else{
				//switch next player
				activeTurn==='O'?activeTurn='X':activeTurn='O';
				info.textContent = `${scoreBoard[activeTurn][0]}'s turn (${activeTurn})`;
			}
		}
	})
})

const calcWinner = activeTurn =>{
	const winningCondition = ['123','456','789','147','258','369','159','357'];
	const choiceCheck=[]
	const currInputs = boxes.filter(b=>b.textContent===activeTurn).map(i=>i.dataset.input);
	for(let i=0 ;i<currInputs.length;i++){
		for(let j=i+1;j<currInputs.length;j++){
			for(let k=j+1;k<currInputs.length;k++){
				choiceCheck.push(currInputs[i]+currInputs[j]+currInputs[k])
			}
		}
	}
	if(choiceCheck.some(w=>winningCondition.includes(w))){
		return 'win'
	}
	if(boxes.filter(f=>f.textContent).length === 9){
		return 'draw'
	}
}

form.addEventListener('submit',e=>{
e.preventDefault();
const formData = new FormData(form);
scoreBoard['O'][0] = formData.get('player1').split(" ").slice(0,3).join(' ');
scoreBoard['X'][0] = formData.get('player2').split(" ").slice(0,3).join(' ');
closeModal(document.querySelector('#takeUser'));
updateScoreboard(scoreBoard);
startGame()
});

document.querySelectorAll('[data-m-trigger]').forEach(mt => {
	mt.addEventListener('click', () => {
		// console.log(e.target.closest('[data-m-trigger]'));
		openModal(document.querySelector(mt.dataset.mTrigger));
	});
});

document.querySelector('.modal-overlay').addEventListener('click',()=>{
 document.querySelectorAll('.modal.active').forEach(m => closeModal(m));
});

document.querySelectorAll('[data-m-close]').forEach(c => {
	c.addEventListener('click',e => {
		closeModal(e.target.closest('.modal'))
	})
})

const openModal = modal => {
	document.querySelector('.modal-overlay').classList.add('active');
	modal.classList.add('active');
}

const closeModal = modal => {
	document.querySelector('.modal-overlay').classList.remove('active');
	modal.classList.remove('active');
}


// document.querySelector('.container').addEventListener('mouseenter',e=>{
// 	if(e.target.querySelector('.box[disabled]')){
// 		alert('Please click on StartGame button to Play.')
// 	}
// })