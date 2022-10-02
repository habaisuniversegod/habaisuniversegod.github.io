const starsDiv = document.querySelector(".stars");
const stars = document.querySelectorAll(".stars > span");

let clickedId = -1;

starsDiv.addEventListener('mouseover', () => {
	for(let i = 0; i < 5; i++){
		stars[i].addEventListener('mouseover', () => clickedId = i)
		stars[i].addEventListener('mouseout', () => clickedId = -1)
	}})

starsDiv.addEventListener('click', () => {
	if (clickedId >= 0){
		starsDiv.style.marginLeft = -(4-clickedId)*62+'px'
		document.querySelector('.stars > p').innerHTML = "Мы рады, что вам понравилось :)"
		setTimeout(() => {
			for(let j = 0; j < 5; j++){
			stars[j].style.color = "#ce3333";
	}}, 5)}})
	