// JavaScript Document

function jumpOut(){
	document.getElementById("interestingProject-title-block").style.animation = "jump_out forwards 0.8s ease-out";
	document.getElementById("height_box").style.animation = "height_ani forwards 0.8s ease-out";
}

function delayInt(){
	document.getElementById("interestingProject-title-block").style.animationDelay = "0.3s";
	document.getElementById("height_box").style.animationDelay = "0.3s";
}

function checkScrollHeightAndLoadAnimation_interestingProjects(){
	let windowHeight = window.innerHeight;
	let parentElement = document.getElementById("interestingProjects");
	let parentOffsetTop = parentElement.offsetTop;

	if(window.pageYOffset + windowHeight > parentOffsetTop + 200){
		delayInt();
		jumpOut();
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

window.addEventListener('scroll', checkScrollHeightAndLoadAnimation_interestingProjects);