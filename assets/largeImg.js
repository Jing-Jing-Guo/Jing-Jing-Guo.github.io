// JavaScript Document
function large(id){
	document.getElementById('large-block').style.display="block";
	document.getElementById('img').src= document.getElementById(id).src; 
}

function findHeight(point_id){
	let bridge = document.getElementById(point_id);
	let root = document.body;
	let height = 0;
	do{
		height += bridge.offsetTop;
		bridge = bridge.offsetParent;
	}while(bridge != root)
		
	return height-50;
}

function goTo(id){
	window.scrollTo({
		top: findHeight(id),
		behavior: 'smooth'
	})
}