//Funcão bandeira
let flag = document.querySelector('#flag');
let bandeira;
const loop = setInterval(() => {
	if(flag.checked) {
		bandeira = true;
	}else{
		bandeira = false;
	}
}, 10);
//Função que verifica se a bomba 
function cabo(casa) {
	console.log(casa);
	console.log(casa.classList);
	if(casa.classList[1] === "bomb" && bandeira !== true) {
		console.log("Game Over");
		alert("Game Over");
		window.location.reload();
	}
	if(bandeira !== false){
		casa.innerHTML = "<i class='fa-solid fa-flag' for='flag'></i>"
		casa.classList.add("marcado");
	}else {
		casa.classList.add("cavado");
	}
}

//Pegando os elementos da tabela
let a1 = document.querySelector('.a1');
let a2 = document.querySelector('.a2');
let a3 = document.querySelector('.a3');
let a4 = document.querySelector('.a4');
let a5 = document.querySelector('.a5');
let a6 = document.querySelector('.a6');
let b1 = document.querySelector('.b1');
let b2 = document.querySelector('.b2');
let b3 = document.querySelector('.b3');
let b4 = document.querySelector('.b4');
let b5 = document.querySelector('.b5');
let b6 = document.querySelector('.b6');
let c1 = document.querySelector('.c1');
let c2 = document.querySelector('.c2');
let c3 = document.querySelector('.c3');
let c4 = document.querySelector('.c4');
let c5 = document.querySelector('.c5');
let c6 = document.querySelector('.c6');
let d1 = document.querySelector('.d1');
let d2 = document.querySelector('.d2');
let d3 = document.querySelector('.d3');
let d4 = document.querySelector('.d4');
let d5 = document.querySelector('.d5');
let d6 = document.querySelector('.d6');
let e1 = document.querySelector('.e1');
let e2 = document.querySelector('.e2');
let e3 = document.querySelector('.e3');
let e4 = document.querySelector('.e4');
let e5 = document.querySelector('.e5');
let e6 = document.querySelector('.e6');
let f1 = document.querySelector('.f1');
let f2 = document.querySelector('.f2');
let f3 = document.querySelector('.f3');
let f4 = document.querySelector('.f4');
let f5 = document.querySelector('.f5');
let f6 = document.querySelector('.f6');
//Numero aleatrorio 

let inputBomba;

for(let i = 0; i < 10; i++){
	inputBomba = Math.floor(Math.random() * 36);
	console.log(inputBomba);
	switch (inputBomba) {
		case 1:
			a1.classList.add("bomb");
			break;
		case 2:
			a2.classList.add("bomb");
			break;
		case 3:
			a3.classList.add("bomb");
			break;
		case 4:
			a4.classList.add("bomb");
			break;
		case 5:
			a5.classList.add("bomb");
			break;
		case 6:
			a6.classList.add("bomb");
			break;
		case 7:
			b1.classList.add("bomb");
			break;
		case 8:
			b2.classList.add("bomb");
			break;
		case 9:
			b3.classList.add("bomb");
			break;
		case 10:
			b4.classList.add("bomb");
			break;
		case 11:
			b5.classList.add("bomb");
			break;
		case 12:
			b6.classList.add("bomb");
			break;
		case 13:
			c1.classList.add("bomb");
			break;
		case 14:
			c2.classList.add("bomb");
			break;
		case 15:
			c3.classList.add("bomb");
			break;
		case 16:
			c4.classList.add("bomb");
			break;
		case 17:
			c5.classList.add("bomb");
			break;
		case 18:
			c6.classList.add("bomb");
			break;
		case 19:
			d1.classList.add("bomb");
			break;
		case 20:
			d2.classList.add("bomb");
			break;
		case 21:
			d3.classList.add("bomb");
			break;
		case 22:
			d4.classList.add("bomb");
			break;
		case 23:
			d5.classList.add("bomb");
			break;
		case 24:
			d6.classList.add("bomb");
			break;
		case 25:
			e1.classList.add("bomb");
			break;
		case 26:
			e2.classList.add("bomb");
			break;
		case 27:
			e3.classList.add("bomb");
			break;
		case 28:
			e4.classList.add("bomb");
			break;
		case 29:
			e5.classList.add("bomb");
			break;
		case 30:
			e6.classList.add("bomb");
			break;
		case 31:
			f1.classList.add("bomb");
			break;
		case 32:
			f2.classList.add("bomb");
			break;
		case 33:
			f3.classList.add("bomb");
			break;
		case 34:
			f4.classList.add("bomb");
			break;
		case 35:
			f5.classList.add("bomb");
			break;
		case 36:
			f6.classList.add("bomb");
			break;
		default:
			console.log("erro");
	}
}