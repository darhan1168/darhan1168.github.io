
//Вызов функций
sayHelloUser();
createDot();
calcNumber();
calcRandomNumber();
clickFootball();
//playGameBird();

//Задание первое (попреветствовать пользователя)
function sayHelloUser() {
	let nameUser = prompt('Напишите ваше имя');
	let helloText = document.querySelector('.user-name-hello');
	if (nameUser==false || Object.is(nameUser, NaN) || nameUser==null ) {
		nameUser = 'Ноунейм';
	}
	helloText.innerHTML+=`${nameUser}, на этом сайте вы можете сгенерировать случайные числа, воспользоваться калькулятором и так же сыграть в футбол!`;
}

//Задание второе(калькулятор)
function calcNumber() {
	let firstNumber = 0;
	let secondNumber = 0;
	let res = 0;
	let sugn = document.querySelector('.calc-sugn');
	let textResult = document.querySelector('.res-calc');
	firstNum.oninput = function() {
		firstNumber = +this.value;
	}
	secondNum.oninput = function() {
		secondNumber = +this.value;
	}
	addition.onclick = function() {
		res = firstNumber+secondNumber;
		sugn.innerHTML = '+';
		textResult.innerHTML = res;
	}
	subtraction.onclick = function() {
		res = firstNumber-secondNumber;
		sugn.innerHTML = '-';
		textResult.innerHTML = res;
	}
	mult.onclick = function() {
		res = firstNumber*secondNumber;
		sugn.innerHTML = '*';
		textResult.innerHTML = res;
	}
	division.onclick = function() {
		res = firstNumber/secondNumber;
		sugn.innerHTML = '/';
		if (secondNumber==0) {
			res='На ноль делить нельзя';
		}
		textResult.innerHTML = res;
	}
	if (res>1999999999999999999) {
		res = 'Большое число';
		textResult.innerHTML = res;
	}
}

function calcRandomNumber() {
	let minNum = 0;
	let maxNum = 0;
	let repit = 0;
	let chapterrandom = document.querySelector('.random-number-chapter');
	min.oninput = function() {
		minNum = +this.value;
	}
	max.oninput = function() {
		maxNum = +this.value;
	}
	rep.oninput = function() {
		repit = +this.value;
	}
	btnRandom.onclick = function() {
		chapterrandom.innerHTML = '';
		for (let a = 0; a!=repit; a++) {
			chapterrandom.append(`${getRandomNumber(minNum, maxNum)} `);
			//chapterrandom.innerHTML+=(`${getRandomNumber(minNum, maxNum)}  `);
		}
	}
}
function getRandomNumber(minNum, maxNum) {
	let randomNum = Math.trunc(minNum+(maxNum-minNum+1)*Math.random());
	return randomNum;
}
function createDot() {
	for (let a = 0; a!=40; a++) {
		field.append('	 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .');
	}
}
field.onclick = function(e) { // показывает координаты точки клика
   	//a.innerHTML = e.clientX + ':' + e.clientY;
   	let fieldCoords = field.getBoundingClientRect();
   	let left = e.clientX-fieldCoords.left-field.clientLeft-ball.offsetWidth/2;
   	let top = e.clientY-fieldCoords.top-field.clientTop-ball.offsetHeight/2
   	let elem = document.getElementById('ball');
 	elem.style.top = `${top}px`;
   	elem.style.left = `${left}px`;
}

function clickFootball() {
	let lights = document.querySelectorAll('.light');
	let divWin = document.querySelector('.win-football');
	let chapterWin = document.querySelector('.counter-win');
	let goalkeeper = document.querySelector('#goalkeeper');
	let divLoss = document.querySelectorAll('.loss-football');
	let counterWin = 0;
	divWin.onclick = function() {
		counterWin+=5;	
	}
	for (let loss of divLoss) {
		loss.onclick = function() {
			counterWin--;
		}
	}
	goalkeeper.onclick = function() {
		counterWin-=10;
	}
	document.onclick = function() {
		for (let key of lights) {
			setTimeout(() => chapterWin.innerHTML=`Счёт: ${counterWin}`,1000);
			if (counterWin<-50) {
				key.style.background = 'black';
			}
			if (counterWin>=1) {
				key.style.background = 'red';
			}
			if (counterWin>=10) {
				key.style.background = '#00FFD1';
			}
			if (counterWin>=25) {
				key.style.background = 'blue';
			}
			if (counterWin>=50) {
				key.style.background = '#FC16F2';
			}
			if (counterWin>=75) {
				key.style.background = '#FF002E';
			}
			if (counterWin>=100) {
				key.style.background = '#FFB900';
			}
		}
	}	
}

/*function clickNavBar() {
	let calcNav = document.querySelector('.nav-calc');
	let randomNav = document.querySelector('.nav-random');
	let fieldNav = document.querySelector('.nav-field');
	let calc = document.querySelector('.calculator');
	let random = document.querySelector('.random');
	let field = document.querySelector('.footbal');

	function liClick() {
		calc.scrollIntoView();
	}
	navCalc.addEventListener('click', liClick);

	navCalc.onclick = function() {
		calc.scrollIntoView();
	}
	randomNav.onclick = () => random.scrollIntoView();
	fieldNav.onclick = () => field.scrollIntoView();
}*/