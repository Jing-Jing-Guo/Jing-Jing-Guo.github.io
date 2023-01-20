// JavaScript Document

function jumpOutRed(){
	document.getElementById("redHerringBox").style.animation = "jump_out_red forwards 0.8s ease-out";
	document.getElementById("height_box_1").style.animation = "height_ani forwards 0.8s ease-out";
	
}

function delayRed(){
	document.getElementById("redHerringBox").style.animationDelay = "0.3s";
	document.getElementById("height_box_1").style.animationDelay = "0.3s";
}

function checkScrollHeightAndLoadAnimation(){
	let windowHeight = window.innerHeight;
	let parentElement = document.getElementById("redHerring");
	let parentOffsetTop = parentElement.offsetTop;

	if(window.pageYOffset + windowHeight > parentOffsetTop + 200){
		delayRed();
		jumpOutRed();
	}
}

/*
function componentDidMount(){
	checkScrollHeightAndLoadAnimation();
	window.addEventListener('scroll', checkScrollHeightAndLoadAnimation);
}

function componentWillUnmount(){
	window.removeEventListener('scroll', checkScrollHeightAndLoadAnimation);
}
*/

window.addEventListener('scroll', checkScrollHeightAndLoadAnimation);