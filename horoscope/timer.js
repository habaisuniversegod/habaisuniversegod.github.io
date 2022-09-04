let timer = setInterval(() => count(), 1000);
let time = 30;
let timerText = document.getElementById('counter');
let result = document.getElementById('result-button');
let dir = [15+Math.random()*35, 15+Math.random()*35]
let pos = [0, 0]

function count(){
	time--;
	timerText.innerHTML = time;
	document.getElementsByTagName('html')[0].style.backgroundPosition = pos[0]+"px "+pos[1]+"px";
	pos[0] += dir[0];
	pos[1] += dir[1];
	dir = [15+Math.random()*35, 15+Math.random()*35]
	if (time == 0){
		result.outerHTML = "<a href='result.html' id='result-button'>Получить прогноз</a>";
		clearInterval(timer);
	}
}

