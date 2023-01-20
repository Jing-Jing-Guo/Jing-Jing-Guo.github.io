// JavaScript Document

function slideDown(id){
	document.getElementById(id).style.animation = "slide-down forwards linear 0.2s";
}

function slideUp(id){
	document.getElementById(id).style.animation = "slide-up forwards linear 0.2s";
}

function orbitAppear(){
	document.getElementById("orbit_1").style.animation = "orbit_ani_1 linear 5s infinite";
	document.getElementById("orbit_2").style.animation = "orbit_ani_1 linear 5s infinite";
	document.getElementById("orbit_3").style.animation = "orbit_ani_1 linear 5s infinite";
	
	document.getElementById("orbit_4").style.animation = "orbit_ani_2 linear 5s infinite";
	document.getElementById("orbit_5").style.animation = "orbit_ani_2 linear 5s infinite";
	
	document.getElementById("orbit_6").style.animation = "orbit_ani_3 linear 5s infinite";
	document.getElementById("orbit_7").style.animation = "orbit_ani_3 linear 5s infinite";
	
	document.getElementById("orbit_8").style.animation = "orbit_ani_4 linear 15s infinite";
	document.getElementById("orbit_9").style.animation = "orbit_ani_4 linear 5s infinite";
	
	document.getElementById("orbit_1").style.animationDelay = "1s";
	document.getElementById("orbit_2").style.animationDelay = "1s";
	document.getElementById("orbit_3").style.animationDelay = "1s";
	
	document.getElementById("orbit_4").style.animationDelay = "1s";
	document.getElementById("orbit_5").style.animationDelay = "1s";
	
	document.getElementById("orbit_6").style.animationDelay = "1s";
	document.getElementById("orbit_7").style.animationDelay = "1s";
	
	document.getElementById("orbit_8").style.animationDelay = "1s";
	document.getElementById("orbit_9").style.animationDelay = "1s";
}

function sleep(delay){
	var start = (new Date()).getTime();
	while((new Date()).getTime() - start < delay){
		continue;
	}
}

function orbitDisappear(){
	document.getElementById("orbit_1").style.animation = "disappear linear 3s forwards";
	document.getElementById("orbit_2").style.animation = "disappear linear 3s forwards";
	document.getElementById("orbit_3").style.animation = "disappear linear 3s forwards";
	document.getElementById("orbit_4").style.animation = "disappear linear 3s forwards";
	document.getElementById("orbit_5").style.animation = "disappear linear 3s forwards";
	document.getElementById("orbit_6").style.animation = "disappear linear 3s forwards";
	document.getElementById("orbit_7").style.animation = "disappear linear 3s forwards";
}

function quoteMove(){
	document.getElementById('quote').style.animation = "appear forwards ease-in-out 2s";
}

function quoteDelay(){
	document.getElementById('quote').style.animationDelay = "0.2s";
}

function recoBoxExpand(){
	document.getElementById('recoBox').style.animation = "recoBox_expand forwards ease-in-out 1s";
}


function checkScrollHeightAndLoadAnimation_recoBox(){
	let windowHeight = window.innerHeight;
	let parentElement = document.getElementById("recoBox");
	let parentOffsetTop = parentElement.offsetTop;

	if(window.pageYOffset + windowHeight > parentOffsetTop + 100){
		recoBoxExpand();
	}
}

window.addEventListener('scroll', checkScrollHeightAndLoadAnimation_recoBox);


function checkScrollHeightAndLoadAnimation_quote(){
	let windowHeight = window.innerHeight;
	let parentElement = document.getElementById("page2");
	let parentOffsetTop = parentElement.offsetTop;

	if(window.pageYOffset + windowHeight > parentOffsetTop + 300){
		quoteMove();
	}
}

window.addEventListener('scroll', checkScrollHeightAndLoadAnimation_quote);

function backToTopShow(){
	document.getElementById("back-to-top").style.animation = "appear forwards ease-in-out 1s";
}

function checkScrollDown(){
	let windowHeight = window.innerHeight;
	let parentElement = document.getElementById("top");
	let parentOffsetTop = parentElement.offsetTop;
	
	if(window.pageYOffset + windowHeight > parentOffsetTop + 400){
		backToTopShow();
	}
}

window.addEventListener('scroll', checkScrollDown);

function backToTopDisappear(){
	document.getElementById("back-to-top").style.animation = "disappear forwards ease-in-out 1s";
}

function checkIfTop(){
	let windowHeight = window.innerHeight;
	let parentElement = document.getElementById("top");
	let parentOffsetTop = parentElement.offsetTop;
	
	if(window.pageYOffset + windowHeight > parentOffsetTop - 200){
		backToTopDisappear();
	}
}

window.addEventListener('scroll', checkIfTop);