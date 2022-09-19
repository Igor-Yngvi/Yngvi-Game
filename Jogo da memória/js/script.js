var nivel;
var win;
var play = '';
var casa;
function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
   }
async function c(casa){
	document.getElementById(casa).style.backgroundColor = "#9048da";
	await sleep(50);
	document.getElementById(casa).style.backgroundColor = "#e9e9e9";
	play = play + casa;
	console.log(play);
}
async function slc(nivel){
	console.log("Nivel " + nivel);
	play = '';
	if(nivel == 1){
		document.getElementById('a1').style.backgroundColor = "#ff3f3f";
		await sleep(1000);
		document.getElementById('a1').style.backgroundColor = "#e9e9e9";
		document.getElementById('b3').style.backgroundColor = "#3f8fff";
		await sleep(1000);
		document.getElementById('b3').style.backgroundColor = "#e9e9e9";
		document.getElementById('b1').style.backgroundColor = "#3f8fff";
		await sleep(1000);
		document.getElementById('b1').style.backgroundColor = "#e9e9e9";
		document.getElementById('c1').style.backgroundColor = "#69ff3f";
		await sleep(1000);
		document.getElementById('c1').style.backgroundColor = "#e9e9e9";
		document.getElementById('a2').style.backgroundColor = "#ff3f3f";
		await sleep(1000);
		document.getElementById('a2').style.backgroundColor = "#e9e9e9";
		alert("Seu turno");
		win = "a1b3b1c1a2";
		console.log(win);
		document.getElementById('bt').innerHTML = "Envie";
		document.getElementById('bt').removeAttribute('onclick','slc()');
		document.getElementById('bt').setAttribute('onclick','check(2)');
		//fim nivel 1
	}if(nivel == 2){
		document.getElementById('a3').style.backgroundColor = "#ff3f3f";
		await sleep(900);
		document.getElementById('a3').style.backgroundColor = "#e9e9e9";
		document.getElementById('c1').style.backgroundColor = "#69ff3f";
		await sleep(900);
		document.getElementById('c1').style.backgroundColor = "#e9e9e9";
		document.getElementById('c2').style.backgroundColor = "#69ff3f";
		await sleep(900);
		document.getElementById('c2').style.backgroundColor = "#e9e9e9";
		document.getElementById('a1').style.backgroundColor = "#ff3f3f";
		await sleep(900);
		document.getElementById('a1').style.backgroundColor = "#e9e9e9";
		document.getElementById('a2').style.backgroundColor = "#ff3f3f";
		await sleep(900);
		document.getElementById('a2').style.backgroundColor = "#e9e9e9";
		document.getElementById('b2').style.backgroundColor = "#3f8fff";
		await sleep(900);
		document.getElementById('b2').style.backgroundColor = "#e9e9e9";
		document.getElementById('b1').style.backgroundColor = "#3f8fff";
		await sleep(900);
		document.getElementById('b1').style.backgroundColor = "#e9e9e9";
		alert("Seu turno");
		win = "a3c1c2a1a2b2b1";
		console.log(win);
		document.getElementById('bt').innerHTML = "Envie";
		document.getElementById('bt').removeAttribute('onclick','slc()');
		document.getElementById('bt').setAttribute('onclick','check(3)');
		//fim nivel 2
	}if(nivel == 3){
		document.getElementById('a2').style.backgroundColor = "#ff3f3f";
		await sleep(800);
		document.getElementById('a2').style.backgroundColor = "#e9e9e9";
		document.getElementById('b2').style.backgroundColor = "#3f8fff";
		await sleep(800);
		document.getElementById('b2').style.backgroundColor = "#e9e9e9";
		document.getElementById('c3').style.backgroundColor = "#69ff3f";
		await sleep(800);
		document.getElementById('c3').style.backgroundColor = "#e9e9e9";
		document.getElementById('a2').style.backgroundColor = "#ff3f3f";
		await sleep(800);
		document.getElementById('a2').style.backgroundColor = "#e9e9e9";
		document.getElementById('b1').style.backgroundColor = "#3f8fff";
		await sleep(800);
		document.getElementById('b1').style.backgroundColor = "#e9e9e9";
		document.getElementById('c1').style.backgroundColor = "#69ff3f";
		await sleep(800);
		document.getElementById('c1').style.backgroundColor = "#e9e9e9";
		document.getElementById('b1').style.backgroundColor = "#3f8fff";
		await sleep(800);
		document.getElementById('b1').style.backgroundColor = "#e9e9e9";
		document.getElementById('c3').style.backgroundColor = "#ff3f3f";
		await sleep(800);
		document.getElementById('c3').style.backgroundColor = "#e9e9e9";
		document.getElementById('a1').style.backgroundColor = "#ff3f3f";
		await sleep(800);
		document.getElementById('a1').style.backgroundColor = "#e9e9e9";
		document.getElementById('b2').style.backgroundColor = "#3f8fff";
		await sleep(800);
		document.getElementById('b2').style.backgroundColor = "#e9e9e9";
		alert("Seu turno");
		win = "a2b2c3a2b1c1b1c3a1a2";
		console.log(win);
		document.getElementById('bt').innerHTML = "Envie";
		document.getElementById('bt').removeAttribute('onclick','slc()');
		document.getElementById('bt').setAttribute('onclick','check(4)');
		//fim nivel 3
	}if(nivel == 4){
		document.getElementById('a2').style.backgroundColor = "#ff3f3f";
		await sleep(700);
		document.getElementById('a2').style.backgroundColor = "#e9e9e9";
		document.getElementById('b2').style.backgroundColor = "#3f8fff";
		await sleep(700);
		document.getElementById('b2').style.backgroundColor = "#e9e9e9";
		document.getElementById('c3').style.backgroundColor = "#69ff3f";
		await sleep(700);
		document.getElementById('c3').style.backgroundColor = "#e9e9e9";
		document.getElementById('a2').style.backgroundColor = "#ff3f3f";
		await sleep(700);
		document.getElementById('a2').style.backgroundColor = "#e9e9e9";
		document.getElementById('b1').style.backgroundColor = "#3f8fff";
		await sleep(700);
		document.getElementById('b1').style.backgroundColor = "#e9e9e9";
		document.getElementById('c1').style.backgroundColor = "#69ff3f";
		await sleep(700);
		document.getElementById('c1').style.backgroundColor = "#e9e9e9";
		document.getElementById('b1').style.backgroundColor = "#3f8fff";
		await sleep(700);
		document.getElementById('b1').style.backgroundColor = "#e9e9e9";
		document.getElementById('c3').style.backgroundColor = "#ff3f3f";
		await sleep(700);
		document.getElementById('c3').style.backgroundColor = "#e9e9e9";
		document.getElementById('a1').style.backgroundColor = "#ff3f3f";
		await sleep(700);
		document.getElementById('a1').style.backgroundColor = "#e9e9e9";
		document.getElementById('b2').style.backgroundColor = "#3f8fff";
		await sleep(700);
		document.getElementById('b2').style.backgroundColor = "#e9e9e9";
		alert("Seu turno");
		win = "a2b2c3a2b1c1b1c3a1a2";
		console.log(win);
		document.getElementById('bt').innerHTML = "Envie";
		document.getElementById('bt').removeAttribute('onclick','slc()');
		document.getElementById('bt').setAttribute('onclick','check(4)');
		//fim nivel 3
	}
}
//parte que valida se ouve vitoria ou derota
function check(valida){
	if(play == win){
		alert("Parabéns");
		document.getElementById('bt').innerHTML = "Começe";
		slc(valida);
	}else{
		alert('Tente novamente');
		document.getElementById('bt').innerHTML = "Começe";
		slc(1);
	}
}
const tm = function tema(){
	if(document.getElementById('switch-flat').checked){
		document.getElementsByTagName('body').style.backgroundColor = "#21014ade";
	}
}

