let scrollOffsetY = document.getElementsByTagName('html')[0].scrollTop;
let bgDiv = document.getElementsByClassName('title')[0];
bgDiv.style.backgroundPosition = "-100px "+((645-scrollOffsetY)/3)+"px, center";

window.addEventListener('scroll', () => {
	scrollOffsetY = document.getElementsByTagName('html')[0].scrollTop;
	bgDiv.style.backgroundPosition = "-100px "+((645-scrollOffsetY)/3)+"px, center";
});