let count = 500
let xx = '0px';
let yy = '0px';
function remove(counter) {
    document.getElementById('op' + counter).remove();
    document.getElementById('kabeewm' + counter).remove();
}

onclick = function (e) {
    var theCookies = document.cookie.split(';');
    var aString = '';
    for (var i = 1 ; i <= theCookies.length; i++) {
		if (theCookies[i-1] == " kabeewm=1"){
			var sound = '<audio src="./sfx/snd_badexplosion.mp3" id="kabeewm' + count + '"></audio>';
            document.body.insertAdjacentHTML('beforeend', sound);
            document.getElementById('kabeewm' + count).play();
            document.getElementById('kabeewm' + count).volume = 0.1;

            var html = '<div id="op' + count + '" style="pointer-events: none; position: absolute; z-index: 99999; top: ' + yy + '; left: ' + xx + ';"><img src="./images/kabeewm !.gif?v=' + count + '"></div>';
            document.body.insertAdjacentHTML('beforeend', html);
            setTimeout(remove.bind(null, count), 2500);
            count++;
		} 
    }
    
}

function kabeewm(){
    var theCookies = document.cookie.split(';');
    var aString = '';
    for (var i = 1 ; i <= theCookies.length; i++) {
		if (theCookies[i-1] == " kabeewm=1"){
			cookie_string = "kabeewm=0; path=/; expires=Thu, 14 Dec 2023 12:00:00 UTC;";
            document.cookie = cookie_string;
            document.getElementById('kabeewmm').innerHTML = "kabeewm ?"
		} else {
            cookie_string = "kabeewm=1; path=/; expires=Thu, 14 Dec 2023 12:00:00 UTC;";
            document.cookie = cookie_string;
            document.getElementById('kabeewmm').innerHTML = "kabeewm !!!!"
        }
    }
}
/*
onclick = function (e) {
    var html = '<div id="op' + count + '" style="pointer-events: none; position: absolute; z-index: 999; top: ' + yy + '; left: ' + xx + ';"><img src="./images/kabeewm !.gif?v=' + count + '"></div>';
    document.body.insertAdjacentHTML('beforeend', html);
    setTimeout(remove.bind(null, count), 820);
    
    count++;
}
*/




onmousemove = function(e){
	let x = e.clientX + 1 + "px";
	let y = e.clientY + 1 + "px";

	xx = e.clientX - 35 + "px";
	yy = e.clientY - 60 + "px";
	//^is used for kabeewm.js but since you cant change onmousemove twice i had to shove it here 
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