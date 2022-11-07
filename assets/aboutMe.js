// JavaScript Document

function aboutMeGlow(){
	document.getElementById("profile_titles").style.animation = "profile_titles_glow forwards linear 1s";
	document.getElementById("profile_frame").style.animation = "profile_shadow forwards linear 1s";
	document.getElementById("PS").style.animation = "PS-show forwards linear 1s";
}

function iconGlow(id){
	document.getElementById(id).style.animation = "profile_icon_glow infinite linear 1s";
	if(id == "mailtome"){
		document.getElementById("mailtome_text").style.animation = "appear forwards linear 0.5s";
	}
	else if(id == "cv"){
		document.getElementById("cv_text").style.animation = "appear forwards linear 0.5s";
	}
	else if(id == "twitter"){
		document.getElementById("twitter_text").style.animation = "appear forwards linear 0.5s";
	}
	else if(id == "portfolio"){
		document.getElementById("portfolio_text").style.animation = "appear forwards linear 0.5s";
	}
	else if(id == "github"){
		document.getElementById("github_text").style.animation = "appear forwards linear 0.5s";
	}
}

function iconNotGlow(id){
	document.getElementById(id).style.animation = "";
	if(id == "mailtome"){
		document.getElementById("mailtome_text").style.animation = "disappear forwards linear 0.5s";
	}
	else if(id == "cv"){
		document.getElementById("cv_text").style.animation = "disappear forwards linear 0.5s";
	}
	else if(id == "twitter"){
		document.getElementById("twitter_text").style.animation = "disappear forwards linear 0.5s";
	}
	else if(id == "portfolio"){
		document.getElementById("portfolio_text").style.animation = "disappear forwards linear 0.5s";
	}
	else if(id == "github"){
		document.getElementById("github_text").style.animation = "disappear forwards linear 0.5s";
	}
}