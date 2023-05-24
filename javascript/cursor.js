onmousemove = function(e){
	let x = e.clientX + 1 + "px";
	let y = e.clientY + 1 + "px";
	var r = document.querySelector(':root');
	
	function mouse1(){
		r.style.setProperty('--mouseposy', y);
		r.style.setProperty('--mouseposx', x );
	}
	setTimeout(mouse1, 0);
	
	
	function mouse2(){
		r.style.setProperty('--mouseposy1', y);
		r.style.setProperty('--mouseposx1', x );
	}
	setTimeout(mouse2, 35);
	
	
	function mouse3(){
		r.style.setProperty('--mouseposy2', y);
		r.style.setProperty('--mouseposx2', x );
	}
	setTimeout(mouse3, 70);
	
	
	function mouse4(){
		r.style.setProperty('--mouseposy3', y);
		r.style.setProperty('--mouseposx3', x );
	}
	setTimeout(mouse4, 105);
	
	
	function mouse5(){
		r.style.setProperty('--mouseposy4', y);
		r.style.setProperty('--mouseposx4', x );
	}
	setTimeout(mouse5, 140);
	
	
	
	//console.log("mouse location:", x, y);
}