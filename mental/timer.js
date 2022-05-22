let counter = document.getElementById("counter");
let header = document.getElementById('header-script') 
let time = 20;
let headerAnimCounter = 1;
let timer = setInterval(() => count(), 1000);
let headerAnimTimer = setInterval(() => headAnim(), 650);
let result = document.getElementById("result");

function count(){
	time--;
	counter.innerHTML = time;
	if (time == 0){
		result.outerHTML = "<a href='result.html' id='res-a' title='Тыкай!'><b>Посмотреть результат</b></a>";
	}
}

function headAnim(){
	headerAnimCounter++;
	header.innerHTML = "Что-то грузим"+".".repeat(headerAnimCounter);
	if (headerAnimCounter == 3) headerAnimCounter = 0;
}