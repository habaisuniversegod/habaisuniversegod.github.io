let scrollOffsetY = document.getElementsByTagName('html')[0].scrollTop;
let bd = document.getElementsByTagName('body')[0];

function bgOffset(){
	scrollOffsetY = document.getElementsByTagName('html')[0].scrollTop;
	bd.style.backgroundPosition = "0 "+scrollOffsetY/1.5+"px";
}

window.addEventListener('scroll', bgOffset);