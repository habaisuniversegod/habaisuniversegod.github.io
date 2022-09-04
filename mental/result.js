let imageID = 0;
imageID = new Number(sessionStorage.getItem('result'));
let image = document.getElementById("image");
let verdict = document.getElementById("verdict");
let age = document.getElementById('age');
let description = document.getElementById('description');

fetch('https://habaisuniversegod.github.io/mental/results.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let verdictObject = data[imageID];
    image.outerHTML = "<img src=images/"+imageID+".jpg width=35% id='image' alt='Если пикчи нет, проверь инет!'>";
	verdict.outerHTML = "<p id='verdict'><b>Вы - "+ verdictObject.name+"</b></p>";
	age.outerHTML = "<p id='age'><b>Ваш психологический возраст: "+verdictObject.age+"</b></p>";
	description.outerHTML = "<p class='description'>"+verdictObject.description+"</p>";
	document.getElementsByTagName('title')[0].innerHTML = "Вы - "+verdictObject.name;
	console.log(verdictObject, imageID)
  });

