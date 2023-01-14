const getRobo = () => ['stone','paper','scissors'][Math.floor(Math.random()*3)];

let stone = document.querySelector('.stone');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
const user = document.querySelector('.user');
const robot = document.querySelector('.robot');
const roundHTML = document.querySelector('.round');
let again = document.querySelector('.again');
let body= document.querySelector('.main');
let footer= document.querySelector('.footer');

function winner(hc,rc){
	if(hc===rc){
		return "draw"
	}else if(hc==="stone" && rc==="paper")
	{
		return "robot"
	}else if(hc==="stone" && rc==="scissors"){
		return "user"
	}else if(hc==="paper" && rc==="stone"){
		return "user"

	}else if(hc==="paper" && rc==="scissors"){
		return "robot"
	}else if(hc==="scissors" && rc==="stone"){
		return "robot"

	}else if(hc==="scissors" && rc==="paper"){
		return "user"
	}
}

let round = 3;
let score = {
	"user": 0,
	"robot": 0
}

const play = hc => {

		const rb = getRobo();
		const w = winner(hc,rb)
		console.log(w);
		if(w === 'user'){
			score.user++;
			user.textContent = score.user;
		}else if(w === 'robot'){
			score.robot++;
			robot.textContent = score.robot;
		}
		else{
			score.robot++;
			robot.textContent = score.robot;
			score.user++;
			user.textContent = score.user;

		}

		--round;
		roundHTML.textContent = round;
		if(round === 0){
			body.style.display="flex"
			body.style.justifyContent="center"
			body.style.alignItems="center"
			body.style.fontSize="30px"
			body.innerHTML='Game Over!'	;
			footer.innerHTML=''	;

			// body.textContent += <br>	;
			if(score.user > score.robot){
				body.innerHTML+='<br>🥳🥳🥳<br>USER WINS'}
			else if(score.user < score.robot){body.innerHTML+='<br>😭😭😭<br>Robot WINS'}
			else{body.innerHTML+='<br>DRAW!'}
		}
}


stone.addEventListener('click',()=>{play('stone')})
paper.addEventListener('click',()=>{play('paper')})
scissors.addEventListener('click',()=>{play('scissors')})

again.addEventListener('click',()=>{
 round = 3;
	score = {
	"user": 0,
	"robot": 0
	}
			user.textContent = score.user;
			robot.textContent = score.robot;
		roundHTML.textContent = round;




})




