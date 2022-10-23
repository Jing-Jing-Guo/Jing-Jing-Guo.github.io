// JavaScript Document

function jumpOutRed(){
	document.getElementById("redHerringBox").style.animation = "jump_out_red forwards 0.8s ease-out";
	document.getElementById("height_box_1").style.animation = "height_ani forwards 0.8s ease-out";
	document.getElementById("back-to-top-block").style.animation = "height_ani forwards 0.8s ease-out";
	
}

function delayRed(){
	document.getElementById("redHerringBox").style.animationDelay = "0.3s";
	document.getElementById("height_box_1").style.animationDelay = "0.3s";
	document.getElementById("back-to-top-block").style.animationDelay = "0.3s";
}