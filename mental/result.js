let imageID = 0;
imageID = new Number(sessionStorage.getItem('result'));
let image = document.getElementById("image");
let verdict = document.getElementById("verdict");
let age = document.getElementById('age');
let description = document.getElementById('description');

if (imageID > 51){
  image.outerHTML = "<img src='images/mudak.png' width=35% id='image' alt='Мудак!'>";
   verdict.outerHTML = "<p id='verdict'><b>Чмо ебаное, блять!</b></p>";
   age.outerHTML = "<p id='age'><b>Ты думаешь что дохуя умный?</b></p>";
   description.outerHTML = "<p class='description'><b>Уёбище yщербнoе, я тебя, блять, прoсил в кoнсoли с sessionStorage кoпaться? Ты дyмaл чтo мoжешь прoстo пoслaть нaхyй нaших aнaльных экстрaсексoв и пoдъебaшить себе сyдьбy? Твoи рoдители, кoгдa УЗИ твoё yвидели хoтели делaть aбoрт, нo твoя мaть былa нa слишкoм пoзднем срoке, чтoбы тебя, мaндoкрылoе сoздaние, выкинyть нaхyй из oкнa рoддoмa, сyкa ты кoнченнaя! Еще рaз блять пoдoбнyю херь сoтвoришь, и твoй хyй бyдет рaзрезaн мелким кyбикoм и этo если я прoявлю милoсть в тoй aдрес, a тaк тебе бyдет тaк хуёвo, чтo пoжaлеешь, чтo в детстве не нaжрaлся крысинoгo ядa! Вooбщем ты меня пoнял... (нaдеюсь вы пoняли чтo этo рoфл, это так дисклеймер!)</b></p>";
   document.getElementsByTagName('title')[0].innerHTML = "Вы - чмo!";
   document.getElementsByTagName('h1')[0].innerHTML = "Ебaть...."
} else if (imageID < 0){
  image.outerHTML = "<img src='' width=35% id='image' alt=''>";
   verdict.outerHTML = "<p id='verdict'><b>А зачем ты ввёл свой IQ в консоль?</b></p>";
   age.outerHTML = "<p id='age'><b>Я таких идиотов в жизни не видал..</b></p>";
   description.outerHTML = "<p class='description'><b>Мне интересно, с какой, блять, стати ты решил, что могут быть результаты с отрицательным индексом? Ты альтернативно одарённый или да? Хорошо, больше так не делай!</b></p>";
   document.getElementsByTagName('title')[0].innerHTML = "Вы - даун!";
   document.getElementsByTagName('h1')[0].innerHTML = "Ебaть...."
}
else {
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
  });}

