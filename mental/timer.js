let counter = document.getElementById("counter");
let header = document.getElementById('header-script') 
let time = 20;
let headerAnimCounter = 1;
let timer = setInterval(() => count(), 1000);
let headerAnimTimer = setInterval(() => headAnim(), 650);
let result = document.getElementById("result");

function randomNumber(min, max){
	return Math.floor(Math.random() * (max - min) + min)
}
			
function count(){
	time--;
	counter.innerHTML = time;
	if (time == 0){
		result.outerHTML = "<a href='result.html' id='res-a' title='Тыкай!'><b>Посмотреть результат</b></a>";
		clearInterval(headerAnimTimer);
		header.innerHTML = "Загрузили";
		sessionStorage.setItem('result', randomNumber(1, 51));
	}
}

function headAnim(){
	headerAnimCounter++;
	header.innerHTML = "Что-то грузим"+".".repeat(headerAnimCounter);
	if (headerAnimCounter == 3) headerAnimCounter = 0;
}