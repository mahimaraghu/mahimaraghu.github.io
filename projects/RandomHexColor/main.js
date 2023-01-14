let check= document.querySelector('.check')
let code= document.querySelector('.code')
let main= document.querySelector('.main')
let box= document.querySelector('.box')
let msg= document.querySelector('.msg')
let menu= document.querySelector('.menu')
let color_box= document.querySelector('.color_box')
let color= document.querySelector('.color')
let aside= document.querySelector('.aside')
let bg= document.querySelector('.bg')
let color_text= document.querySelector('.color_text')
let c_msg= document.querySelector('.c_msg')


let colorHistory = []

let choice= [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
function getHex(){
let Hcode='#'


for(let i=0;i<6;i++){
 let random = Math.floor(Math.random()*choice.length);
	Hcode+=choice[random];
}

code.innerHTML=`<input type="text" id="color" value="${Hcode}" onblur="changeColor(event)"/>
				<span class="material-icons" onclick="copy(event)" title="Copy">content_copy</span>`;
main.style.backgroundColor=Hcode;
check.style.backgroundColor=Hcode;
colorHistory.unshift(Hcode)
updateColorBox(colorHistory)

}
check.addEventListener('click',getHex);

const copy = (e) => {navigator.clipboard.writeText(document.getElementById('color').value);
e.target.textContent = 'library_add_check';
msg.textContent='Copied!'

}

const changeColor = e => {
	main.style.backgroundColor = e.target.value;
	check.style.backgroundColor = e.target.value;
}
menu.addEventListener('click',()=>{
	aside.classList.toggle('active')

})
let updateColorBox = colorHistory =>{
	let ihtml= ""
 for(let i of colorHistory){
 		ihtml += `<div class="color">
				<span class="bg" style="background-color:${i};"></span>
				<span class="color_text">${i}</span>
				<span class="c_msg"></span>
			</div>`;
 }
 color_box.innerHTML=ihtml
}

color_box.addEventListener('click', e => {
	let c = e.target.closest('.color');
	if(c){
		console.log(c.querySelector('.color_text').innerText);
		navigator.clipboard.writeText(c.querySelector('.color_text').innerText);
		c.querySelector('.c_msg').innerText= " (Copied!)";
		setTimeout(()=>{
			c.querySelector('.c_msg').innerText= "";
		},1500)
	}
})