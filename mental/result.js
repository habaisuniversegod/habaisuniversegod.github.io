let ages = ["undefined", 16, 1, 99, 63, -13, 31, 9, 2022, 15, "Гриб", 10, 21, "3500 лет до н. э.", 9999273899514, 0, "∞", "сперматозоид", -1, 88, 17, 666, 79, "неизвестно", 6, "8 месяцев", 39, 444, "---", 19];
let names = ["undefined", "Тёмыч", "habaisuniversegod", "Гига чад", "Виктор Корнеплод", "Евдоким", "Падж", "Магистр Йога", "Бычки в томатном соусе", "zxc 1000-7", "Ленин", "Чахлан", "Захар", "Эдгар (Егор)", "vladimir", "Цыган", "Пожилой",  "Узконосая обезьяна", "Snickers", "AMD THREADRIPPER", "Молния Маквин", "Оксимирон", "Ауф", "Глист Егор", "Лампочка", "oliver", "gregory", "Скала Джонсон", "Парадиметиламинобензальдегид", "Арабская ночь"];

let descriptions = ["Мудила, нельзя заходить на страницу напрямую, ебланище тупое!",
"Ваше лицо имеет свойство притягивать женщин! Ваша жизнь будет наполнена счастьем.",
"Вы - это я! Значит вы ржете со слова 'Трансильвания' и 'Альбатрос'.",
"Да, я слышал про споры грибов. Надеюсь, они помирились.",
"Вы статный славянский мужик. Вполне способны накастовать понос.",
"Eudokimus Ordinarius",
"Вы - типичный Мигель. Весом подавляете вселенную и искривляете пространственно-временной континуум.",
"Йогу я делаю!",
"Если бы вы были шпротами, вы были бы охуенным!",
"У меня нет проблем, ккроме моей башки, 1000-7, я умер прости! Вы - настоящий гуль.",
"Вы - Вождь Революции! Гриб! Освободитель России от самодержавия! И просто прикольный дед.",
"Я излучаю кринжу!",
"Ух сука, уебу! - Вы вселяете страх во всех рядом проходящих!",
"Ваше любимое занятие - крутиться вокруг собственной оси. Это шд братик!",
"vladimir",
"Вы - Цыган Моисей (или Русик). Автоматически притягиваете деньги, проходя рядом с людьми.",
"Вы - ПАЖИЛОЙ.",
"Вы - истинный представитель вымирающего вида 'denisium orangutane'. Однако вы очень тупы!", 
"Вы работаете на плантации. Не тормози - сникерсни!", 
"Это ваша мечта. Закатай губу!", 
"К мамке подвезди или сам в канаву прыгнешь? ", 
"Говно, залупа, пенис, хер, давалка, хуй, блядина! ", 
"Волк - это не тот кто волк, а тот кто волк...",
"Вы любите сидеть в кишках людей. И потреблять их питательные вещества!",
"Вы являетесь в кошмарах миллионов россиян! Вы - создание САТАНЫ!",
"Вы любите есть яблоки. Однако уровень вашего IQ сопоставим с размером члена.",
"gregory",
"Тун Тун Тутутун Тун.. ТУУУУУННННННННБХГ",
"(CH<sub>3</sub>)<sub>2</sub>NC<sub>6</sub>H<sub>4</sub>CHO",
`مسافر طيب ادخل مدينة بغداد المجيدة
لن تصدق عينيك.
سلسلة من المغامرات تنتظرك في المستقبل ،
هل أنت جاهز؟ افتح يا سمسم!

ليلة عربية.
سحر الشرق.
ها هي التعويذة والانتقام
الشجاعة والشرف.
قصور ورمال.
يا عجيب الشرق!
يا أرض رائعة!
هنا السم والبولات
الموت موعود
انظر ، لا تتثاءب!

رغم ماكرة وقاسية ، فإن الشرق جميل ،
شحذ شفرة الخاص بك وانطلق!
دع السجادة تأخذ الطائرة بعيدًا عن همومك
إلى الشرق حيث تدعو الحكاية!`
]


let imageID = 0
imageID = new Number(sessionStorage.getItem('result'));
let image = document.getElementById("image");
let verdict = document.getElementById("verdict");
let age = document.getElementById('age');
let description = document.getElementById('description');



image.outerHTML = "<img src=images/"+imageID+".jpg width=35% id='image' alt='Если пикчи нет, проверь инет, мудень!'>";
verdict.outerHTML = "<p id='verdict'><b>Вы - "+names[imageID]+"</b></p>";
age.outerHTML = "<p id='age'><b>Ваш психологический возраст: "+ages[imageID]+"</b></p>";
description.outerHTML = "<p class='description'>"+descriptions[imageID]+"</p>";
document.getElementsByTagName('title')[0].innerHTML = "Вы - "+names[imageID];
