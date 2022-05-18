let counter = document.getElementById("counter"); 
let time = 20;
let timer = setInterval(() => count(), 1000);
let result = document.getElementById("result");

function count(){
	time--;
	counter.innerHTML = time;
	if (time == 0){
		result.outerHTML = "<a href='result.html' id='res-a'>Посмотреть результат</a>";
	}
}